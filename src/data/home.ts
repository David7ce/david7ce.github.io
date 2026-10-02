import type { Lang } from './i18n'

export interface HomeCopy {
  meta: { title: string; description: string }
  avatarAlt: string
  about: { title: string; role: string; paragraphs: string[]; button: string }
  exploring: { title: string; paragraphs: string[] }
  projects: { title: string; intro: string; button: string }
  blog: {
    title: string
    intro: string
    button: string
    empty: string
    emptyLink: string
  }
  technologies: { title: string; intro: string }
  routes: { about: string; projects: string; blog: string; otherLanguageBlog: string }
}

export const homeCopy: Record<Lang, HomeCopy> = {
  en: {
    meta: {
      title: 'Home',
      description: "David7ce's personal site: projects and notes on Linux, computing and AI"
    },
    avatarAlt: 'Profile picture of David7ce',
    about: {
      title: 'About',
      role: 'Software & Web Developer',
      paragraphs: [
        'I write HTML, CSS and JavaScript by hand, work in C#, Python and SQL, and design interfaces in Figma. Lately I build cross-platform tools with Rust and Dart, working with AI assistants.',
        'Most of my time goes into long-running open projects: Interneto, a web directory and blog, and CompuWiki, a computing documentation wiki. This site collects them, my smaller apps and the notes I write while learning.'
      ],
      button: 'More about me'
    },
    exploring: {
      title: 'Exploring',
      paragraphs: [
        'Cross-platform apps with Rust and Dart, Linux and free software, AI tooling and integrations (APIs, MCP), and systems and computer architecture. Outside of software: electronics, physics and teaching.',
        "These are directions I'm following, not a list of expertise. The projects below show what I have actually built."
      ]
    },
    projects: {
      title: 'Featured projects',
      intro: 'A selection of the most relevant ones; the full list is on the projects page.',
      button: 'All projects'
    },
    blog: {
      title: 'Blog',
      intro: 'Notes, guides and comparisons on Linux, computing and AI, written while learning.',
      button: 'More posts',
      empty: 'There are no posts in English yet.',
      emptyLink: 'See the posts in Spanish'
    },
    technologies: {
      title: 'Technologies',
      intro: 'Technologies I have used in my studies and projects, not a proficiency ranking.'
    },
    routes: {
      about: '/en/about-me',
      projects: '/en/projects',
      blog: '/en/blog',
      otherLanguageBlog: '/es/blog'
    }
  },
  es: {
    meta: {
      title: 'Inicio',
      description: 'Sitio personal de David7ce: proyectos y notas sobre Linux, informática e IA'
    },
    avatarAlt: 'Foto de perfil de David7ce',
    about: {
      title: 'Acerca de',
      role: 'Desarrollador de software y web',
      paragraphs: [
        'Escribo HTML, CSS y JavaScript a mano, trabajo con C#, Python y SQL, y diseño interfaces en Figma. Últimamente construyo herramientas multiplataforma con Rust y Dart, trabajando con asistentes de IA.',
        'La mayor parte de mi tiempo la dedico a proyectos abiertos de largo recorrido: Interneto, un directorio web con blog, y CompuWiki, una wiki de documentación de informática. Este sitio los reúne, junto con mis apps más pequeñas y las notas que escribo mientras aprendo.'
      ],
      button: 'Más sobre mí'
    },
    exploring: {
      title: 'Explorando',
      paragraphs: [
        'Aplicaciones multiplataforma con Rust y Dart, Linux y el software libre, herramientas de IA e integraciones (APIs, MCP), y sistemas y arquitectura de computadores. Fuera del software: electrónica, física y enseñanza.',
        'Son direcciones que sigo, no una lista de dominio. Los proyectos de abajo muestran lo que he construido de verdad.'
      ]
    },
    projects: {
      title: 'Proyectos destacados',
      intro:
        'Una selección de los más relevantes; la lista completa está en la página de proyectos.',
      button: 'Todos los proyectos'
    },
    blog: {
      title: 'Blog',
      intro:
        'Notas, guías y comparativas sobre Linux, informática e IA, escritas mientras aprendo.',
      button: 'Más publicaciones',
      empty: 'No hay publicaciones en español todavía.',
      emptyLink: 'Ver publicaciones en inglés'
    },
    technologies: {
      title: 'Tecnologías',
      intro: 'Tecnologías que he usado en mis estudios y proyectos, no un ranking de nivel.'
    },
    routes: {
      about: '/es/sobre-mi',
      projects: '/es/proyectos',
      blog: '/es/blog',
      otherLanguageBlog: '/en/blog'
    }
  }
}
