import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.icflooring.co.za', // update when live
  integrations: [tailwind()],
  build: { format: 'directory' },
  output: 'static'
});
