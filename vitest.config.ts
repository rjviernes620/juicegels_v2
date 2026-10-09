import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __SANITY_PROJECT_ID__: JSON.stringify('5co5ooqr'),
    __SANITY_DATASET__: JSON.stringify('production'),
    __CLOUDFLARE_TURNSTILE_SITE_KEY__: JSON.stringify(''),
    'import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY': JSON.stringify('pk_test_sample'),
  },
  test: {
    globals: true,
    environment: 'node',
    pool: 'threads',
    setupFiles: ['./src/test/setup.ts'],
  },
});
