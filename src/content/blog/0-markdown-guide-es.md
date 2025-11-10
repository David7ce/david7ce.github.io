---
title: "Guía de Sintaxis Markdown"
slug: 0-markdown-guide-es
translationKey: 0-markdown-guide
publishDate: '2100-01-01'
updatedDate: '2500-06-03'
description: 'Página de prueba para cualquier propósito'
tags:
  - Test
heroImage: { src: './thumbnails/0-markdown-guide.jpg', color: '#4891B2' }
language: es
draft: true
---

Este blog está creado con el marco generador estático web **Astro.js**. Convierte artículos escritos en formato Markdown a páginas web HTML. El formato Markdown es sencillo. Aquí hay una vista de prueba en [formato sin procesar](https://raw.githubusercontent.com/David7ce/david7ce.github.io/refs/heads/main/src/content/blog/0-markdown-guide.md):

- Para configurar la visualización de los artículos de Astro, añadimos variables en la parte superior del archivo Markdown.

```yaml
---
title: «Guía de sintaxis Markdown»
publishDate: “2021-01-01”
updatedDate: “2025-06-03”
description: “Artículo de muestra que muestra la sintaxis básica de Markdown y el formato de los elementos HTML”.
tags:
  - markdown
  - css
  - html
  - astro
heroImage: { src: “./blog-thumbnails/markdown-guide.jpg”, color: “#4891B2” }
language: en
draft: false
---
```

## Texto con formato

### Encabezado

- Elementos de encabezado como [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

```md
# Encabezado H1
## Encabezado H2
### Encabezado H3
#### Encabezado H4
#### Encabezado H5
##### Encabezado H6
```

### Formato en línea

*Texto en cursiva*, **texto en negrita**, ***texto en cursiva y negrita***.
*Texto en cursiva*, **texto en negrita**, ***texto en cursiva y negrita***.
~~Texto tachado~~.

### Listas

#### Lista ordenada

1. Primer elemento de la lista ordenada
    1. Primer subelemento de la lista ordenada
        1. Primer sub-subelemento de la lista ordenada

#### Lista no ordenada (*, -)

- Elemento 1
       - Elemento 1.1
           - Elemento 1.1.1

### Lista de casillas de verificación

- [x] Marcada
- [ ] Sin marcar

### Bloque de código

- Código en línea: `console.log(«Hello World»);`
- Bloque de código delimitado

```js
var s = «JavaScript syntax highlighting»;
alert(s);
```

### Cita

> «Ser o no ser, esa es la cuestión»

### Comentarios

<!-- Esto es un comentario -->

### Fórmulas matemáticas con KaTeX

$$P(A \vert B) = \frac{P(B \vert A)\cdot P(A)}{P(B)}$$

La proporción áurea $\varphi = \frac{1+\sqrt{5}}{2} = 1.6180339887…$

## Medios y recursos

### Imágenes

Añade imágenes del directorio «public/» en Astro:

- Añade imágenes utilizando el formato Markdown:

![Prueba](/img/test/sample.jpg)

- Añade imágenes con estilos personalizados utilizando HTML:

<img src="/img/test/sample.jpg" alt="Ejemplo" width="200" height="120" />

### Vídeos

- Añade vídeos locales utilizando el elemento de vídeo HTML5:

<video width="100%" controls>
    <source src="/img/test/sample.mp4" type="video/mp4">
    <source src="/img/test/sample.webm" type="video/webm">
    Tu navegador no es compatible con la etiqueta de vídeo.
</video>

- Incrustar vídeos de YouTube utilizando iframe:

<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/vQYiGRConFU"
    title="Reproductor de vídeo de YouTube"
    frameborder=«0»
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>

### Enlaces

- Enlaces internos utilizando rutas relativas:
       - [Acerca de](/about)
       - [Otra entrada del blog](/blog/another-post)

- Enlaces externos:
       - [Documentación de Astro](https://docs.astro.build) o <https://docs.astro.build>

## Referencias

- [Documentación de Astro](https://docs.astro.build/)
- [Guía de Astro Markdown](https://docs.astro.build/en/guides/markdown-content/)
- [Colecciones de contenido de Astro](https://docs.astro.build/en/guides/content-collections/)
- [MDX en Astro](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [Guía de sintaxis de Markdown](https://www.markdownguide.org/basic-syntax/)
