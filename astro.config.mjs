import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { sitio } from './src/sitio.js';

export default defineConfig({
  site: sitio.url,
  base: sitio.base,
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (p) => !p.includes('/og') })],
});
