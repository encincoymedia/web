'use strict';

// A decorative, local video: cursor scrubbing on desktop, playback on touch.
// Reduced motion and data-saving visitors keep the lightweight poster only.
(() => {
  const hero = document.querySelector('.hero-motion');
  const video = hero?.querySelector('video');
  if (!video) return;
  const button = hero.querySelector('.hero-motion-toggle');
  const hint = hero.querySelector('.hero-motion-hint');
  const desktop = matchMedia('(min-width: 1025px) and (hover: hover) and (pointer: fine)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = navigator.connection?.saveData;
  let pausedByUser = false;
  let visible = true;
  let ready = false;
  let failed = false;
  let targetProgress = .35;
  let frame = 0;

  const enabled = () => !reducedMotion.matches && !saveData && !failed;
  const active = () => enabled() && visible && !document.hidden && !pausedByUser;

  function updateControls() {
    button.hidden = !enabled() || !ready;
    button.textContent = pausedByUser ? 'Activar movimiento' : 'Pausar movimiento';
    button.setAttribute('aria-pressed', String(pausedByUser));
    hint.hidden = !ready || !active() || !desktop.matches;
  }

  function seek() {
    frame = 0;
    if (!ready || !active() || !desktop.matches || video.seeking) return;
    const target = Math.min(targetProgress * video.duration, video.duration - .04);
    if (Math.abs(video.currentTime - target) > .025) video.currentTime = target;
  }

  function queueSeek() {
    if (!frame) frame = requestAnimationFrame(seek);
  }

  function syncMotion() {
    if (!active()) {
      video.pause();
      cancelAnimationFrame(frame);
      frame = 0;
    } else if (!video.getAttribute('src')) {
      video.src = video.dataset.src;
      video.load();
    } else if (ready && desktop.matches) {
      video.pause();
      queueSeek();
    } else if (ready) {
      video.play().catch(() => {
        // Autoplay may be blocked; the visitor can still start it explicitly.
        if (active() && !desktop.matches) {
          pausedByUser = true;
          updateControls();
        }
      });
    }
    updateControls();
  }

  video.addEventListener('loadeddata', () => {
    ready = Number.isFinite(video.duration) && video.duration > 0;
    syncMotion();
  });
  // Coalesce pointer movement while the previous frame is being decoded.
  video.addEventListener('seeked', () => { if (active() && desktop.matches) queueSeek(); });
  video.addEventListener('error', () => { failed = true; video.pause(); updateControls(); });
  hero.addEventListener('pointermove', event => {
    if (!desktop.matches || !active() || event.pointerType !== 'mouse') return;
    targetProgress = Math.max(0, Math.min(1, event.clientX / innerWidth));
    queueSeek();
  }, { passive: true });
  button.addEventListener('click', () => { pausedByUser = !pausedByUser; syncMotion(); });
  desktop.addEventListener('change', syncMotion);
  reducedMotion.addEventListener('change', syncMotion);
  document.addEventListener('visibilitychange', syncMotion);

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncMotion();
    }, { threshold: 0 }).observe(hero);
  }
  syncMotion();
})();
