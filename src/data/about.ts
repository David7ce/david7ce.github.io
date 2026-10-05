import { contactEmail } from './contact'
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
  routes: { projects: string; blog: string; stack: string }
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
      "I'm David Alonso (David7ce), a software and web developer. I trained with a higher-level degree in web application development and several courses, and I also studied physics for a few years without finishing it, which left me with a philosophical way of approaching problems. I build apps for the web, mobile, desktop and terminal with simple, pleasant interfaces, although my main work is websites.",
      'I like building web apps with as few dependencies as possible: I think they are the best route to cross-platform and responsive software. I work with static sites (HTML, CSS and JavaScript), with frameworks such as Astro and, on the server side, I prefer TypeScript to heavy stacks. I also work with WordPress and Joomla, and I like SQL and SQLite. For more native, optimized apps I have worked with Rust and Dart, with the help of AI.',
      'I redesigned and extended the commercial atlas of the Cabildo de Tenerife, and I keep long-running open projects such as Interneto, CompuWiki and Universal Map-Time Engine, a map with an integrated calendar. I speak native Spanish and B2-level English, and I understand almost everything in English because I use it every day.'
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
      'Soy David Alonso (David7ce), desarrollador de software y web. Me formé con un ciclo superior de desarrollo de aplicaciones web y varios cursos, y estudié física durante varios años sin terminarla; de ahí me quedó un enfoque filosófico a la hora de plantear los problemas. Construyo aplicaciones para web, móvil, escritorio y terminal, con interfaces simples y agradables, aunque mi trabajo principal son las páginas web.',
      'Me gusta crear aplicaciones web con el mínimo de dependencias: creo que son el mejor camino hacia el software multiplataforma y adaptable a cualquier dispositivo. Trabajo con webs estáticas (HTML, CSS y JavaScript), con frameworks como Astro y, en el lado del servidor, prefiero TypeScript a pilas pesadas. También manejo WordPress y Joomla, y me gustan SQL y SQLite. Para apps más nativas y optimizadas he trabajado con Rust y Dart, con ayuda de IA.',
      'He rediseñado y ampliado el atlas comercial del Cabildo de Tenerife y mantengo proyectos abiertos de largo recorrido como Interneto, CompuWiki y Universal Map-Time Engine, un mapa con calendario integrado. Hablo español nativo e inglés con nivel B2, y entiendo casi todo en inglés porque lo consumo a diario.'
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
  { label: 'Compub1t - YouTube', href: 'https://www.youtube.com/@CompuB1t' },
  { label: contactEmail, href: `mailto:${contactEmail}` }
]
