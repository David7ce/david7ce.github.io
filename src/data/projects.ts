import type { Localized } from './i18n'

export interface ProjectLink {
  type: 'github' | 'site' | 'doc' | 'release'
  href: string
}

export interface Project {
  name: Localized | string
  description: Localized
  tech?: Localized | string
  status?: Localized
  links: ProjectLink[]
  /** Shown on the home page, ordered by ascending rank. */
  featured?: { rank: number; title?: Localized | string; summary: Localized }
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
  projects?: Project[]
  subsections?: ProjectSubsection[]
}

export const projectsTitle: Localized = { en: 'Projects', es: 'Proyectos' }

export const projectSections: ProjectSectionData[] = [
  {
    id: 'websites',
    title: { en: 'Professional Websites', es: 'Sitios Web Profesionales' },
    projects: [
      {
        name: '🛒 E-commerce front-end',
        description: {
          en: 'An e-commerce front-end website using only vanilla HTML, CSS and JavaScript, no frameworks.',
          es: 'Un sitio web de comercio electrónico front-end que utiliza solo HTML, CSS y JavaScript básicos, sin frameworks.'
        },
        links: [{ type: 'site', href: 'https://david7ce.github.io/guanxe-web-interface/' }]
      },
      {
        name: { en: '📍 Improve GeoImputation app', es: '📍 Mejora de la app GeoImputation' },
        description: {
          en: "Refactor and add functionality to a web app for tracking workers' time and location built with Angular, Firebase and Ionic UI.",
          es: 'Refactorizar y añadir funcionalidades a una aplicación web para el seguimiento del tiempo y la ubicación de los trabajadores, creada con Angular, Firebase e Ionic UI.'
        },
        links: [{ type: 'site', href: 'https://app.limpiezaspaula.com/home' }]
      },
      {
        name: { en: '🌐 Professional websites with WP', es: '🌐 Sitios web profesionales con WP' },
        description: {
          en: 'Professional websites built with WordPress and Elementor.',
          es: 'Sitios web profesionales construidos con WordPress y Elementor.'
        },
        links: [
          { type: 'site', href: 'https://alpayoga.com/' },
          { type: 'site', href: 'https://claralozanomestudiojuridico.com/' },
          { type: 'site', href: 'https://www.grmabogados.es/' },
          { type: 'site', href: 'https://salondebellezanais.com/' }
        ]
      },
      {
        name: {
          en: '🗺️ Tenerife Commerce Institutional Website: Entrepreneurship and Business Directory',
          es: '🗺️ Web Institucional de Tenerife Comercio: Emprendimiento y Mapa de comercios'
        },
        description: {
          en: 'A website by "Cabildo de Tenerife", featuring information on starting a business and a map of businesses in Tenerife.',
          es: 'Una web del "Cabildo de Tenerife", con información para Emprender con Empresas y con un mapa de los comercios de Tenerife.'
        },
        featured: {
          rank: 1,
          title: 'Tenerife Comercio',
          summary: {
            en: 'Institutional website of the Cabildo de Tenerife with guidance for starting a business and a map of local businesses.',
            es: 'Web institucional del Cabildo de Tenerife con información para emprender y un mapa de los comercios de la isla.'
          }
        },
        links: [{ type: 'site', href: 'https://www.tenerifecomercio.com/' }]
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
            name: { en: '🌐 Multi-language Translator', es: '🌐 Traductor Multilenguaje' },
            description: {
              en: "Translates text into several languages at once. It uses Chrome's built-in Translator API when the browser has it and falls back to the public Google Translate endpoint otherwise.",
              es: 'Traduce texto a varios idiomas a la vez. Usa la API Translator integrada de Chrome cuando el navegador la tiene y, si no, recurre al endpoint público de Google Translate.'
            },
            tech: 'React, TypeScript',
            status: {
              en: 'Demo deployed on GitHub Pages.',
              es: 'Demo desplegada en GitHub Pages.'
            },
            links: [
              { type: 'site', href: 'https://david7ce.github.io/translator-multilang/' },
              { type: 'github', href: 'https://github.com/David7ce/translator-multilang' }
            ]
          },
          {
            name: '📖 Read Rapide',
            description: {
              en: 'A speed-reading web app that shows text one word at a time (RSVP) at a fixed or gradually increasing speed, with optional focus-point highlighting and .txt loading. The interface is in Spanish and English.',
              es: 'Una web de lectura rápida que muestra el texto palabra por palabra (RSVP) a velocidad fija o con aceleración progresiva, con resaltado opcional del punto de enfoque y carga de archivos .txt. La interfaz está en español e inglés.'
            },
            tech: 'React, TypeScript, Vite',
            links: [
              { type: 'site', href: 'https://david7ce.is-a.dev/read-rapide/' },
              { type: 'github', href: 'https://github.com/David7ce/read-rapide' }
            ]
          },
          {
            name: { en: '🌙 Sleep Cycles Calculator', es: '🌙 Calculadora de Ciclos de Sueño' },
            description: {
              en: 'Suggests bedtimes or wake-up times aligned to 90-minute sleep cycles. A dependency-free installable PWA that works offline after the first load.',
              es: 'Sugiere horas de acostarse o de despertarse alineadas con ciclos de sueño de 90 minutos. Una PWA instalable sin dependencias que funciona sin conexión tras la primera carga.'
            },
            tech: 'HTML, CSS, JavaScript',
            links: [
              { type: 'site', href: 'https://david7ce.is-a.dev/sleep-cycles-calc/' },
              { type: 'github', href: 'https://github.com/David7ce/sleep-cycles-calc' }
            ]
          },
          {
            name: '🗺️ Universal Map-Time Engine',
            description: {
              en: 'A static, browser-only map with a calendar as an equal dimension. Each "world" is a folder of JSON and GeoJSON files, so adding a new map needs no engine changes.',
              es: 'Un mapa estático que funciona solo en el navegador y que trata el calendario como una dimensión más. Cada "mundo" es una carpeta de archivos JSON y GeoJSON, así que añadir un mapa nuevo no requiere cambiar el motor.'
            },
            tech: 'TypeScript, Leaflet, OpenStreetMap',
            featured: {
              rank: 4,
              summary: {
                en: 'A browser-only map with a calendar as an equal dimension; new maps are just JSON and GeoJSON files.',
                es: 'Un mapa que funciona solo en el navegador y trata el calendario como una dimensión más; los mapas nuevos son solo archivos JSON y GeoJSON.'
              }
            },
            links: [
              { type: 'site', href: 'https://david7ce.is-a.dev/universal-map-app/' },
              { type: 'github', href: 'https://github.com/David7ce/universal-map-app' }
            ]
          },
          {
            name: '🖥️ OS & Distro Directory',
            description: {
              en: 'A static, single-page directory of operating systems (Windows, macOS, Linux, BSD, mobile, embedded and retro). Search, filter and compare up to 10 systems side by side, with no build step and no backend.',
              es: 'Un directorio estático de una sola página de sistemas operativos (Windows, macOS, Linux, BSD, móviles, embebidos y retro). Permite buscar, filtrar y comparar hasta 10 sistemas lado a lado, sin paso de compilación ni backend.'
            },
            tech: 'HTML, JavaScript, Tailwind CSS, JSON',
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
            tech: 'JavaScript',
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
            links: [
              { type: 'site', href: 'https://mediahub-org.github.io/tv-multiview/' },
              { type: 'github', href: 'https://github.com/mediahub-org/tv-multiview' }
            ]
          }
        ]
      },
      {
        id: 'desktop-apps',
        title: { en: 'Desktop Apps', es: 'Aplicaciones de Escritorio' },
        projects: [
          {
            name: '🚀 App Launcher',
            description: {
              en: "A categorized home dashboard for launching the desktop apps installed on your machine. It builds its catalog by scanning each OS's own records (.desktop files, the Windows registry and Start Menu, .app bundles) and lets you hide, rename or recategorize tiles.",
              es: 'Un panel de inicio categorizado para lanzar las aplicaciones de escritorio instaladas en tu equipo. Construye su catálogo escaneando los registros propios de cada sistema (archivos .desktop, el registro de Windows y el menú Inicio, paquetes .app) y permite ocultar, renombrar o recategorizar los mosaicos.'
            },
            tech: {
              en: 'Tauri (Rust backend), plain HTML / CSS / JavaScript',
              es: 'Tauri (backend en Rust), HTML / CSS / JavaScript sin frameworks'
            },
            status: {
              en: 'Released on GitHub. Tested on Linux and Windows; the macOS build is untested on real hardware.',
              es: 'Publicado en GitHub. Probado en Linux y Windows; la versión de macOS no se ha probado en hardware real.'
            },
            featured: {
              rank: 2,
              summary: {
                en: 'A categorized launcher for the desktop apps installed on your machine, built with Tauri.',
                es: 'Un lanzador categorizado de las aplicaciones de escritorio instaladas en tu equipo, hecho con Tauri.'
              }
            },
            links: [
              { type: 'github', href: 'https://github.com/David7ce/app-launcher' },
              { type: 'release', href: 'https://github.com/David7ce/app-launcher/releases' }
            ]
          },
          {
            name: { en: '🧬 Cellular Automata', es: '🧬 Autómatas Celulares' },
            description: {
              en: "A native desktop sandbox for Life-like cellular automata. Conway's Game of Life is one of 21 built-in rules, and a single generic birth/survive rule engine lets you define your own. Live cells are stored sparsely on a bounded 4096×4096 plane.",
              es: 'Un sandbox de escritorio nativo para autómatas celulares tipo Life. El Juego de la Vida de Conway es una de las 21 reglas incluidas, y un único motor genérico de reglas nacimiento/supervivencia permite definir las tuyas. Las células vivas se guardan de forma dispersa en un plano acotado de 4096×4096.'
            },
            tech: 'Rust, egui / eframe',
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
              en: "Dotfiles for AI coding agents: one .ai/ folder as the source of truth, generated into each tool's own config format (Claude Code, Codex, opencode, Cursor, Windsurf, GitHub Copilot CLI and MCP).",
              es: 'Dotfiles para agentes de IA de programación: una carpeta .ai/ como fuente única de verdad, generada en el formato de configuración propio de cada herramienta (Claude Code, Codex, opencode, Cursor, Windsurf, GitHub Copilot CLI y MCP).'
            },
            tech: { en: 'JavaScript (Node CLI)', es: 'JavaScript (CLI de Node)' },
            links: [{ type: 'github', href: 'https://github.com/David7ce/ai-config' }]
          },
          {
            name: '🎼 Audio2Score MCP',
            description: {
              en: 'Turns a recorded audio file into an editable music score (audio → MIDI → MusicXML), either as plain CLI scripts or as an MCP server that AI agents can call. Each step writes a real file, so the automatic transcription can be checked or fixed before it becomes a score.',
              es: 'Convierte un archivo de audio grabado en una partitura editable (audio → MIDI → MusicXML), ya sea con scripts de línea de comandos o como servidor MCP que pueden llamar agentes de IA. Cada paso escribe un archivo real, así que la transcripción automática se puede revisar o corregir antes de convertirse en partitura.'
            },
            tech: 'Python, basic-pitch, music21, MCP',
            featured: {
              rank: 3,
              summary: {
                en: 'Audio to MIDI to MusicXML, as CLI scripts or as an MCP server that AI agents can call.',
                es: 'De audio a MIDI y a MusicXML, con scripts de línea de comandos o como servidor MCP que pueden llamar agentes de IA.'
              }
            },
            links: [{ type: 'github', href: 'https://github.com/David7ce/audio2score-mcp' }]
          },
          {
            name: '🔖 Bookmarks Report',
            description: {
              en: "Compares the bookmarks of a Chromium-based browser and Firefox and writes a single Markdown report. It reads Chromium's Bookmarks JSON and Firefox's places.sqlite directly.",
              es: 'Compara los marcadores de un navegador basado en Chromium y de Firefox y escribe un único informe en Markdown. Lee directamente el JSON Bookmarks de Chromium y el places.sqlite de Firefox.'
            },
            tech: { en: 'Python (standard library only)', es: 'Python (solo biblioteca estándar)' },
            links: [{ type: 'github', href: 'https://github.com/David7ce/bookmarks-report' }]
          },
          {
            name: '📻 Oracle Radio',
            description: {
              en: 'A minimal prototype that zaps between live internet radio streams, plays snippets and transcribes them. Station lists come from the open radio-browser.info API.',
              es: 'Un prototipo mínimo que salta entre emisoras de radio por internet en directo, reproduce fragmentos y los transcribe. Las listas de emisoras vienen de la API abierta de radio-browser.info.'
            },
            tech: 'Python, Whisper, FFmpeg',
            status: { en: 'v0.1 alpha prototype.', es: 'Prototipo v0.1 alpha.' },
            links: [{ type: 'github', href: 'https://github.com/David7ce/oracle-radio' }]
          },
          {
            name: '🐚 Shell Toolkit',
            description: {
              en: 'A small set of shell scripts for everyday tasks on Windows, macOS and Linux: one native script per shell (.sh and .ps1) plus an interactive menu, with no frameworks or extra installs.',
              es: 'Un conjunto pequeño de scripts de shell para tareas cotidianas en Windows, macOS y Linux: un script nativo por shell (.sh y .ps1) más un menú interactivo, sin frameworks ni instalaciones adicionales.'
            },
            tech: 'Bash, PowerShell',
            links: [{ type: 'github', href: 'https://github.com/David7ce/shell-toolkit' }]
          },
          {
            name: '🧰 Toolbox Installer (TUI)',
            description: {
              en: 'A terminal app that detects your operating system and package manager, lets you multi-select packages, and runs the installs. It uses the same package lists as the Interneto web toolbox.',
              es: 'Una aplicación de terminal que detecta tu sistema operativo y gestor de paquetes, permite seleccionar varios paquetes y ejecuta las instalaciones. Usa las mismas listas de paquetes que la toolbox web de Interneto.'
            },
            tech: 'Python',
            links: [{ type: 'github', href: 'https://github.com/interneto/tui-toolbox-installer' }]
          },
          {
            name: '🎠 Slidr',
            description: {
              en: 'A local-first AI carousel generator for Instagram, LinkedIn and TikTok. The AI writes structured JSON content and a deterministic renderer turns it into consistent HTML/CSS and PNG or JPG slides.',
              es: 'Un generador de carruseles con IA para Instagram, LinkedIn y TikTok que funciona en local. La IA escribe el contenido en JSON estructurado y un renderizador determinista lo convierte en diapositivas HTML/CSS y PNG o JPG consistentes.'
            },
            tech: 'TypeScript',
            links: [{ type: 'github', href: 'https://github.com/David7ce/Slidr' }]
          },
          {
            name: '🍲 RecipeSage Converter',
            description: {
              en: 'A command-line tool that converts RecipeSage JSON recipe exports into PDF cookbooks and Obsidian-compatible Markdown files.',
              es: 'Una herramienta de línea de comandos que convierte las exportaciones JSON de RecipeSage en libros de recetas en PDF y en archivos Markdown compatibles con Obsidian.'
            },
            tech: 'TypeScript',
            links: [{ type: 'github', href: 'https://github.com/David7ce/recipesage-converter' }]
          },
          {
            name: '🎨 Affinity on Linux',
            description: {
              en: 'A script that installs Affinity apps on Linux using WINE.',
              es: 'Un script que instala las aplicaciones de Affinity en Linux usando WINE.'
            },
            tech: 'Shell',
            links: [{ type: 'github', href: 'https://github.com/arksys-os/affinity-on-linux' }]
          }
        ]
      }
    ]
  },
  {
    id: 'involved',
    title: { en: 'Involved Projects', es: 'Proyectos Involucrados' },
    projects: [
      {
        name: '🎬 MediaHub Org',
        description: {
          en: 'A GitHub organization for media streaming apps, such as TV Multiview.',
          es: 'Una organización de GitHub para aplicaciones de streaming multimedia, como TV Multiview.'
        },
        links: [{ type: 'github', href: 'https://github.com/MediaHub-Org' }]
      },
      {
        name: '🏛️ Arksys OS',
        description: {
          en: 'Arksys is an Arch-based Linux with KDE as the desktop: an ArchISO profile, a Calamares installer configuration and post-install scripts.',
          es: 'Arksys es un Linux basado en Arch con KDE como escritorio: un perfil de ArchISO, una configuración del instalador Calamares y scripts de post-instalación.'
        },
        tech: 'Shell, ArchISO, Calamares',
        status: {
          en: 'Personal project; its README recommends established Arch-based distros for a stable setup.',
          es: 'Proyecto personal; su README recomienda distros basadas en Arch consolidadas para una instalación estable.'
        },
        links: [{ type: 'github', href: 'https://github.com/arksys-os' }]
      },
      {
        name: { en: '🔗 Interneto Project', es: '🔗 Proyecto Interneto' },
        description: {
          en: 'A web directory of internet links, plus a blog and a package-installer generator. An earlier PHP bookmark manager is archived.',
          es: 'Un directorio web de enlaces de internet, además de un blog y un generador de instaladores de paquetes. Un gestor de marcadores anterior, en PHP, está archivado.'
        },
        links: [
          { type: 'site', href: 'https://interneto.github.io/' },
          { type: 'github', href: 'https://github.com/interneto' }
        ]
      },
      {
        name: {
          en: '🧠 Obsidian PKM Vault',
          es: '🧠 Categorización de bóvedas de conocimiento para Obsidian'
        },
        description: {
          en: 'Categorization of knowledge vaults for Obsidian, for multiple topics. Includes an awesome-list of Obsidian vaults with over 500 GitHub stars.',
          es: 'Categorización de bóvedas de conocimiento para Obsidian, para múltiples temáticas. Incluye una awesome-list de bóvedas de Obsidian con más de 500 estrellas en GitHub.'
        },
        links: [{ type: 'github', href: 'https://github.com/obsidian-pkm-vault' }]
      },
      {
        name: { en: '📚 Wiki of Computing', es: '📚 Wiki de Computación' },
        description: {
          en: 'A documentation wiki made with Obsidian + Quartz.',
          es: 'Una wiki de documentación hecha con Obsidian + Quartz.'
        },
        links: [{ type: 'doc', href: 'https://compuwiki.github.io/' }]
      },
      {
        name: { en: '🌱 Wiki of Cosmology', es: '🌱 Wiki de Cosmología' },
        description: {
          en: 'A cosmological wiki using Obsidian.md with the Digital Garden plugin.',
          es: 'Una wiki de cosmología hecha con Obsidian.md y el plugin Digital Garden.'
        },
        links: [{ type: 'doc', href: 'https://wikiterra.github.io/' }]
      }
    ]
  }
]
