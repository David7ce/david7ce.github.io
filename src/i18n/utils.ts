import { ui, defaultLang } from './ui'

export type Language = keyof typeof ui

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as Language
  return defaultLang
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname
  const parts = pathname?.split('/')
  const path = parts.pop() || parts.pop()

  if (path === undefined) {
    return undefined
  }

  return path
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLang ? path : `/${l}${path}`
  }
}
