import { z } from 'astro/zod'

export const HeaderMenuSchema = () =>
  z
    .array(
      z.object({
        title: z.string(),
        link: z.string()
      })
    )
    .default([
      { title: 'Blog', link: '/blog' },
      { title: 'Projects', link: '/projects' },
      { title: 'Stack', link: '/stack' },
      { title: 'About', link: '/about' }
    ])
    .describe('The header menu items for your site.')
