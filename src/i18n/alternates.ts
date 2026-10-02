/** Top-level pages that exist in both languages, as [English slug, Spanish slug]. */
const pagePairs: [string, string][] = [
  ['', ''],
  ['blog', 'blog'],
  ['stack', 'stack'],
  ['projects', 'proyectos'],
  ['projects/tenerife-comercio', 'proyectos/tenerife-comercio'],
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
  const [, lang, ...parts] = pathname.split('/')
  if (lang !== 'en' && lang !== 'es') return []

  const slug = parts.filter(Boolean).join('/')
  const trailingSlash = pathname.endsWith('/') && pathname !== `/${lang}`
  const index = lang === 'en' ? 0 : 1
  const pair = pagePairs.find((entry) => entry[index] === slug)
  if (!pair) return []

  return (['en', 'es'] as const).map((l, i) => {
    const target = pair[i]
    const path = target ? `/${l}/${target}${trailingSlash ? '/' : ''}` : `/${l}/`
    return { lang: l, path }
  })
}

export const ogLocale = { en: 'en_US', es: 'es_ES' } as const

interface PostLike {
  id: string
  data: { slug?: string; translationKey?: string; language?: string }
}

const postSlug = (post: PostLike) =>
  post.data.slug ??
  post.id
    .split('/')
    .pop()
    ?.replace(/\.mdx?$/, '')

/**
 * `hreflang` alternates for a blog post: the posts that share its `translationKey`.
 * Returns an empty list when the post has no translation.
 */
export function getPostAlternates(pathname: string, posts: PostLike[]): Alternate[] {
  const trailingSlash = pathname.endsWith('/')
  const slug = decodeURIComponent(
    pathname.replace(/\/$/, '').split('/post/')[1]?.split('/').pop() ?? ''
  )
  const current = posts.find((post) => postSlug(post) === slug)
  const key = current?.data.translationKey
  if (!key) return []

  const related = posts.filter((post) => post.data.translationKey === key)
  const alternates = related.flatMap((post): Alternate[] => {
    const lang = post.data.language
    const target = postSlug(post)
    if ((lang !== 'en' && lang !== 'es') || !target) return []
    return [{ lang, path: `/${lang}/post/${encodeURI(target)}${trailingSlash ? '/' : ''}` }]
  })
  return alternates.length > 1 ? alternates : []
}
