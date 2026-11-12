# Cinco y Media · Home

Home corporativa centrada en problemas y trabajo manual. Solo se ha reconstruido la página principal, sin páginas interiores ni publicación en el dominio público.

## Abrir e iterar

La página se encuentra en `index.html`, con estilos en `styles.css`, interacciones en `site.js` y recursos locales en `assets/`. La prueba del hero tiene sus estilos e interacciones aislados en `hero-motion.css` y `hero-motion.js`. No necesita dependencias ni compilación.

```sh
python3 -m http.server 5173 --bind 127.0.0.1
```

Vista previa: http://127.0.0.1:5173/.

## Dirección y contenido

- El titular del hero usa Inter Black (900), crece hasta 90 px y ajusta los saltos de línea al espacio disponible junto al robot. Los tres textos principales de «El problema» comparten tamaño, peso 900 e interlineado. Los demás encabezados usan Inter Bold (700).
- Logo oficial, paleta clara/negro/gris/azul, sin flechas ni subrayados en enlaces.
- Recorrido: problema, ejemplo real, tipos de tareas, método, herramientas como apoyo, diseño web complementario, mensaje de marca, Valencia, FAQ y contacto.
- Sin catálogo técnico, tecnologías específicas, clientes inventados, testimonios, porcentajes ni métricas añadidas.
- El contacto abre WhatsApp en el número +34 614 811 073, con un mensaje inicial editable. Se han retirado el correo y la opción de copiar email. No existe un formulario que simule un envío.

La sección «El problema» sigue la referencia visual facilitada: fondo blanco, frase destacada en azul, ocho tarjetas de tareas con iconos SVG locales y un bloque sobre cuándo simplificar o automatizar. En escritorio se distribuye en tres columnas; en tablet y móvil se apila en orden de lectura. El botón «Así trabajamos» enlaza al método y comparte el estilo redondeado de los botones del hero.

## Vídeo real

Se integra el [vídeo facilitado por Cinco y Media](https://www.youtube.com/watch?v=zb0A4mm35fU), titulado «Presupuestos a medida en segundos, no en horas.» por su canal. Título, autor, miniatura y disponibilidad del embed se verificaron con YouTube.

La portada corregida facilitada por el usuario, `Portada_Cinco_y_Media_Agente_Presupuestos_CORREGIDA.png`, está copiada en `assets/presupuestos-portada-corregida.png` (1672 × 941). Se muestra completa, en su proporción original y con un ancho máximo de 960 px. El botón de reproducción queda debajo para no tapar su texto. El reproductor de YouTube con dominio `youtube-nocookie.com` se crea solo al pulsar reproducir. Antes de esa acción no hay solicitudes a servicios externos. Se mantiene un enlace directo a YouTube y, sin JavaScript, la miniatura funciona como enlace al vídeo.

El problema, la solución, el resultado y el titular «en segundos» proceden del briefing. No se han añadido datos sobre ahorro de horas, cliente, tecnologías o ROI. El aviso de cookies refleja la carga voluntaria de contenido de YouTube.

## Prueba del hero · Agentify

Adaptación de la referencia facilitada por el usuario: fondo gris azulado, composición con vídeo a la derecha, fundidos en los bordes y botones redondeados. Conserva el logo, el texto y el azul de marca; el titular usa Inter Black. La adaptación utiliza la estructura HTML/CSS/JavaScript existente; no añade un framework para esta sección ni incorpora las cifras comerciales de la referencia.

El vídeo decorativo procede de `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/robo_motion.mp4` y se sirve localmente como `assets/hero-motion.mp4` (931.226 bytes, 1280 × 720, 4 segundos). `assets/hero-motion-poster.webp` es un fotograma del mismo vídeo. No añade solicitudes a terceros.

En escritorio con ratón, la posición horizontal del cursor dentro del hero determina el fotograma. En pantallas pequeñas o táctiles se reproduce en bucle y sin sonido. Un botón permite pausar y reactivar el movimiento; la reproducción se detiene al salir de la sección o al ocultar la pestaña. Con movimiento reducido, ahorro de datos o JavaScript desactivado, queda una imagen estática y no se descarga el vídeo. El segundo botón lleva al ejemplo real ya existente.

En escritorio el robot ocupa una capa independiente a la derecha, con la escala del vídeo original del hero. El titular se ajusta en la columna izquierda: a 1616 px cabe en tres líneas a 90 px y peso 900; a anchos menores puede ocupar más líneas. En móvil reduce el tamaño y el robot permanece centrado sobre su control de pausa. El vídeo mantiene el control por cursor y las versiones estáticas con movimiento reducido, ahorro de datos o JavaScript desactivado.

## SEO y estructura

Title y descripción según el nuevo briefing, H1 único y humano, encabezados H2/H3 semánticos, canonical a `https://cincoymedia.com/`, Open Graph, Twitter, favicon oficial, robots, sitemap y datos estructurados Organization/WebSite ajustados al contenido visible.

Desde el ejemplo de presupuestos, el diseño utiliza blanco, gris frío y el azul oficial. El método se organiza en cuatro pasos, los servicios llevan iconos SVG y el manifiesto ocupa una superficie azul. Las preguntas conservan sus desplegables nativos y el contacto dirige a WhatsApp.

La navegación enlaza a secciones reales de la Home. El sitemap contiene únicamente la raíz. Las rutas previstas para una posible arquitectura posterior siguen reservadas como referencia, sin publicarlas ni presentarlas como catálogo:

- `/automatizacion-empresas-valencia/`
- `/inteligencia-artificial-empresas-valencia/`
- `/diseno-web-valencia/`

No se añaden schema de FAQ, reseñas, resultados, dirección postal, tecnologías ni datos locales sin verificar.

## Comprobaciones de la reconstrucción anterior de la Home

- H1 único, IDs únicos, enlaces de sección y recursos locales válidos; JSON-LD y sintaxis de JavaScript comprobados.
- Todos los H1/H2/H3 renderizan Inter a peso 700.
- Sin desbordamientos entre 320 y 1920 px; texto al 200% comprobado a 320, 768 y 1440 px.
- Auditoría automática axe-core con criterios WCAG A/AA a 375 y 1440 px: sin infracciones detectadas. No sustituye una revisión humana completa.
- Menú móvil, navegación, FAQ por teclado, diálogos legales comprobados (comprobaciones previas al cambio del contacto a WhatsApp).
- Reproductor real cargado y reproducción iniciada sin mensaje de error; enlace alternativo a YouTube disponible.
- Sin errores de página; sin solicitudes externas antes de reproducir el vídeo.
- Menú, contenido, FAQ, correo y enlace de vídeo accesibles sin JavaScript.
- Dimensiones reservadas para imágenes y vídeo, una fuente variable local, miniatura diferida y reproducción bajo demanda. La carga inicial local mostró CLS 0. Los Core Web Vitals de producción requieren mediciones tras publicar con tráfico real.

## Comprobaciones del ajuste visual del 12 de noviembre de 2026

- Revisado a 320, 375, 768 y 1440 px, sin desbordamientos horizontales.
- Menú móvil, navegación al contacto, apertura y cierre de FAQ por teclado y diálogos legales comprobados.
- Contraste de las nuevas combinaciones de texto y fondo: al menos 5,75:1.
- Botón de contacto enlazado a WhatsApp (+34 614 811 073); correo y código de copiado retirados.
- Sintaxis de JavaScript, estructura HTML, IDs, anclas, JSON-LD y recursos locales válidos.

## Pendientes de contenido

Privacidad y aviso legal siguen marcados como provisionales, a la espera de los textos definitivos y los datos del titular. No se han inventado.

Para una publicación posterior se necesitan `index.html`, `styles.css`, `site.js`, `hero-motion.css`, `hero-motion.js`, los recursos utilizados de `assets/`, `robots.txt` y `sitemap.xml`. La carpeta `hero/` conserva una exploración anterior y no forma parte de esta Home. Si cambia el dominio, actualizar de forma coherente canonical, metadatos, JSON-LD, robots y sitemap.
