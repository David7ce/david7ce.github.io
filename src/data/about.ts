import { contactEmail } from './contact'
import type { Lang } from './i18n'

/** Sentence with inline links: text, link label, text, link label, ... */
type LinkedText = string[]

export interface AboutCopy {
  title: string
  headings: {
    profile: string
    vision: string
    maintained: string
    interests: string
    technologies: string
    publicProfile: string
  }
  /** intro: text, "good software" link label, text */
  vision: { intro: LinkedText; paragraphs: string[] }
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
  routes: { projects: string; blog: string; stack: string; goodSoftware: string }
}

export const aboutCopy: Record<Lang, AboutCopy> = {
  en: {
    title: 'About',
    headings: {
      profile: 'Profile',
      vision: 'My Vision',
      maintained: 'Projects I Maintain',
      interests: 'Interests and Direction',
      technologies: 'Technologies',
      publicProfile: 'Public Profile'
    },
    vision: {
      intro: [
        'I want to build apps that are as universal as possible, open source and backed by a good team: this is what I define as good software in ',
        'this article',
        '. Public code is transparent and auditable, so people can choose not to depend on closed proprietary software that is hard to inspect.'
      ],
      paragraphs: [
        'I do not believe everything should be free: when the product is free, the user often becomes the product. Software should be maintained and compensated in some way, whether with money, donations, cryptocurrencies, grants or other forms of support, and I have nothing against one-time payments or subscriptions when they make sense.',
        'I believe that, with enough development and maturity of free software, a person could live without proprietary software and have an equally satisfying experience, with some trade-offs. For that trust to make sense, it must be possible to verify that the published code is what actually runs: good practices such as reproducible builds, signatures and community review help with that.'
      ]
    },
    maintained: {
      intro: 'The longer-running projects I keep working on.'
    },
    publicProfileIntro: 'You can find me and my work here:',
    profile: [
      "I'm David Alonso (David7ce), a software developer with the web as my base. I build apps for the web, mobile, desktop and terminal, always with simple, pleasant interfaces, and I like taking care of the whole product: design, code, data and deployment. I trained with a higher-level degree in web application development and several courses.",
      'I prefer apps with no external server and few dependencies: static sites and local apps when that is enough. If a full-stack app needs a database, I use TypeScript with PostgreSQL or SQLite for their integration, performance and open-source nature. For native, optimized apps I choose Rust or Dart, with Kotlin as the alternative, for their performance and cross-platform reach; Python is another language I like, from my physics courses. Physics gave me a mathematical background and analytical skills, and I have always approached problems with a philosophical mindset. I use AI as a tool, and I take care of the design, the architecture and the review.',
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
      stack: '/en/stack',
      goodSoftware: '/en/post/good-software'
    }
  },
  es: {
    title: 'Acerca de',
    headings: {
      profile: 'Perfil',
      vision: 'Mi visión',
      maintained: 'Proyectos que mantengo',
      interests: 'Intereses y dirección',
      technologies: 'Tecnologías',
      publicProfile: 'Perfil público'
    },
    vision: {
      intro: [
        'Quiero crear aplicaciones lo más universales posible, de código abierto y con un buen equipo detrás: es lo que defino como buen software en ',
        'este artículo',
        '. Un código público es transparente y auditable, y así las personas pueden elegir no depender de software propietario cerrado y difícil de inspeccionar.'
      ],
      paragraphs: [
        'No creo que todo deba ser gratis: cuando el producto es gratis, muchas veces el producto acaba siendo el usuario. El software debe estar mantenido y compensado de alguna forma, ya sea con dinero, donaciones, criptomonedas, ayudas u otras formas de apoyo, y no tengo nada en contra de los pagos únicos ni de las suscripciones cuando tienen sentido.',
        'Creo que, con suficiente desarrollo y madurez del software libre, una persona podría vivir sin software propietario y tener una experiencia igual de satisfactoria, con algunos compromisos. Para que esa confianza tenga sentido, debe poder comprobarse que el código publicado es el que realmente se ejecuta: buenas prácticas como las compilaciones reproducibles, las firmas y la revisión de la comunidad ayudan a ello.'
      ]
    },
    maintained: {
      intro: 'Los proyectos de más recorrido en los que sigo trabajando.'
    },
    publicProfileIntro: 'Puedes encontrarme a mí y mi trabajo aquí:',
    profile: [
      'Soy David Alonso (David7ce), desarrollador de software con la web como base. Construyo aplicaciones para web, móvil, escritorio y terminal, primando con interfaces simples y agradables, y me gusta ocuparme del producto completo: diseño, código, datos y despliegue. Me formé con un ciclo superior de desarrollo de aplicaciones web y varios cursos.',
      'Prefiero apps sin servidor externo y con pocas dependencias: webs estáticas y aplicaciones locales cuando basta. Si una aplicación full-stack necesita base de datos, uso TypeScript con PostgreSQL o SQLite por su integración, rendimiento y código abierto. Para apps nativas y optimizadas elijo Rust o Dart, con Kotlin como alternativa, por su rendimiento y alcance multiplataforma; Python es otro lenguaje que me gusta, de mis asignaturas de física. La física me dejó base matemática y capacidad analítica, y siempre he abordado los problemas con un enfoque filosófico. Uso la IA como herramienta y me encargo del diseño, la arquitectura y la revisión.',
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
      stack: '/es/stack',
      goodSoftware: '/es/post/buen-software'
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
