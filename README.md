# David7ce's Personal Website

Personal bilingual (English / Spanish) website of David Alonso: projects, tech stack and notes on Linux, computing and AI. Built with [Astro](https://astro.build/) and the [astro-pure](https://github.com/cworld1/astro-theme-pure) theme, deployed to GitHub Pages.

## Development

Requires Node.js 22+ and pnpm (the version is pinned in `package.json`).

```sh
pnpm install
pnpm dev        # local dev server
pnpm check      # type-check Astro and TypeScript
pnpm lint       # ESLint (with --fix)
pnpm build      # check + production build into dist/
```

## Structure

- `src/pages/en/` and `src/pages/es/`: one thin page per route and language. The home, About, Projects and Stack pages only render a shared component with `lang='en'` or `lang='es'`.
- `src/components/pages/`: the shared page templates (`HomePage`, `AboutPage`, `ProjectsPage`, `StackPage`).
- `src/data/`: all page content, written once with an English and a Spanish text.
- `src/content/blog/`: posts as `<slug>-en.md` / `<slug>-es.md`, linked by `translationKey`.
- `src/site.config.ts`: site, header, footer and integrations (Waline comments are currently disabled).
- `.github/workflows/deploy.yml`: lint, build and deploy on push to `main`.

## Editing content

Content lives in `src/data/`, so a change is made once and appears in both languages:

| File | What it controls |
| --- | --- |
| `stack.ts` | Tools on the Stack page (name, description in `en`/`es`, link, icon in `src/assets/software/`) |
| `projects.ts` | Projects page sections and subsections; set `featured: { rank, summary }` on a project to show it on the home page |
| `skills.ts` | Technology groups on the home and About pages |
| `home.ts`, `about.ts` | Home and About texts |
| `i18n.ts` | `Localized` type and the `t()` helper |

Items are sorted alphabetically at render time in each language, so new entries can be added anywhere.
Page-to-page language links (`hreflang`) for the pages above are in `src/i18n/alternates.ts`.

## License

This repository is proprietary. See [LICENSE](LICENSE) for the terms.
