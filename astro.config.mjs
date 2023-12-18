import AstroPWA from '@vite-pwa/astro'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import rehypeExternalLinks from 'rehype-external-links'
import rehypePrism from 'rehype-prism-plus/all'
import remarkRehype from 'remark-rehype'

// https://astro.build/config
export default defineConfig({
  site: 'https://babybluue.github.io',
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkRehype],
    rehypePlugins: [
      [rehypePrism, { showLineNumbers: true }],
      [rehypeExternalLinks, { rel: 'nofollow', target: '_blank' }],
    ],
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    AstroPWA({
      registerType: 'prompt',
      devOptions: { enabled: true },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,png,txt,ttf,webp}'],
      },
      includeAssets: ['favicon.ico', 'pwa_192.png'],
      manifest: {
        name: 'didmax - blog',
        short_name: 'didmax',
        description: 'didmax, my blog website',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa_192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa_512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa_512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa_512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
})
