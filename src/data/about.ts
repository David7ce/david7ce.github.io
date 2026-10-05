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
      "I'm David Alonso (David7ce), a software and web developer. I build websites, web apps and command-line and desktop tools, and I design the interfaces in Figma before coding them.",
      'I write HTML, CSS, JavaScript, C#, Python and SQL by hand. Rust, Dart and TypeScript projects are built with AI assistants, and I review what they produce. I trained with a two-year degree in web application development and have kept learning since.',
      'I redesigned and extended the commercial atlas of the Cabildo de Tenerife, and I keep long-running open projects such as Interneto and CompuWiki. I write in Spanish and English, and this site, built with Astro, is available in both.'
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
      'Soy David Alonso (David7ce), desarrollador de software y web. Con formación en ciclo superior de desarrollo web y varios cursos formativos del estilo. (Además he cursado física varios años sin terminar y me gusta siempre un enfoque filosófico) Construyo aplicaciones muliplataforma para todo tipo de dispositivos desde web, móvil, escritorio a terminal, con una interfaz simple y agradable. Mi principal desarrollo son páginas web con interfaces.',
      'Me gusta crear aplicaciones web con el mínimo uso de dependencias y considero que son el futuro para alcanzar la multiplataforma y la responsividad en múltiples dispositivos, dentro de este me gusta crear webs estatáticas (HTML, CSS, JS), web con frameworks (Astro) y como full stack me gusta tirar de TypeScript y no tanto de frameworks, WordPress y Joomla los manejo. Y luego me gusta SQlite, SQL. Y para alcanzar un nivel de apps más nativo y optimizado me ha gustado el desarrollo de apps con IA con lenguajes como Rust y Dar.',
      'He rediseñado y ampliado el atlas comercial del Cabildo de Tenerife y mantengo proyectos abiertos de largo recorrido como Interneto, CompuWiki o un mapa estándar con calendario integrado. Hablo español nativo e inglés con un nivel de B2, pero entiendo casi todo en inglés porque lo consumo a diario.'
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
