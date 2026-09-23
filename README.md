# Cinco y Media · Home

Home corporativa centrada en problemas y trabajo manual. Solo se ha reconstruido la página principal, sin páginas interiores ni publicación en el dominio público.

## Abrir e iterar

La página se encuentra en `index.html`, con estilos en `styles.css`, interacciones en `site.js` y recursos locales en `assets/`. No necesita dependencias ni compilación.

```sh
python3 -m http.server 5173 --bind 127.0.0.1
```

Vista previa: http://127.0.0.1:5173/.

## Dirección y contenido

- Inter Bold (700) en todos los encabezados. Hero tipográfico sin imagen, con el titular organizado en tres líneas en escritorio.
- Logo oficial, paleta clara/negro/gris/azul, sin flechas ni subrayados en enlaces.
- Recorrido: problema, ejemplo real, tipos de tareas, método, herramientas como apoyo, diseño web complementario, mensaje de marca, Valencia, FAQ y contacto.
- Sin catálogo técnico, tecnologías específicas, clientes inventados, testimonios, porcentajes ni métricas añadidas.
- El contacto abre el correo del visitante con destino `encincoymedia@gmail.com`. También se puede copiar la dirección. No existe un formulario que simule un envío.

## Vídeo real

Se integra el [vídeo facilitado por Cinco y Media](https://www.youtube.com/watch?v=zb0A4mm35fU), titulado «Presupuestos a medida en segundos, no en horas.» por su canal. Título, autor, miniatura y disponibilidad del embed se verificaron con YouTube.

La miniatura original está guardada localmente en `assets/presupuestos-video.jpg`. El reproductor de YouTube con dominio `youtube-nocookie.com` se crea solo al pulsar reproducir. Antes de esa acción no hay solicitudes a servicios externos. Se mantiene un enlace directo a YouTube y, sin JavaScript, la miniatura funciona como enlace al vídeo.

El problema, la solución, el resultado y el titular «en segundos» proceden del briefing. No se han añadido datos sobre ahorro de horas, cliente, tecnologías o ROI. El aviso de cookies refleja la carga voluntaria de contenido de YouTube.

## SEO y estructura

Title y descripción según el nuevo briefing, H1 único y humano, encabezados H2/H3 semánticos, canonical a `https://cincoymedia.com/`, Open Graph, Twitter, favicon oficial, robots, sitemap y datos estructurados Organization/WebSite ajustados al contenido visible.

La navegación enlaza a secciones reales de la Home. El sitemap contiene únicamente la raíz. Las rutas previstas para una posible arquitectura posterior siguen reservadas como referencia, sin publicarlas ni presentarlas como catálogo:

- `/automatizacion-empresas-valencia/`
- `/inteligencia-artificial-empresas-valencia/`
- `/diseno-web-valencia/`

No se añaden schema de FAQ, reseñas, resultados, dirección postal, tecnologías ni datos locales sin verificar.

## Comprobaciones de esta revisión

- H1 único, IDs únicos, enlaces de sección y recursos locales válidos; JSON-LD y sintaxis de JavaScript comprobados.
- Todos los H1/H2/H3 renderizan Inter a peso 700.
- Sin desbordamientos entre 320 y 1920 px; texto al 200% comprobado a 320, 768 y 1440 px.
- Auditoría automática axe-core con criterios WCAG A/AA a 375 y 1440 px: sin infracciones detectadas. No sustituye una revisión humana completa.
- Menú móvil, navegación, FAQ por teclado, diálogos legales y copiado de email comprobados.
- Reproductor real cargado y reproducción iniciada sin mensaje de error; enlace alternativo a YouTube disponible.
- Sin errores de página; sin solicitudes externas antes de reproducir el vídeo.
- Menú, contenido, FAQ, correo y enlace de vídeo accesibles sin JavaScript.
- Dimensiones reservadas para imágenes y vídeo, una fuente variable local, miniatura diferida y reproducción bajo demanda. La carga inicial local mostró CLS 0. Los Core Web Vitals de producción requieren mediciones tras publicar con tráfico real.

## Pendientes de contenido

Privacidad y aviso legal siguen marcados como provisionales, a la espera de los textos definitivos y los datos del titular. No se han inventado.

Para una publicación posterior se necesitan `index.html`, `styles.css`, `site.js`, los recursos utilizados de `assets/`, `robots.txt` y `sitemap.xml`. La carpeta `hero/` conserva una exploración anterior y no forma parte de esta Home. Si cambia el dominio, actualizar de forma coherente canonical, metadatos, JSON-LD, robots y sitemap.
