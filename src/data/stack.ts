import type { Localized } from './i18n'

export interface StackTool {
  name: string
  description: Localized
  href: Localized | string
  icon: Promise<unknown>
  darkIcon?: Promise<unknown>
}

export interface StackSection {
  id: string
  title: Localized
  tools: StackTool[]
}

export const stackTitle: Localized = { en: 'Tech Stack', es: 'Stack tecnológico' }

export const stackIntro: Localized = {
  en: 'The operating systems, tools, languages and platforms I use, or have used, for development, design and productivity. It is a list of tools, not a measure of expertise.',
  es: 'Los sistemas operativos, herramientas, lenguajes y plataformas que uso, o he usado, para desarrollo, diseño y productividad. Es una lista de herramientas, no una medida de nivel.'
}

export const stackSections: StackSection[] = [
  {
    id: 'operating-systems',
    title: { en: 'Operating Systems & Environments', es: 'Sistemas operativos y entornos' },
    tools: [
      {
        name: 'Arch Linux',
        description: { en: 'Linux Distribution', es: 'Distribución Linux' },
        href: 'https://archlinux.org/',
        icon: import('@/assets/software/archlinux.svg?raw')
      },
      {
        name: 'KDE Plasma',
        description: { en: 'Desktop Environment', es: 'Entorno de escritorio' },
        href: 'https://kde.org/plasma-desktop/',
        icon: import('@/assets/software/kde.svg?raw')
      },
      {
        name: 'Windows 11',
        description: { en: 'Windows OS', es: 'Sistema operativo' },
        href: 'https://www.microsoft.com/windows/',
        icon: import('@/assets/software/windows-11.svg?raw')
      }
    ]
  },
  {
    id: 'design-media',
    title: { en: 'Design & Media Tools', es: 'Diseño y multimedia' },
    tools: [
      {
        name: 'Affinity Studio',
        description: { en: 'Design Suite', es: 'Suite de diseño' },
        href: 'https://affinity.serif.com/',
        icon: import('@/assets/software/affinity-studio.svg?raw')
      },
      {
        name: 'Figma',
        description: { en: 'UI/UX Design', es: 'Diseño UI/UX' },
        href: 'https://www.figma.com/',
        icon: import('@/assets/software/figma.svg?raw')
      },
      {
        name: 'Inkscape',
        description: { en: 'Vector Graphics', es: 'Gráficos vectoriales' },
        href: 'https://inkscape.org/',
        icon: import('@/assets/software/inkscape.svg?raw')
      }
    ]
  },
  {
    id: 'development-tools',
    title: { en: 'Development Tools', es: 'Herramientas de desarrollo' },
    tools: [
      {
        name: 'Chromium',
        description: { en: 'Open Source Browser', es: 'Navegador open source' },
        href: 'https://www.chromium.org/Home/',
        icon: import('@/assets/software/chromium.svg?raw')
      },
      {
        name: 'Claude Code',
        description: { en: 'AI Coding Agent', es: 'Agente de IA para programar' },
        href: 'https://claude.com/claude-code',
        icon: import('@/assets/software/claude-code.svg?raw')
      },
      {
        name: 'Firefox',
        description: { en: 'Privacy Browser', es: 'Navegador centrado en privacidad' },
        href: { en: 'https://www.mozilla.org/en-US/firefox', es: 'https://www.mozilla.org/es-ES/firefox' },
        icon: import('@/assets/software/firefox.svg?raw')
      },
      {
        name: 'Git',
        description: { en: 'Version Control', es: 'Control de versiones' },
        href: 'https://git-scm.com/',
        icon: import('@/assets/software/git.svg?raw')
      },
      {
        name: 'GitHub Copilot',
        description: { en: 'AI Code Assistant', es: 'Asistente de código IA' },
        href: 'https://github.com/features/copilot',
        icon: import('@/assets/software/github-copilot.svg?raw')
      },
      {
        name: 'Visual Studio',
        description: { en: 'IDE', es: 'IDE' },
        href: 'https://visualstudio.microsoft.com/',
        icon: import('@/assets/software/visual-studio.svg?raw')
      },
      {
        name: 'VS Code',
        description: { en: 'Code Editor', es: 'Editor de código' },
        href: 'https://code.visualstudio.com/',
        icon: import('@/assets/software/vscode.svg?raw')
      }
    ]
  },
  {
    id: 'virtualization',
    title: { en: 'Virtualization & Containerization', es: 'Virtualización y contenedores' },
    tools: [
      {
        name: 'Docker',
        description: { en: 'Containerization', es: 'Contenerización' },
        href: 'https://www.docker.com/',
        icon: import('@/assets/software/docker.svg?raw')
      },
      {
        name: 'Kubernetes',
        description: { en: 'Container Orchestration', es: 'Orquestación de contenedores' },
        href: 'https://kubernetes.io/',
        icon: import('@/assets/software/kubernetes.svg?raw')
      },
      {
        name: 'VirtualBox',
        description: { en: 'Virtualization', es: 'Virtualización' },
        href: 'https://www.virtualbox.org/',
        icon: import('@/assets/software/virtualbox.svg?raw')
      }
    ]
  },
  {
    id: 'programming-languages',
    title: { en: 'Programming Languages', es: 'Lenguajes de programación' },
    tools: [
      {
        name: 'Bash',
        description: { en: 'Shell Scripting', es: 'Shell scripting' },
        href: 'https://www.gnu.org/software/bash/',
        icon: import('@/assets/software/bash.svg?raw')
      },
      {
        name: 'C#',
        description: { en: 'Programming Language', es: 'Lenguaje de programación' },
        href: { en: 'https://docs.microsoft.com/en-us/dotnet/csharp/', es: 'https://docs.microsoft.com/es-es/dotnet/csharp/' },
        icon: import('@/assets/software/csharp.svg?raw')
      },
      {
        name: 'JavaScript',
        description: { en: 'Programming Language', es: 'Lenguaje de programación' },
        href: { en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', es: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
        icon: import('@/assets/software/js.svg?raw')
      },
      {
        name: 'PHP',
        description: { en: 'Programming Language', es: 'Lenguaje de programación' },
        href: 'https://www.php.net/',
        icon: import('@/assets/software/php.svg?raw')
      }
    ]
  },
  {
    id: 'markup-languages',
    title: { en: 'Markup Languages', es: 'Lenguajes de marcado' },
    tools: [
      {
        name: 'HTML5',
        description: { en: 'Markup Language', es: 'Lenguaje de marcado' },
        href: { en: 'https://developer.mozilla.org/en-US/docs/Web/HTML', es: 'https://developer.mozilla.org/es/docs/Web/HTML' },
        icon: import('@/assets/software/html.svg?raw')
      },
      {
        name: 'JSON',
        description: { en: 'Data Interchange Format', es: 'Formato de intercambio de datos' },
        href: { en: 'https://www.json.org/json-en.html', es: 'https://www.json.org/json-es.html' },
        icon: import('@/assets/software/json.svg?raw')
      },
      {
        name: 'Markdown',
        description: { en: 'Markup Language', es: 'Lenguaje de marcado' },
        href: 'https://www.markdownguide.org/',
        icon: import('@/assets/software/markdown.svg?raw')
      },
      {
        name: 'XML',
        description: { en: 'Markup Language', es: 'Lenguaje de marcado' },
        href: 'https://www.w3.org/XML/',
        icon: import('@/assets/software/xml.svg?raw')
      }
    ]
  },
  {
    id: 'styles',
    title: { en: 'Styles', es: 'Estilos' },
    tools: [
      {
        name: 'CSS3',
        description: { en: 'Styling Language', es: 'Lenguaje de estilos' },
        href: { en: 'https://developer.mozilla.org/en-US/docs/Web/CSS', es: 'https://developer.mozilla.org/es/docs/Web/CSS' },
        icon: import('@/assets/software/css.svg?raw')
      }
    ]
  },
  {
    id: 'databases',
    title: { en: 'Databases', es: 'Bases de datos' },
    tools: [
      {
        name: 'MariaDB',
        description: { en: 'Database', es: 'Base de datos' },
        href: 'https://mariadb.org/',
        icon: import('@/assets/software/mariadb.svg?raw')
      },
      {
        name: 'PostgreSQL',
        description: { en: 'Database', es: 'Base de datos' },
        href: 'https://www.postgresql.org/',
        icon: import('@/assets/software/postgresql.svg?raw')
      },
      {
        name: 'T-SQL',
        description: { en: 'SQL Server', es: 'SQL Server' },
        href: { en: 'https://docs.microsoft.com/en-us/sql/t-sql/', es: 'https://docs.microsoft.com/es-es/sql/t-sql/' },
        icon: import('@/assets/software/tsql.svg?raw')
      }
    ]
  },
  {
    id: 'frameworks',
    title: { en: 'Web Frameworks & Libraries', es: 'Frameworks y librerías web' },
    tools: [
      {
        name: 'Angular',
        description: { en: 'Frontend Framework', es: 'Framework frontend' },
        href: 'https://angular.io/',
        icon: import('@/assets/software/angular.svg?raw')
      },
      {
        name: 'ASP.NET',
        description: { en: 'Web Framework', es: 'Framework web' },
        href: 'https://dotnet.microsoft.com/apps/aspnet',
        icon: import('@/assets/software/dotnet.svg?raw')
      },
      {
        name: 'Astro',
        description: { en: 'Static Site Generator', es: 'Generador de sitios estáticos' },
        href: 'https://astro.build/',
        icon: import('@/assets/software/astro-js.svg?raw')
      },
      {
        name: 'Joomla',
        description: { en: 'CMS', es: 'CMS' },
        href: 'https://www.joomla.org/',
        icon: import('@/assets/software/joomla.svg?raw')
      },
      {
        name: 'React',
        description: { en: 'Frontend Library', es: 'Librería frontend' },
        href: 'https://reactjs.org/',
        icon: import('@/assets/software/react.svg?raw')
      },
      {
        name: 'WordPress',
        description: { en: 'CMS', es: 'CMS' },
        href: 'https://wordpress.org/',
        icon: import('@/assets/software/wordpress.svg?raw')
      }
    ]
  },
  {
    id: 'servers-cloud',
    title: { en: 'Web Servers & Cloud Platforms', es: 'Servidores web y plataformas en la nube' },
    tools: [
      {
        name: 'Apache',
        description: { en: 'Web Server', es: 'Servidor web' },
        href: 'https://httpd.apache.org/',
        icon: import('@/assets/software/apache.svg?raw')
      },
      {
        name: 'Firebase',
        description: { en: 'Backend Platform', es: 'Plataforma backend' },
        href: 'https://firebase.google.com/',
        icon: import('@/assets/software/firebase.svg?raw')
      },
      {
        name: 'GitHub Pages',
        description: { en: 'Code Hosting', es: 'Hosting de código' },
        href: 'https://github.com/',
        icon: import('@/assets/software/github.svg?raw')
      },
      {
        name: 'Laragon',
        description: { en: 'Development Stack', es: 'Stack de desarrollo' },
        href: 'https://laragon.org/',
        icon: import('@/assets/software/laragon.svg?raw')
      },
      {
        name: 'Nginx',
        description: { en: 'Web Server', es: 'Servidor web' },
        href: 'https://nginx.org/',
        icon: import('@/assets/software/nginx.svg?raw')
      },
      {
        name: 'Supabase',
        description: { en: 'Backend Platform', es: 'Plataforma backend' },
        href: 'https://supabase.com/',
        icon: import('@/assets/software/supabase.svg?raw')
      },
      {
        name: 'XAMPP',
        description: { en: 'Development Stack', es: 'Stack de desarrollo' },
        href: 'https://www.apachefriends.org/',
        icon: import('@/assets/software/xampp.svg?raw')
      }
    ]
  }
]
