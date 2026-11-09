import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { sitio } from './src/sitio.js';

export default defineConfig({
  site: sitio.url,
  base: sitio.base,
  trailingSlash: 'ignore',
  // precio.html en vez de precio/index.html: GitHub Pages sirve /precio sin redirigir a /precio/
  build: { format: 'file' },
  integrations: [sitemap({ filter: (p) => !p.includes('/og') })],
});
