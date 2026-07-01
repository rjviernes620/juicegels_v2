import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    define: {
      __SANITY_PROJECT_ID__: JSON.stringify(
        env.VITE_SANITY_PROJECT_ID || env.SANITY_PROJECT_ID || ''
      ),
      __SANITY_DATASET__: JSON.stringify(
        env.VITE_SANITY_DATASET || env.SANITY_DATASET || ''
      ),
      __CLOUDFLARE_TURNSTILE_SITE_KEY__: JSON.stringify(
        env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY || ''
      ),
    },
    build: {
      outDir: 'prod',
    },
    plugins: [
      figmaAssetResolver(),
      // The React and Tailwind plugins are both required for Make, even if
      // Tailwind is not being actively used – do not remove them
      react(),
      tailwindcss(),
      viteStaticCopy({
        targets: [
          { src: 'CNAME', dest: './' },
          { src: '404.html', dest: './' },
          { src: 'images', dest: './' },
          { src: 'robots.txt', dest: './' },
          { src: 'sitemap.xml', dest: './' }
        ]
      })
    ],
    resolve: {
      alias: {
        // Alias @ to the src directory
        '@': path.resolve(__dirname, './src'),
      },
    },
    publicDir: 'public',

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
  };
})
