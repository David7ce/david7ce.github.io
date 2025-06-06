---
title: "Markdown Syntax Guide"
publishDate: '2021-01-01'
updatedDate: '2025-06-03'
description: 'Test page for any purpose'
tags:
  - Test
language: 'English'
draft: true
---

This blog is writing using the web static generator framewrok HUGO. It converts the articles writted in markdown format to an HTML web page. The markdown format is simple, here is a test:

- To configure HUGO Papermod article display we have to add [variables on the front-matter](https://github.com/adityatelange/hugo-PaperMod/wiki/Variables) on top of the markdown note.

```yaml
---
author: "Hugo Authors"
title: "Markdown Syntax Guide"
date: "2021-01-01"
description: "Sample article showcasing basic Markdown syntax and formatting for HTML elements."
tags: ["markdown", "css", "html", "themes"]
categories: ["themes", "syntax"]
comments: false
lang: en
series: ["Themes Guide"]
aliases: ["migrate-from-jekyl"]
cover:
  image: images/msg.png
  caption: "Generated using [OG Image Playground by Vercel](https://og-playground.vercel.app/)"
ShowToc: true
TocOpen: true
---
```

## Text with format

### Heading

- Heading elements like [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

```md
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
#### H5 Heading
##### H6 Heading
```

### Inline formatting

```md
*Italicized text*, **bold text**, ***italicized and bold***.
_Italicized text_, __bold text__, ___italicized and bold___.  
~~Strike-through text~~
```

*Italicized text*, **bold text**, ***italicized and bold***.
*Italicized text*, **bold text**, ***italicized and bold***.
~~Strike-through text~~.

### Lists

- Ordered list:

```md
1. First ordered list item 
	1. First ordered list sub-item
		1. First ordered list sub-sub-item
	2. Second ordered list sub-item
```

1. First ordered list item
	1. First ordered list sub-item
		1. First ordered list sub-sub-item
	2. Second ordered list sub-item

```md
- Item 1
	+ Item 1.1
		* Item 1.1.1
		- Item 1.1.2
- Item 2
- Item 3
```

- Unordered list (*, -):
- Item 1
   	- Item 1.1
      		- Item 1.1.1
      		- Item 1.1.2
- Item 2
- Item 3

### Checkbox list

```md
- [x] Checked
    - [ ] Unchecked
```

- [x] Checked
    - [ ] Unchecked

### Code block

- `Inline code`

```md
`Inline code`
```

- Fenced code block

```md
With three tildes (~~~) or back quotes (```md),
it must be the "three tildes together" to render the block
`` `js
var s = "JavaScript syntax highlighting";
alert(s);
`` `
```

```mdjs
var s = "JavaScript syntax highlighting";
alert(s);
```

### Blockquote

```md
> Blockquote.
> Important message!
```md

> Blockquote.
> Important message!

### Comments

```md
<!-- This is a comment in Hugo Markdown -->
```
<!-- This is a comment in Hugo Markdown -->

### Math Formulas with Katex

- The obsidian.md format does not work

```md
$$P(A \vert B) = \frac{P(B \vert A)\cdot P(A)}{P(B)}$$
```

- You need to install Katex globally and use the [Katex syntax](https://katex.org/docs/supported.html)

```md
{\{< math.inline >}}
<p>
Inline math: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
</p>
{\{</ math.inline >}}
```

{{< math.inline >}}
Inline math: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
{{</ math.inline >}}

## Link resources

### Link internal resources

Add images from the root directory "static/" created by HUGO (img, jpg, gif)

- Add images using markdown format, you cannot resize the image

```md
![Test](/img/sample.jpg#center)
```

![Test](/img/sample.jpg#center)

- Add images using HUGO syntax

```md
{\{< figure src="/img/sample.jpg#center" alt="text" height="120px" width="200px" >}}
```

{{< figure src="/img/sample.jpg#center" alt="text" height="120px" width="200px" >}}

- Add images using HUGO syntax with RAW HTML

```md
{\{< rawhtml >}}
	<img src="/img/sample.jpg" alt="Sample" height="120px" width="200px">
{\{< /rawhtml >}}
```

{{< figure src="/img/sample.jpg#center" alt="Sample" height="120px" width="200px" >}}

- Add videos using HUGO syntax (mp4, webp, ogg) with RAW HTML

```md
{\{< rawhtml >}}
<video width=100% controls autoplay>
    <source src="/img/sample.mp4" type="video/mp4">
    Your browser does not support the video tag.  
</video>
{\{< /rawhtml >}}
```

{{< video src="/img/sample.mp4" width="100%" >}}

### Link external resources

- [Iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) doesn't work with HUGO ``<iframe src="https://www.youtube.com/embed/vQYiGRConFU"></iframe>``

- Instead you need to use ``{/{< youtube vQYiGRConFU >}/}``
{{< youtube vQYiGRConFU >}}

### Link urls

- Internal link using HUGO syntax: [About]({{< ref "/about" >}} "About")

```md
[About]({\{< ref "/about" >}} "About")
```

- Internal link using markdown syntax: [About](about.md)

```md
[About](about.md)
```

- External link: [example web](https://example.com) or <https://example.com> or <https://example.com>

```md
[example web](https://example.com) or https://example.com or <https://example.com>
```

## References

- [Add a Video to Your Hugo Website](https://dev.to/hi_artem/add-a-video-to-your-hugo-website-104)
- [How to add a video to a Hugo post](https://iamsorush.com/posts/add-video-to-hugo-post/)
- [GoHugo - Getting Started](https://gohugo.io/getting-started/)
