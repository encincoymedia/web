'use strict';

// All primary content and disclosure controls work without JavaScript.
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  mobileNav.hidden = true;
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  mobileNav.hidden = expanded;
});
mobileNav.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  const href = link.getAttribute('href');
  if (href.startsWith('#')) {
    const destination = document.querySelector(href);
    destination.setAttribute('tabindex', '-1');
    destination.focus({ preventScroll: true });
    destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
const desktop = window.matchMedia('(min-width: 901px)');
desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });

// Real contact handoff: the mailto links open the visitor's email app.
// No form data is collected or presented as sent by this static page.
const copyButton = document.querySelector('.copy-email');
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    status.textContent = 'Email copiado. Puedes pegarlo en tu aplicación de correo.';
  } catch {
    status.textContent = 'Puedes seleccionar y copiar el email que aparece arriba.';
  }
});

// Legal copy remains readable in-page if native dialogs are unsupported.
const legalDialog = document.querySelector('#legal-dialog');
if (typeof legalDialog.showModal === 'function') {
  document.querySelectorAll('[data-legal]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const source = document.getElementById(link.dataset.legal);
      const copy = source.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelector('h2').id = 'legal-dialog-title';
      legalDialog.querySelector('.dialog-content').replaceChildren(copy);
      legalDialog.showModal();
    });
  });
  legalDialog.querySelector('.dialog-close').addEventListener('click', () => legalDialog.close());
  legalDialog.addEventListener('click', event => {
    if (event.target !== legalDialog) return;
    const bounds = legalDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) legalDialog.close();
  });
} else {
  document.querySelector('.legal-notices').style.display = 'grid';
}
document.querySelector('[data-year]').textContent = new Date().getFullYear();

// Keep the initial page local and lightweight. Load the real player on request;
// the original link remains a working fallback when JavaScript is unavailable.
const videoLaunch = document.querySelector('[data-video-launch]');
videoLaunch?.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const player = document.createElement('iframe');
  player.src = 'https://www.youtube-nocookie.com/embed/zb0A4mm35fU?autoplay=1&rel=0';
  player.title = 'Presupuestos a medida en segundos, no en horas. — Cinco y Media';
  player.width = '1280';
  player.height = '720';
  player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  player.allowFullscreen = true;
  player.referrerPolicy = 'strict-origin-when-cross-origin';
  document.querySelector('#presupuestos-video').replaceChildren(player);
  player.focus();
  document.querySelector('#video-notice').textContent = 'Vídeo de Cinco y Media. Si el reproductor no carga, puedes verlo en YouTube.';
});
