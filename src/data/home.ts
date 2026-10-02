import type { Lang } from './i18n'

export interface HomeCopy {
  meta: { title: string; description: string }
  avatarAlt: string
  about: { title: string; role: string; paragraphs: string[]; button: string }
  exploring: { title: string; paragraphs: string[] }
  projects: { title: string; button: string }
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
      role: 'Web developer',
      paragraphs: [
        "I'm a web developer by training: I completed a two-year degree in web application development and have taken additional courses. My interests have since grown towards systems, AI, developer tooling, Rust, Linux and free and open-source software.",
        'I build small web apps, command-line and desktop tools and websites, and I write notes about what I learn. This site collects my projects and those notes.'
      ],
      button: 'More about me'
    },
    exploring: {
      title: 'Exploring',
      paragraphs: [
        'Systems and computer architecture, Rust, Linux, AI tooling and integrations (APIs, MCP) and developer tooling. Outside of software: electronics, physics and teaching.',
        "These are interests I'm following. The projects below show what I have built so far."
      ]
    },
    projects: { title: 'Projects', button: 'All projects' },
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
      role: 'Desarrollador web',
      paragraphs: [
        'Soy desarrollador web de formación: completé un ciclo de dos años en desarrollo de aplicaciones web y he realizado cursos adicionales. Mis intereses han crecido desde entonces hacia los sistemas, la IA, las herramientas de desarrollo, Rust, Linux y el software libre y de código abierto.',
        'Construyo pequeñas aplicaciones web, herramientas de línea de comandos y de escritorio, y sitios web, y escribo notas sobre lo que aprendo. Este sitio reúne mis proyectos y esas notas.'
      ],
      button: 'Más sobre mí'
    },
    exploring: {
      title: 'Explorando',
      paragraphs: [
        'Sistemas y arquitectura de computadores, Rust, Linux, herramientas de IA e integraciones (APIs, MCP) y herramientas de desarrollo. Fuera del software: electrónica, física y enseñanza.',
        'Son intereses que estoy siguiendo. Los proyectos de abajo muestran lo que he construido hasta ahora.'
      ]
    },
    projects: { title: 'Proyectos', button: 'Todos los proyectos' },
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

/** Projects featured on the home page, in display order. */
export const featuredProjects = [
  {
    name: { en: 'Audio2Score MCP', es: 'Audio2Score MCP' },
    description: {
      en: 'Audio to MIDI to MusicXML, as CLI scripts or as an MCP server that AI agents can call.',
      es: 'De audio a MIDI y a MusicXML, con scripts de línea de comandos o como servidor MCP que pueden llamar agentes de IA.'
    },
    href: 'https://github.com/David7ce/audio2score-mcp'
  },
  {
    name: { en: 'App Launcher', es: 'App Launcher' },
    description: {
      en: 'A categorized launcher for the desktop apps installed on your machine, built with Tauri.',
      es: 'Un lanzador categorizado de las aplicaciones de escritorio instaladas en tu equipo, hecho con Tauri.'
    },
    href: 'https://github.com/David7ce/app-launcher'
  },
  {
    name: { en: 'Cellular Automata (Rust)', es: 'Autómatas Celulares (Rust)' },
    description: {
      en: 'A desktop sandbox for Life-like cellular automata, with 21 built-in rules and a generic rule engine.',
      es: 'Un sandbox de escritorio para autómatas celulares tipo Life, con 21 reglas incluidas y un motor de reglas genérico.'
    },
    href: 'https://github.com/David7ce/cellular-automata-rust'
  },
  {
    name: { en: 'Universal Map-Time Engine', es: 'Universal Map-Time Engine' },
    description: {
      en: 'A browser-only map with a calendar as an equal dimension; new maps are just JSON and GeoJSON files.',
      es: 'Un mapa que funciona solo en el navegador y trata el calendario como una dimensión más; los mapas nuevos son solo archivos JSON y GeoJSON.'
    },
    href: 'https://david7ce.is-a.dev/universal-map-app/'
  }
]
