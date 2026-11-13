// @ts-check
import { defineConfig } from 'astro/config';

// Static site, ready to deploy on Netlify (output: 'static' is the default).
export default defineConfig({
  site: 'https://louiscochet.netlify.app',
  build: {
    inlineStylesheets: 'auto',
  },
});
