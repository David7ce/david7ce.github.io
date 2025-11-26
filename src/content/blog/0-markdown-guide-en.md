---
title: "Markdown Syntax Guide"
slug: 0-markdown-guide-en
translationKey: 0-markdown-guide
publishDate: '2100-01-01'
updatedDate: '2500-06-03'
description: 'Test page for any purpose'
tags:
  - Test
heroImage: { src: './thumbnails/0-markdown-guide.jpg', color: '#4891B2' }
language: en
draft: true
---

This blog is built using the web static generator framework **Astro.js**. It converts articles written in markdown format to HTML web pages. The markdown format is simple, here is a test view in [raw here](https://raw.githubusercontent.com/David7ce/david7ce.github.io/refs/heads/main/src/content/blog/0-markdown-guide.md):

- To configure Astro article display we add variables in the front-matter at the top of the markdown file.

```yaml
title: "Markdown Syntax Guide"
publishDate: '2021-01-01'
updatedDate: '2025-06-03'
description: 'Sample article showcasing basic Markdown syntax and formatting for HTML elements.'
tags:
  - markdown
  - css
  - html
  - astro
heroImage: { src: './blog-thumbnails/markdown-guide.jpg', color: '#4891B2' }
language: en
draft: false
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

*Italicized text*, **bold text**, ***italicized and bold***.
*Italicized text*, **bold text**, ***italicized and bold***.
~~Strike-through text~~.

### Lists

#### Ordered list

1. First ordered list item
	1. First ordered list sub-item
		1. First ordered list sub-sub-item

#### Unordered list (*, -)

- Item 1
   	- Item 1.1
       	- Item 1.1.1

### Checkbox list

- [x] Checked
- [ ] Unchecked

### Code block

- Inline code: `console.log("Hello World");`
- Fenced code block

```js
var s = "JavaScript syntax highlighting";
alert(s);
```

### Blockquote

> “To be, or not to be, that is the question”

### Comments

<!-- This is a comment -->

### Math Formulas with KaTeX

$$P(A \vert B) = \frac{P(B \vert A)\cdot P(A)}{P(B)}$$

The golden ratio $\varphi = \frac{1+\sqrt{5}}{2} = 1.6180339887…$

## Media and Resources

### Images

Add images from the "public/" directory in Astro:

- Add images using markdown format:

![Test](/img/test/sample.jpg)

- Add images with custom styling using HTML:

<img src="/img/test/sample.jpg" alt="Sample" width="200" height="120" />

### Videos

- Add local videos using HTML5 video element:

<video width="100%" controls>
    <source src="/img/test/sample.mp4" type="video/mp4">
    <source src="/img/test/sample.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

- Embed YouTube videos using iframe:

<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/vQYiGRConFU"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>

### Links

- Internal links using relative paths:
   	- [About](/about)
   	- [Another Blog Post](/blog/another-post)

- External links:
   	- [Astro Documentation](https://docs.astro.build) or <https://docs.astro.build>

## References

- [Astro Documentation](https://docs.astro.build/)
- [Astro Markdown Guide](https://docs.astro.build/en/guides/markdown-content/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [MDX in Astro](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [Markdown Syntax Guide](https://www.markdownguide.org/basic-syntax/)
