import type { Localized } from './i18n'

export interface SkillGroup {
  id: string
  title: Localized
  /** Technology names; they are the same in every language. Keep them alphabetical. */
  skills: string[]
}

/** Technologies I have used in studies and projects. Shown on the home page and in About. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: { en: 'Programming', es: 'Programación' },
    skills: ['Bash', 'C#', 'Java', 'JavaScript', 'PHP', 'Python']
  },
  {
    id: 'programming-ai',
    title: { en: 'Programming (AI-assisted)', es: 'Programación (con IA)' },
    skills: ['Dart', 'Rust', 'TypeScript']
  },
  {
    id: 'markup',
    title: { en: 'Markup', es: 'Marcado' },
    skills: ['HTML', 'LaTeX', 'Markdown', 'XML', 'YAML']
  },
  {
    id: 'styling',
    title: { en: 'Styling', es: 'Estilos' },
    skills: ['Bootstrap', 'CSS', 'Sass', 'Tailwind CSS']
  },
  {
    id: 'databases',
    title: { en: 'Databases', es: 'Bases de datos' },
    skills: ['MariaDB', 'PostgreSQL', 'T-SQL']
  },
  {
    id: 'web-frameworks',
    title: { en: 'Web Frameworks', es: 'Frameworks web' },
    skills: ['Angular', 'ASP.NET Core', 'Astro', 'React']
  },
  {
    id: 'cms',
    title: { en: 'CMS', es: 'CMS' },
    skills: ['Joomla', 'WordPress']
  },
  {
    id: 'servers-cloud',
    title: { en: 'Web Servers & Cloud Platforms', es: 'Servidores Web y Plataformas Cloud' },
    skills: ['Firebase', 'GitHub', 'Supabase', 'Vercel']
  },
  {
    id: 'environment',
    title: { en: 'Environment', es: 'Entorno' },
    skills: ['Arch Linux', 'Git', 'VS Code', 'Windows 11']
  },
  {
    id: 'ai-assistants',
    title: { en: 'AI Coding Assistants', es: 'Asistentes de Programación con IA' },
    skills: ['Claude Code', 'GitHub Copilot', 'OpenCode']
  }
]
