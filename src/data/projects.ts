import type { Localized } from './i18n'

export interface ProjectLink {
  type: 'github' | 'site' | 'doc' | 'release' | 'case-study'
  href: Localized | string
}

export interface Project {
  name: Localized | string
  description: Localized
  tech?: Localized | string
  status?: Localized
  links: ProjectLink[]
  /** File name in src/assets/projects/, shown faded behind the card. */
  image?: Localized | string
  /** Shown on the home page, ordered by ascending rank. */
  featured?: { rank: number; title?: Localized | string; kind: Localized; summary: Localized }
}

export interface ProjectSubsection {
  id: string
  title: Localized
  projects: Project[]
}

export interface ProjectSectionData {
  id: string
  title: Localized
  intro?: Localized
  /** Keep the projects in the order written here instead of sorting them alphabetically. */
  manualOrder?: boolean
  projects?: Project[]
  subsections?: ProjectSubsection[]
}

export const projectsTitle: Localized = { en: 'Projects', es: 'Proyectos' }

export const projectSections: ProjectSectionData[] = [
  {
    id: 'websites',
    manualOrder: true,
    title: { en: 'Professional Websites', es: 'Sitios Web Profesionales' },
    projects: [
      {
        name: {
          en: '🗺️ Tenerife Comercio: Institutional Website',
          es: '🗺️ Tenerife Comercio: Web Institucional'
        },
        description: {
          en: 'Website of the Cabildo de Tenerife with guidance for starting a business and a map of local businesses.',
          es: 'Web del Cabildo de Tenerife con información para emprender y un mapa de los comercios de la isla.'
        },
        featured: {
          rank: 3,
          title: 'Tenerife Comercio',
          kind: { en: 'Institutional website', es: 'Web institucional' },
          summary: {
            en: 'Institutional website of the Cabildo de Tenerife with guidance for starting a business and a map of local businesses.',
            es: 'Web institucional del Cabildo de Tenerife con información para emprender y un mapa de los comercios de la isla.'
          }
        },
        image: 'tenerife-comercio.jpg',
        links: [
          {
            type: 'case-study',
            href: { en: '/en/projects/tenerife-comercio', es: '/es/proyectos/tenerife-comercio' }
          }
        ]
      },
      {
        name: { en: '🌐 Professional Websites With WP', es: '🌐 Sitios Web Profesionales Con WP' },
        description: {
          en: 'Professional websites built with WordPress and Elementor, using custom templates.',
          es: 'Sitios web profesionales construidos con WordPress y Elementor, con plantillas personalizadas.'
        },
        tech: 'WordPress, Elementor',
        image: 'wordpress-elementor.jpg',
        links: []
      }
    ]
  },
  {
    id: 'involved',
    title: { en: 'Involved Projects', es: 'Proyectos Involucrados' },
    projects: [
      {
        name: '🏛️ Arksys OS',
        description: {
          en: 'An Arch-based Linux with KDE: an ArchISO profile, a Calamares installer setup and post-install scripts.',
          es: 'Un Linux basado en Arch con KDE: perfil ArchISO, instalador Calamares y scripts de post-instalación.'
        },
        tech: 'Shell, ArchISO, Calamares',
        status: {
          en: 'Personal project; the README recommends established Arch distros for stable use.',
          es: 'Proyecto personal; el README recomienda otras distros de Arch para uso estable.'
        },
        image: 'arksys-logo.jpg',
        links: [{ type: 'github', href: 'https://github.com/arksys-os' }]
      },
      {
        name: { en: '📚 CompuWiki', es: '📚 CompuWiki' },
        description: {
          en: 'A documentation wiki made with Obsidian and Quartz.',
          es: 'Una wiki de documentación hecha con Obsidian y Quartz.'
        },
        featured: {
          rank: 2,
          title: 'CompuWiki',
          kind: { en: 'Documentation wiki', es: 'Wiki de documentación' },
          summary: {
            en: 'A computing documentation wiki made with Obsidian and Quartz; it also hosts the OS & Distro Directory.',
            es: 'Una wiki de documentación de informática hecha con Obsidian y Quartz; también aloja el directorio de sistemas operativos.'
          }
        },
        image: 'compuwiki.jpg',
        links: [{ type: 'doc', href: 'https://compuwiki.github.io/' }]
      },
      {
        name: { en: '🔗 Interneto Project', es: '🔗 Proyecto Interneto' },
        description: {
          en: 'A web directory of internet links, with a blog and a package-installer generator.',
          es: 'Un directorio web de enlaces de internet, con un blog y un generador de instaladores de paquetes.'
        },
        featured: {
          rank: 1,
          title: 'Interneto Project',
          kind: { en: 'Web directory and blog', es: 'Directorio web y blog' },
          summary: {
            en: 'A web directory of internet links, plus a blog and a package-installer generator.',
            es: 'Un directorio web de enlaces de internet, además de un blog y un generador de instaladores de paquetes.'
          }
        },
        image: 'interneto.jpg',
        links: [
          { type: 'site', href: 'https://interneto.github.io/' },
          { type: 'github', href: 'https://github.com/interneto' }
        ]
      },
      {
        name: '🎬 MediaHub Org',
        description: {
          en: 'A GitHub organization for media apps, such as TV Multiview or others.',
          es: 'Una organización de GitHub para aplicaciones multimedia, como TV Multiview u otros.'
        },
        image: 'mediahub-org.jpg',
        links: [{ type: 'github', href: 'https://github.com/MediaHub-Org' }]
      },
      {
        name: {
          en: '🧠 Obsidian PKM Vault',
          es: '🧠 Obsidian PKM Vault'
        },
        description: {
          en: 'Categorized knowledge vaults for Obsidian, plus an awesome-list with over 500 GitHub stars.',
          es: 'Bóvedas de conocimiento categorizadas para Obsidian, con una awesome-list de más de 500 estrellas en GitHub.'
        },
        image: 'obsidian-pkm-vault.jpg',
        links: [{ type: 'github', href: 'https://github.com/obsidian-pkm-vault' }]
      },
      {
        name: { en: '🌱 WikiTerra', es: '🌱 WikiTerra' },
        description: {
          en: 'A cosmology wiki made with Obsidian and the Digital Garden plugin.',
          es: 'Una wiki de cosmología hecha con Obsidian y el plugin Digital Garden.'
        },
        image: 'wiki-cosmology.jpg',
        links: [{ type: 'doc', href: 'https://wikiterra.github.io/' }]
      }
    ]
  },
  {
    id: 'small-apps',
    title: { en: 'Small Apps', es: 'Apps Pequeñas' },
    intro: {
      en: 'Small projects I have built and published on GitHub.',
      es: 'Proyectos pequeños que he creado y publicado en GitHub.'
    },
    subsections: [
      {
        id: 'web-apps',
        title: { en: 'Web Apps', es: 'Aplicaciones Web' },
        projects: [
          {
            name: '🛒 E-commerce front-end',
            description: {
              en: 'An e-commerce front end in vanilla HTML, CSS and JavaScript, with no frameworks.',
              es: 'Un front-end de comercio electrónico en HTML, CSS y JavaScript puros, sin frameworks.'
            },
            tech: 'HTML, CSS, JavaScript',
            image: 'ecommerce.jpg',
            links: [
              { type: 'site', href: 'https://david7ce.github.io/guanxe-web-interface/' },
              { type: 'github', href: 'https://github.com/David7ce/guanxe-web-interface' }
            ]
          },
          {
            name: { en: '🌐 Multi-language Translator', es: '🌐 Traductor Multilenguaje' },
            description: {
              en: "Translates text into several languages at once with Chrome's Translator API or Google Translate.",
              es: 'Traduce texto a varios idiomas a la vez con la API Translator de Chrome o Google Translate.'
            },
            tech: 'React, TypeScript',
            status: { en: 'Demo on GitHub Pages.', es: 'Demo en GitHub Pages.' },
            image: 'translator.jpg',
            links: [
              { type: 'site', href: 'https://david7ce.github.io/translator-multilang/' },
              { type: 'github', href: 'https://github.com/David7ce/translator-multilang' }
            ]
          },
          {
            name: '📖 Read Rapide',
            description: {
              en: 'Speed reading with text one word at a time (RSVP), adjustable speed, in Spanish and English.',
              es: 'Lectura rápida con el texto palabra por palabra (RSVP), velocidad ajustable, en español e inglés.'
            },
            tech: 'React, TypeScript, Vite',
            image: { en: 'read-rapide-en.jpg', es: 'read-rapide-es.jpg' },
            links: [
              { type: 'site', href: 'https://david7ce.is-a.dev/read-rapide/' },
              { type: 'github', href: 'https://github.com/David7ce/read-rapide' }
            ]
          },
          {
            name: { en: '🌙 Sleep Cycles Calculator', es: '🌙 Calculadora de Ciclos de Sueño' },
            description: {
              en: 'Suggests bedtimes and wake-up times aligned to 90-minute sleep cycles; installable PWA, offline.',
              es: 'Sugiere horas de acostarse y despertarse según ciclos de sueño de 90 minutos; PWA instalable sin conexión.'
            },
            tech: 'HTML, CSS, JavaScript',
            image: 'sleep-cycles.jpg',
            links: [
              { type: 'site', href: 'https://david7ce.is-a.dev/sleep-cycles-calc/' },
              { type: 'github', href: 'https://github.com/David7ce/sleep-cycles-calc' }
            ]
          },
          {
            name: '🗺️ Universal Map-Time Engine',
            description: {
              en: 'A browser-only map with a calendar as an equal dimension; new maps are just JSON and GeoJSON files.',
              es: 'Un mapa solo en el navegador que trata el calendario como una dimensión más; los mapas son JSON y GeoJSON.'
            },
            tech: 'TypeScript, Leaflet, OpenStreetMap',
            featured: {
              rank: 4,
              kind: { en: 'Web app', es: 'App web' },
              summary: {
                en: 'A browser-only map with a calendar as an equal dimension; new maps are just JSON and GeoJSON files.',
                es: 'Un mapa solo en el navegador con el calendario como una dimensión más; los mapas nuevos son JSON y GeoJSON.'
              }
            },
            image: 'universal-map.jpg',
            links: [
              { type: 'site', href: 'https://david7ce.is-a.dev/universal-map-app/' },
              { type: 'github', href: 'https://github.com/David7ce/universal-map-app' }
            ]
          },
          {
            name: '🖥️ OS & Distro Directory',
            description: {
              en: 'A static directory of operating systems: search, filter and compare up to 10 side by side, no backend.',
              es: 'Un directorio estático de sistemas operativos: busca, filtra y compara hasta 10 a la vez, sin backend.'
            },
            tech: 'HTML, JavaScript, Tailwind CSS, JSON',
            image: 'os-database.jpg',
            links: [
              { type: 'site', href: 'https://compuwiki.github.io/os-database/' },
              { type: 'github', href: 'https://github.com/compuwiki/os-database' }
            ]
          },
          {
            name: { en: '📅 Calendar Converter', es: '📅 Conversor de Calendarios' },
            description: {
              en: 'A web converter between multiple calendars.',
              es: 'Un conversor web entre varios calendarios.'
            },
            tech: 'HTML, CSS, JavaScript',
            image: 'calendar-converter.jpg',
            links: [
              { type: 'site', href: 'https://david7ce.is-a.dev/calendar-converter/' },
              { type: 'github', href: 'https://github.com/David7ce/calendar-converter' }
            ]
          },
          {
            name: '💲 LLM Pricing',
            description: {
              en: 'Compare the cost and quality across LLMs.',
              es: 'Compara el coste y la calidad de distintos LLM.'
            },
            tech: 'Python',
            image: 'llm-pricing.jpg',
            status: {
              en: 'Fork of sanand0/llmpricing (MIT), with my changes.',
              es: 'Fork de sanand0/llmpricing (MIT), con mis cambios.'
            },
            links: [
              { type: 'site', href: 'https://interneto.github.io/llm-pricing/' },
              { type: 'github', href: 'https://github.com/interneto/llm-pricing' }
            ]
          },
          {
            name: '📺 TV Multiview',
            description: {
              en: 'View multiple TV channels in one screen.',
              es: 'Mira varios canales de televisión en una sola pantalla.'
            },
            tech: 'JavaScript',
            image: 'tv-multiview.jpg',
            status: {
              en: 'Fork of Alplox/teles (MIT), with added features.',
              es: 'Fork de Alplox/teles (MIT), con funciones añadidas.'
            },
            links: [
              { type: 'site', href: 'https://mediahub-org.github.io/tv-multiview/' },
              { type: 'github', href: 'https://github.com/mediahub-org/tv-multiview' }
            ]
          }
        ]
      },
      {
        id: 'desktop-apps',
        title: { en: 'Desktop & Mobile Apps', es: 'Aplicaciones de Escritorio y Móviles' },
        projects: [
          {
            name: '🚀 App Launcher',
            description: {
              en: "A categorized launcher for your desktop apps; it builds its catalog from each OS's own records.",
              es: 'Un lanzador categorizado de tus apps de escritorio; el catálogo sale de los registros del sistema.'
            },
            tech: {
              en: 'Tauri (Rust backend), plain HTML / CSS / JavaScript',
              es: 'Tauri (backend en Rust), HTML / CSS / JavaScript sin frameworks'
            },
            image: 'app-launcher.jpg',
            links: [
              { type: 'github', href: 'https://github.com/David7ce/app-launcher' },
              { type: 'release', href: 'https://github.com/David7ce/app-launcher/releases' }
            ]
          },
          {
            name: { en: '🧬 Cellular Automata', es: '🧬 Autómatas Celulares' },
            description: {
              en: 'A native sandbox for Life-like cellular automata, with 21 built-in rules and a generic birth/survive rule engine.',
              es: 'Sandbox nativo para autómatas tipo Life, con 21 reglas y un motor genérico de nacimiento/supervivencia.'
            },
            tech: 'Rust, egui / eframe',
            image: 'cellular-automata.jpg',
            links: [{ type: 'github', href: 'https://github.com/David7ce/cellular-automata-rust' }]
          }
        ]
      },
      {
        id: 'cli-tools',
        title: { en: 'CLI Tools & Scripts', es: 'Herramientas CLI y Scripts' },
        projects: [
          {
            name: '🤖 AI Config',
            description: {
              en: "Dotfiles for AI coding agents: a .ai/ folder generated in each tool's format (Claude Code, Codex, Cursor).",
              es: 'Dotfiles para agentes de IA: carpeta .ai/ generada en el formato de cada herramienta (Claude Code, Codex, Cursor).'
            },
            tech: { en: 'JavaScript (Node CLI)', es: 'JavaScript (CLI de Node)' },
            image: 'ai-config.jpg',
            links: [{ type: 'github', href: 'https://github.com/David7ce/ai-config' }]
          },
          {
            name: '🎼 Audio2Score MCP',
            description: {
              en: 'Turns audio into an editable score (audio → MIDI → MusicXML), as CLI scripts or an MCP server.',
              es: 'Convierte audio en una partitura editable (audio → MIDI → MusicXML), como scripts CLI o servidor MCP.'
            },
            tech: 'Python, basic-pitch, music21, MCP',
            image: 'audio2score-mcp.jpg',
            links: [{ type: 'github', href: 'https://github.com/David7ce/audio2score-mcp' }]
          },
          {
            name: '🔖 Bookmarks Report',
            description: {
              en: 'Compares the bookmarks of a Chromium browser and Firefox and writes one Markdown report.',
              es: 'Compara los marcadores de Chromium y Firefox y escribe un informe en Markdown.'
            },
            tech: { en: 'Python (standard library only)', es: 'Python (solo biblioteca estándar)' },
            image: 'bookmarks-report.jpg',
            links: [{ type: 'github', href: 'https://github.com/David7ce/bookmarks-report' }]
          },
          {
            name: '📻 Oracle Radio',
            description: {
              en: 'A prototype that zaps between live internet radio streams, plays snippets and transcribes them.',
              es: 'Un prototipo que salta entre emisoras de radio por internet en directo, reproduce fragmentos y los transcribe.'
            },
            tech: 'Python, Whisper, FFmpeg',
            status: { en: 'v0.1 alpha prototype.', es: 'Prototipo v0.1 alpha.' },
            image: 'oracle-radio.jpg',
            links: [{ type: 'github', href: 'https://github.com/David7ce/oracle-radio' }]
          },
          {
            name: '🐚 Shell Toolkit',
            description: {
              en: 'Small shell scripts for everyday tasks on Windows, macOS and Linux: one per shell plus a menu.',
              es: 'Scripts de shell para tareas cotidianas en Windows, macOS y Linux: uno por shell más un menú interactivo.'
            },
            tech: 'Bash, PowerShell',
            image: 'shell-toolkit.jpg',
            links: [{ type: 'github', href: 'https://github.com/David7ce/shell-toolkit' }]
          },
          {
            name: '🧰 Toolbox Installer (TUI)',
            description: {
              en: 'A terminal app that detects your OS and package manager, lets you multi-select packages and installs them.',
              es: 'Una aplicación de terminal que detecta tu sistema y gestor de paquetes, permite elegir varios paquetes y los instala.'
            },
            tech: 'Python',
            image: 'tui-toolbox.jpg',
            links: [{ type: 'github', href: 'https://github.com/interneto/tui-toolbox-installer' }]
          },
          {
            name: '🎠 Slidr',
            description: {
              en: 'A local-first AI carousel generator for Instagram, LinkedIn and TikTok; AI writes the JSON, code renders the slides.',
              es: 'Generador local de carruseles con IA para Instagram y LinkedIn: la IA escribe el JSON y el código las diapositivas.'
            },
            tech: 'TypeScript',
            image: 'slidr.jpg',
            status: {
              en: 'Fork of UitbreidenOS/Slidr, with my fixes and additions.',
              es: 'Fork de UitbreidenOS/Slidr, con mis correcciones y añadidos.'
            },
            links: [{ type: 'github', href: 'https://github.com/David7ce/Slidr' }]
          },
          {
            name: '🍲 RecipeSage Converter',
            description: {
              en: 'Converts RecipeSage JSON exports into PDF cookbooks and Obsidian-compatible Markdown.',
              es: 'Convierte las exportaciones JSON de RecipeSage en libros de recetas en PDF y en Markdown compatible con Obsidian.'
            },
            tech: 'TypeScript',
            image: 'recipesage-converter.jpg',
            links: [{ type: 'github', href: 'https://github.com/David7ce/recipesage-converter' }]
          },
          {
            name: '🎨 Affinity on Linux',
            description: {
              en: 'A script that installs Affinity apps on Linux using WINE.',
              es: 'Un script que instala las aplicaciones de Affinity en Linux usando WINE.'
            },
            tech: 'Shell',
            image: 'affinity-on-linux.jpg',
            links: [{ type: 'github', href: 'https://github.com/arksys-os/affinity-on-linux' }]
          }
        ]
      }
    ]
  }
]
