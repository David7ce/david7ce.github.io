# David7ce's Personal Website

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/github/license/David7ce/david7ce.github.io)](LICENSE)

A multilingual personal website built with [Astro](https://astro.build) using the [astro-theme-pure](https://github.com/cworld1/astro-theme-pure) template, featuring English and Spanish versions.

## ✨ Features

- 🌐 **Internationalization (i18n)**: Full support for English (`/en`) and Spanish (`/es`) with language switcher
- 📝 **Blog System**: Markdown-based blog with syntax highlighting and math support (KaTeX)
- 🎨 **Modern Design**: Clean, responsive UI with dark mode support
- 🔍 **Search Functionality**: Integrated Pagefind search
- 📊 **Project Showcase**: Display your work and contributions
- 💬 **Comments**: Waline comment system integration
- ⚡ **Performance**: Optimized static site generation
- 🎯 **SEO Friendly**: Sitemap, RSS feed, and meta tags

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/): 18.0.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/David7ce/david7ce.github.io.git
cd david7ce.github.io
```

2. **Install dependencies:**

```bash
npm install
# or
pnpm install
# or
bun install
```

3. **Install Waline client (for comments):**

```bash
npm install @waline/client
```

4. **Start development server:**

```bash
npm run dev
# or
pnpm dev
# or
bun dev
```

Visit `http://localhost:4321` (redirects to `/en` by default)

### Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview built site locally |
| `npx astro clean` | Clear Astro cache and build artifacts |
| `npm run astro -- --help` | Get help using Astro CLI |
| `npm run new` | Create new blog post (interactive) |

### Troubleshooting

#### Clear Cache

If you experience issues with updates not appearing:

```bash
# Stop the dev server (Ctrl+C)
npx astro clean
# Or manually remove cache
rm -rf .astro dist node_modules/.astro

# Restart dev server
npm run dev
```

#### Hard Refresh Browser

- **Windows/Linux**: `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac**: `Cmd + Shift + R`
- **Or**: Open DevTools (F12) → Network tab → Check "Disable cache"

## 🌍 Internationalization (i18n)

This site supports multiple languages with the following structure:

### URL Structure

- **English**: `/en/*` (e.g., `/en/blog`, `/en/projects`)
- **Spanish**: `/es/*` (e.g., `/es/blog`, `/es/projects`)
- **Root**: `/` → automatically redirects to `/en`

### Language Configuration

Configured in `astro.config.ts`:

```typescript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  routing: {
    prefixDefaultLocale: true
  }
}
```

### Translation Files

- `src/i18n/ui.ts` - UI translations for both languages
- `src/i18n/utils.ts` - Helper functions (getLangFromUrl, useTranslations)
- `src/i18n/es.config.ts` - Spanish site configuration

### Adding New Languages

1. Add locale to `astro.config.ts`
2. Create translations in `src/i18n/ui.ts`
3. Create page structure under `src/pages/{locale}/`
4. Update blog posts with `language` frontmatter field

### Content Language

Blog posts specify language in frontmatter:

```yaml
---
title: "My Post"
language: en  # or 'es' for Spanish
---
```

## 📁 Project Structure

```
├── src/
│   ├── assets/          # Images, styles, fonts
│   ├── components/      # Astro & framework components
│   │   ├── basic/       # Custom header with i18n
│   │   ├── home/        # Homepage sections
│   │   ├── PostPreviewI18n.astro  # i18n-aware post preview
│   │   └── LanguageSwitcher.astro # Language toggle
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts (Markdown)
│   ├── i18n/            # Internationalization
│   │   ├── ui.ts        # Translation strings
│   │   ├── utils.ts     # i18n utilities
│   │   └── es.config.ts # Spanish config
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro  # Uses HeaderWithI18n
│   ├── pages/           # Routes & pages
│   │   ├── index.astro  # Root redirect
│   │   ├── en/          # English pages
│   │   │   ├── index.astro
│   │   │   ├── blog/
│   │   │   ├── projects/
│   │   │   └── about/
│   │   └── es/          # Spanish pages
│   │       ├── index.astro
│   │       └── about/
│   ├── plugins/         # Rehype/Remark plugins
│   ├── content.config.ts # Content collections schema
│   └── site.config.ts   # Main site configuration
├── packages/pure/       # astro-theme-pure package
├── public/              # Static assets
├── astro.config.ts      # Astro configuration
└── tsconfig.json        # TypeScript config
```

## 🎨 Astro Theme Pure

This site uses [astro-theme-pure](https://github.com/cworld1/astro-theme-pure) as a base template with custom modifications for i18n support.

### Theme Features

- ✅ Built-in components (Header, Footer, PostPreview, etc.)
- ✅ Markdown/MDX support with enhanced features
- ✅ Syntax highlighting with Shiki
- ✅ Math equations with KaTeX
- ✅ Image optimization with Sharp
- ✅ UnoCSS for styling
- ✅ Pagefind integration for search
- ✅ Waline comment system

### Custom Modifications

To maintain i18n functionality while using the theme:

1. **Custom Header**: `src/components/basic/HeaderWithI18n.astro`
   - Replaces theme's default Header
   - Adds language detection and URL prefixing
   - Integrates LanguageSwitcher component

2. **Custom PostPreview**: `src/components/PostPreviewI18n.astro`
   - Language-aware blog post links
   - Automatically prefixes URLs with current language
   - Uses `slug` field if defined, otherwise falls back to `id`

3. **Modified ArticleBottom**: `packages/pure/components/pages/ArticleBottom.astro`
   - Updated to support i18n navigation (prev/next posts)
   - Constructs URLs with proper language prefix: `/{lang}/blog/{slug}`
   - Filters posts by current language

4. **Modified BaseLayout**: `src/layouts/BaseLayout.astro`
   - Uses HeaderWithI18n instead of theme's Header
   - Maintains compatibility with theme features

5. **Custom Comment Component**: `src/components/Comment.astro`
   - Wrapper for Waline comment system
   - Loads from local node_modules instead of CDN
   - Supports Astro page transitions

### Updating the Theme

The theme is installed as an NPM package (`astro-pure`). To update:

```bash
npm update astro-pure
```

⚠️ **Important**: Custom components (`HeaderWithI18n`, `PostPreviewI18n`, `LanguageSwitcher`) should not be overwritten during updates.

See `UPDATE_GUIDE.md` for detailed update procedures.

## 📝 Content Management

### Creating Blog Posts

#### English Post

```bash
# Create new post (defaults to English)
npm run new
```

Creates a file in `src/content/blog/` with frontmatter:

```yaml
---
title: "Post Title"
publishDate: 2024-01-01
description: "Post description"
language: en
slug: post-title-en  # Optional: custom URL slug
tags: ["tag1", "tag2"]
---
```

#### Spanish Post

1. Create markdown file in `src/content/blog/`
2. Set frontmatter with `language: es`
3. Optionally set custom `slug` (recommended to include `-es` suffix)
4. Write content in Spanish

Example:

```yaml
---
title: "Título del Post"
publishDate: 2024-01-01
description: "Descripción del post"
language: es
slug: titulo-del-post-es
tags: ["etiqueta1", "etiqueta2"]
---
```

### Slug vs ID

- **slug**: Custom URL-friendly identifier (optional)
- **id**: Filename without extension (automatic)
- If `slug` is not defined, `id` is used for URLs
- Recommended: Use `slug` with language suffix (`-en`, `-es`)

### Content Schema

Defined in `src/content.config.ts`:

```typescript
language: z.enum(['en', 'es'])  // Required: 'en' or 'es'
slug: z.string().optional()     // Optional: custom URL slug
```

## ⚙️ Configuration

### Site Configuration

Edit `src/site.config.ts`:

```typescript
export const theme: ThemeUserConfig = {
  title: "David7ce's Site",
  author: 'David7ce',
  description: 'Stay hungry, stay foolish',
  locale: {
    lang: 'en-US',
    dateLocale: 'en-US'
  },
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Projects', link: '/projects' },
      { title: 'Stack', link: '/stack' },
      { title: 'About', link: '/about' }
    ]
  }
  // ... more config
}
```

### Astro Configuration

Edit `astro.config.ts` for:

- i18n settings
- Integrations
- Build options
- Markdown plugins

## 🚢 Deployment

### GitHub Pages

1. **Build the site:**

```bash
npm run build
```

2. **Deploy:**

The site automatically deploys to GitHub Pages via GitHub Actions.

Configuration in `astro.config.ts`:

```typescript
export default defineConfig({
  site: 'https://david7ce.github.io',
  output: 'static',
  trailingSlash: 'never'
})
```

### Other Platforms

The static build in `./dist/` can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

## 📚 Documentation

Additional documentation files:

- `I18N_GUIDE.md` - Comprehensive i18n implementation guide
- `I18N_STRUCTURE.md` - i18n architecture details
- `I18N_NAVIGATION_UPDATE.md` - Navigation system documentation
- `UPDATE_GUIDE.md` - How to update the theme safely
- `SUCCESS.md` - Testing and verification checklist

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v5.15.4
- **Theme**: [astro-theme-pure](https://github.com/cworld1/astro-theme-pure) v1.3.4
- **Language**: TypeScript
- **Styling**: UnoCSS
- **Content**: Markdown/MDX
- **Syntax Highlighting**: Shiki
- **Math**: KaTeX
- **Search**: Pagefind
- **Comments**: [Waline](https://waline.js.org/) v3.8.0
- **Deployment**: GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [astro-theme-pure](https://github.com/cworld1/astro-theme-pure) by CWorld
- [Astro](https://astro.build) framework team
- All open-source contributors

## 📧 Contact

- GitHub: [@David7ce](https://github.com/david7ce)
- LinkedIn: [david-alonsodd](https://www.linkedin.com/in/david-alonsodd)

---

Built with ❤️ using Astro
