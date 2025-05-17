// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss()
    ],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD
      ? { 'react-dom/server': 'react-dom/server.edge' }
      : {},
    },
  },

  integrations: [sitemap(), react()],
  adapter: cloudflare(),
});