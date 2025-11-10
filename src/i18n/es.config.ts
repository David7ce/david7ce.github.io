import type { ThemeUserConfig } from 'astro-pure/types'

export const esConfig: Partial<ThemeUserConfig> = {
  locale: {
    lang: 'es-ES',
    attrs: 'es_ES',
    dateLocale: 'es-ES',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  header: {
    menu: [
      { title: 'Blog', link: '/es/blog' },
      { title: 'Proyectos', link: '/es/projects' },
      { title: 'Stack', link: '/es/stack' },
      { title: 'Acerca de', link: '/es/about' }
    ]
  }
}
