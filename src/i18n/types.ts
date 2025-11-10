// Type definitions for i18n
import { ui, defaultLang } from './ui'

export type UiType = typeof ui
export type Language = keyof UiType
export type TranslationKey = keyof (typeof ui)[typeof defaultLang]
