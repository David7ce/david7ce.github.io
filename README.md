# README

Website created using the framework Astro JS with the template [astro-theme-pure](https://github.com/cworld1/astro-theme-pure).

## Local development

Environment requirements:

- [Nodejs](https://nodejs.org/): 18.0.0+

Clone the repository:

```shell
git clone https://github.com/cworld1/astro-theme-pure.git
cd astro-theme-pure
```

Useful commands:

```shell
# install dependencies
bun install

# start the dev server
bun dev

# build the project
bun run build

# preview (after the build)
bun preview

# create a new post
bun new-post
```

## Tree of files

```md
├── package.json
├── packages
│   └── pure
│       ├── LICENSE
│       ├── README.md
│       ├── bun.lock
│       ├── components
│       │   ├── advanced
│       │   │   ├── Comment.astro
│       │   │   ├── GithubCard.astro
│       │   │   ├── LinkPreview.astro
│       │   │   ├── MediumZoom.astro
│       │   │   ├── QRCode.astro
│       │   │   ├── Quote.astro
│       │   │   └── index.ts
│       │   ├── basic
│       │   │   ├── Footer.astro
│       │   │   ├── Header.astro
│       │   │   ├── ThemeProvider.astro
│       │   │   └── index.ts
│       │   ├── pages
│       │   │   ├── ArticleBottom.astro
│       │   │   ├── BackToTop.astro
│       │   │   ├── Copyright.astro
│       │   │   ├── Hero.astro
│       │   │   ├── PFSearch.astro
│       │   │   ├── PageInfo.astro
│       │   │   ├── Paginator.astro
│       │   │   ├── PostPreview.astro
│       │   │   ├── TOC.astro
│       │   │   ├── TOCHeading.astro
│       │   │   └── index.ts
│       │   └── user
│       │       ├── Aside.astro
│       │       ├── Button.astro
│       │       ├── Card.astro
│       │       ├── CardList.astro
│       │       ├── CardListChildren.astro
│       │       ├── Collapse.astro
│       │       ├── FormattedDate.astro
│       │       ├── Icon.astro
│       │       ├── Label.astro
│       │       ├── MdxRepl.astro
│       │       ├── Spoiler.astro
│       │       ├── Steps.astro
│       │       ├── Svg.astro
│       │       ├── TabItem.astro
│       │       ├── Tabs.astro
│       │       ├── Timeline.astro
│       │       └── index.ts
│       ├── index.ts
│       ├── libs
│       │   ├── icons.ts
│       │   └── index.ts
│       ├── package.json
│       ├── plugins
│       │   ├── link-preview.ts
│       │   ├── override-svg-attributes.ts
│       │   ├── rehype-steps.ts
│       │   ├── rehype-tabs.ts
│       │   ├── remark-plugins.ts
│       │   ├── toc.ts
│       │   └── virtual-user-config.ts
│       ├── schemas
│       │   ├── favicon.ts
│       │   ├── head.ts
│       │   ├── header.ts
│       │   ├── links.ts
│       │   ├── locale.ts
│       │   ├── logo.ts
│       │   ├── share.ts
│       │   └── social.ts
│       ├── scripts
│       │   ├── check.mjs
│       │   ├── index.js
│       │   ├── libs
│       │   │   ├── minimist.cjs
│       │   │   └── slugify.cjs
│       │   └── new.mjs
│       ├── types
│       │   ├── constants.ts
│       │   ├── index.ts
│       │   ├── integrations-config.ts
│       │   ├── module.d.ts
│       │   ├── theme-config.ts
│       │   └── user-config.ts
│       ├── utils
│       │   ├── class-merge.ts
│       │   ├── clsx.ts
│       │   ├── date.ts
│       │   ├── error-map.ts
│       │   ├── index.ts
│       │   ├── mdast-util-to-string.ts
│       │   ├── reading-time.ts
│       │   ├── server.ts
│       │   ├── theme.ts
│       │   └── toast.ts
│       └── virtual.d.ts
├── preset
│   ├── README.md
│   └── icons
│       ├── androidstudio.svg
│       ├── animate.svg
│       ├── arc.svg
│       ├── qt.svg
│       ├── safari.svg
│       ├── tailscale.svg
│       ├── unity.svg
│       ├── warp.svg
│       └── zerotier.svg
├── prettier.config.mjs
├── public
│   ├── blog-thumbnails
│   ├── favicon
│   ├── fonts
│   ├── icons
│   ├── images
│   ├── links.json
│   ├── scripts
│   └── styles
│       └── global.css
├── src
│   ├── assets
│   │   ├── styles
│   │   │   └── app.css
│   ├── components
│   │   ├── BaseHead.astro
│   │   ├── about
│   │   │   ├── Substats.astro
│   │   │   └── ToolSection.astro
│   │   ├── home
│   │   │   ├── ProjectCard.astro
│   │   │   ├── Section.astro
│   │   │   └── SkillLayout.astro
│   │   ├── links
│   │   │   └── FriendList.astro
│   │   └── projects
│   │       ├── ProjectSection.astro
│   │       └── Sponsors.astro
│   ├── content
│   │   └── blog
│   │       └── ways-to-run-multiple-os.md
│   ├── content.config.ts
│   ├── layouts
│   │   ├── BaseLayout.astro
│   │   ├── BlogPost.astro
│   │   ├── CommonPage.astro
│   │   ├── ContentLayout.astro
│   │   └── IndividualPage.astro
│   ├── pages
│   │   ├── 404.astro
│   │   ├── about
│   │   │   └── index.astro
│   │   ├── archives
│   │   │   └── index.astro
│   │   ├── blog
│   │   │   ├── [...id].astro
│   │   │   └── [...page].astro
│   │   ├── docs
│   │   │   ├── DocsContents.astro
│   │   │   ├── [...id].astro
│   │   │   ├── index.astro
│   │   │   └── rss.xml.ts
│   │   ├── index.astro
│   │   ├── links
│   │   │   └── index.astro
│   │   ├── projects
│   │   │   └── index.astro
│   │   ├── robots.txt.ts
│   │   ├── rss.xml.ts
│   │   ├── search
│   │   │   └── index.astro
│   │   ├── tags
│   │   │   ├── [tag]
│   │   │   │   └── [...page].astro
│   │   │   └── index.astro
│   │   └── terms
│   │       ├── copyright.md
│   │       ├── disclaimer.md
│   │       ├── list.astro
│   │       ├── privacy-policy.md
│   │       └── terms-and-conditions.md
│   ├── plugins
│   │   ├── rehype-auto-link-headings.ts
│   │   ├── shiki-official-transformers.ts
│   │   └── shiki-transformers.ts
│   ├── site.config.ts
│   └── type.d.ts
├── tsconfig.json
```
