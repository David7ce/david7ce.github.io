import type { Lang } from './i18n'

/** Sentence with inline links: text, link label, text, link label, ... */
type LinkedText = string[]

export interface AboutCopy {
  title: string
  headings: {
    profile: string
    maintained: string
    interests: string
    technologies: string
    publicProfile: string
  }
  maintained: { intro: string }
  publicProfileIntro: string
  profile: string[]
  interests: {
    intro: string
    items: string[]
    outside: string
    /** text, "projects" link label, text, "blog" link label, text */
    pointers: LinkedText
  }
  technologies: { intro: string; stackNote: LinkedText }
  routes: { slug: string; projects: string; blog: string; stack: string }
}

export const aboutCopy: Record<Lang, AboutCopy> = {
  en: {
    title: 'About',
    headings: {
      profile: 'Profile',
      maintained: 'Projects I Maintain',
      interests: 'Interests and Direction',
      technologies: 'Technologies',
      publicProfile: 'Public Profile'
    },
    maintained: {
      intro: 'Beyond small apps, these are the longer-running projects I keep working on.'
    },
    publicProfileIntro: 'You can find me and my work here:',
    profile: [
      'I am David Alonso (David7ce), a software and web developer by training. I completed a two-year degree in web application development and have taken additional courses. I speak Spanish and English, and this site is available in both.',
      'I write HTML, CSS and JavaScript by hand and work in C#, Python and Java, with SQL (PostgreSQL, T-SQL) for data and Figma for web and interface design. More recently I build cross-platform tools in Rust and Dart, and web projects in TypeScript, working with AI assistants. My favorite web framework is Astro, and this site is built with it.',
      'I build websites, small web apps, and command-line and desktop tools, and I write notes about what I learn along the way.'
    ],
    interests: {
      intro: 'My interests have grown beyond web development towards:',
      items: [
        'Systems and computer architecture',
        'Cross-platform apps with Rust and Dart',
        'Linux and free and open-source software',
        'AI, developer tooling, APIs and integrations (MCP)'
      ],
      outside:
        'Outside of software I am interested in electronics, physics, technical investigation and teaching.',
      pointers: [
        'These describe where my curiosity is heading. For what I have actually built, see the ',
        'projects',
        '; for what I write while learning, see the ',
        'blog',
        '.'
      ]
    },
    technologies: {
      intro:
        'Technologies I have used in my studies and projects. This is not a proficiency ranking.',
      stackNote: ['The ', 'Stack', ' page lists the tools I use in more detail.']
    },
    routes: {
      slug: '/about-me',
      projects: '/en/projects',
      blog: '/en/blog',
      stack: '/en/stack'
    }
  },
  es: {
    title: 'Acerca de',
    headings: {
      profile: 'Perfil',
      maintained: 'Proyectos que mantengo',
      interests: 'Intereses y dirección',
      technologies: 'Tecnologías',
      publicProfile: 'Perfil público'
    },
    maintained: {
      intro:
        'Más allá de las apps pequeñas, estos son los proyectos de más recorrido en los que sigo trabajando.'
    },
    publicProfileIntro: 'Puedes encontrarme a mí y mi trabajo aquí:',
    profile: [
      'Soy David Alonso (David7ce), desarrollador de software y web de formación. Completé un ciclo de dos años en desarrollo de aplicaciones web y he realizado cursos adicionales. Hablo español e inglés, y este sitio está disponible en ambos idiomas.',
      'Escribo HTML, CSS y JavaScript a mano y trabajo con C#, Python y Java, con SQL (PostgreSQL, T-SQL) para los datos y Figma para el diseño web y de interfaces. Últimamente construyo herramientas multiplataforma en Rust y Dart, y proyectos web en TypeScript, trabajando con asistentes de IA. Mi framework web favorito es Astro, y este sitio está hecho con él.',
      'Construyo sitios web, pequeñas aplicaciones web y herramientas de línea de comandos y de escritorio, y escribo notas sobre lo que voy aprendiendo.'
    ],
    interests: {
      intro: 'Mis intereses han crecido más allá del desarrollo web hacia:',
      items: [
        'Sistemas y arquitectura de computadores',
        'Aplicaciones multiplataforma con Rust y Dart',
        'Linux y el software libre y de código abierto',
        'IA, herramientas de desarrollo, APIs e integraciones (MCP)'
      ],
      outside:
        'Fuera del software me interesan la electrónica, la física, la investigación técnica y la enseñanza.',
      pointers: [
        'Esto describe hacia dónde va mi curiosidad. Lo que he construido realmente está en los ',
        'proyectos',
        '; lo que escribo mientras aprendo, en el ',
        'blog',
        '.'
      ]
    },
    technologies: {
      intro: 'Tecnologías que he usado en mis estudios y proyectos. No es un ranking de nivel.',
      stackNote: ['La página de ', 'Stack', ' lista con más detalle las herramientas que uso.']
    },
    routes: {
      slug: '/sobre-mi',
      projects: '/es/proyectos',
      blog: '/es/blog',
      stack: '/es/stack'
    }
  }
}

/** Public profiles; the same in every language. */
export const publicProfiles = [
  { label: 'D7 - AlternativeTo', href: 'https://alternativeto.net/user/d7' },
  { label: 'David7ce - GitHub', href: 'https://github.com/david7ce' },
  { label: 'David Alonso - LinkedIn', href: 'https://www.linkedin.com/in/david-alonsodd' },
  { label: 'Compub1t - YouTube', href: 'https://www.youtube.com/@CompuB1t' }
]
