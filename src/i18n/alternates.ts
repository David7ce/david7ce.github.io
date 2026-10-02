/** Top-level pages that exist in both languages, as [English slug, Spanish slug]. */
const pagePairs: [string, string][] = [
  ['', ''],
  ['blog', 'blog'],
  ['stack', 'stack'],
  ['projects', 'proyectos'],
  ['about-me', 'sobre-mi'],
  ['archives', 'archivos'],
  ['search', 'buscador']
]

export interface Alternate {
  lang: 'en' | 'es'
  path: string
}

/**
 * The same page in every language, for `hreflang` links. Returns an empty list for pages
 * without a known counterpart (posts and tag pages are translated separately).
 */
export function getAlternates(pathname: string): Alternate[] {
  const [, lang, slug = ''] = pathname.split('/')
  const rest = pathname.split('/').slice(3).join('/')
  if ((lang !== 'en' && lang !== 'es') || rest) return []

  const trailingSlash = pathname.endsWith('/') && pathname !== `/${lang}`
  const index = lang === 'en' ? 0 : 1
  const pair = pagePairs.find((entry) => entry[index] === slug.replace(/\/$/, ''))
  if (!pair) return []

  return (['en', 'es'] as const).map((l, i) => {
    const target = pair[i]
    const path = target ? `/${l}/${target}${trailingSlash ? '/' : ''}` : `/${l}/`
    return { lang: l, path }
  })
}

export const ogLocale = { en: 'en_US', es: 'es_ES' } as const
