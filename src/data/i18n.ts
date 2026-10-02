export type Lang = 'en' | 'es'
export type Localized = Record<Lang, string>

/** Pick the string for a language; plain strings are shared by every language. */
export const t = (value: Localized | string, lang: Lang): string =>
  typeof value === 'string' ? value : value[lang]
