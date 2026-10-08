import type { Lang } from './i18n'

export interface HomeCopy {
  meta: { title: string; description: string }
  avatarAlt: string
  emailLabel: string
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
    emailLabel: 'Email',
    about: {
      title: 'About',
      role: 'Software Developer',
      paragraphs: [
        "I'm a developer who likes to see the whole product: from design to code, data and deployment. I'm driven by curiosity and I believe in open, auditable and well-maintained software. This site collects what I have built and what I am learning."
      ],
      button: 'More about me'
    },
    exploring: {
      title: 'Exploring',
      paragraphs: [
        'Cross-platform apps, free and verifiable software, AI tools and integrations (MCP), and how systems work under the hood.'
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
    emailLabel: 'Correo',
    about: {
      title: 'Acerca de',
      role: 'Desarrollador de software',
      paragraphs: [
        'Soy un desarrollador al que le gusta ver el producto completo: del diseño al código, los datos y el despliegue. Me mueve la curiosidad y creo en el software abierto, auditable y bien mantenido. Esta web reúne lo que he construido y lo que voy aprendiendo.'
      ],
      button: 'Más sobre mí'
    },
    exploring: {
      title: 'Explorando',
      paragraphs: [
        'Apps multiplataforma, software libre y verificable, herramientas de IA e integraciones (MCP), y cómo funcionan los sistemas por dentro.'
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
