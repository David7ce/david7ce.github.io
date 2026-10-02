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

- `src/pages/en/` and `src/pages/es/`: one page tree per language.
- `src/content/blog/`: posts as `<slug>-en.md` / `<slug>-es.md`, linked by `translationKey`.
- `src/site.config.ts`: site, header, footer and integrations (Waline comments are currently disabled).
- `.github/workflows/deploy.yml`: lint, build and deploy on push to `main`.

## License

This repository is proprietary. See [LICENSE](LICENSE) for the terms.
