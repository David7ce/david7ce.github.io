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
      intro: 'The longer-running projects I keep working on.'
    },
    publicProfileIntro: 'You can find me and my work here:',
    profile: [
      "I'm David Alonso (David7ce), a software developer with the web as my base. I build apps for the web, mobile, desktop and terminal, always with simple, pleasant interfaces, and I like taking care of the whole product: design, code, data and deployment. I trained with a higher-level degree in web application development and several courses.",
      'I prefer simple solutions with few dependencies: static sites, TypeScript over heavy stacks, and databases such as SQL or SQLite. My time studying physics gave me a mathematical background and analytical skills, and I have always approached problems with a philosophical mindset. I use AI as a tool, for example for Rust and Dart, and I take care of the design, the architecture and reviewing what it generates.',
      "I redesigned and extended the commercial atlas of the Cabildo de Tenerife, and I keep long-running open projects such as Interneto, CompuWiki and Universal Map-Time Engine. I'm looking for a job and I also work as a freelancer on projects where I can take part from start to finish. I speak native Spanish and B2-level English."
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
      intro: 'Los proyectos de más recorrido en los que sigo trabajando.'
    },
    publicProfileIntro: 'Puedes encontrarme a mí y mi trabajo aquí:',
    profile: [
      'Soy David Alonso (David7ce), desarrollador de software con la web como base. Construyo aplicaciones para web, móvil, escritorio y terminal, siempre con interfaces simples y agradables, y me gusta ocuparme del producto completo: diseño, código, datos y despliegue. Me formé con un ciclo superior de desarrollo de aplicaciones web y varios cursos.',
      'Prefiero soluciones sencillas y con pocas dependencias: webs estáticas, TypeScript antes que pilas pesadas y bases de datos como SQL o SQLite. Mi paso por la física me dejó base matemática y capacidad analítica, y siempre he abordado los problemas con un enfoque filosófico. Uso la IA como herramienta, por ejemplo para Rust y Dart, y me encargo yo del diseño, la arquitectura y la revisión de lo que genera.',
      'He rediseñado y ampliado el atlas comercial del Cabildo de Tenerife y mantengo proyectos abiertos de largo recorrido como Interneto, CompuWiki y Universal Map-Time Engine. Busco empleo y también trabajo como autónomo en proyectos en los que pueda participar de principio a fin. Hablo español nativo e inglés con nivel B2.'
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
        'Fuera del ámbito informático me interesan la electrónica, la física, la investigación técnica y la enseñanza.',
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
