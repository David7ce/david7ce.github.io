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
| `case-studies.ts` | Case studies (the page template is `CaseStudyPage.astro`, linked from a project with a `case-study` link) |
| `contact.ts` | The public contact email |
| `i18n.ts` | `Localized` type and the `t()` helper |

Project thumbnails are files in `src/assets/projects/` (800×500 JPEG), referenced by the `image` field of a project: a single file name, or `{ en, es }` for a different image per language. The cards show them cropped to 2:1 from the top.

Stack tools and projects are sorted alphabetically at render time in each language, so new entries can be added anywhere. A project section can opt out with `manualOrder: true` in `projects.ts` (used for Professional Websites). Keep the names inside `skills.ts` groups alphabetical by hand.
Page-to-page language links (`hreflang`) for the pages above are in `src/i18n/alternates.ts`.

## Checks

`pnpm check` (types), `pnpm exec eslint 'src/**/*.{ts,astro}'` and `pnpm build` must pass. The pages were also audited with axe-core (light and dark mode, desktop and 390 px) with no violations, so keep new templates inside landmarks (`header`, `nav`, `main`, `footer`), give images an `alt` and keep text contrast at WCAG AA.

## License

This repository is proprietary. See [LICENSE](LICENSE) for the terms.
