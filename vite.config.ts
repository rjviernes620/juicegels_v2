import { defineConfig } from 'vite'
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


export default defineConfig({
  base: './',
  define: {
    __SANITY_PROJECT_ID__: JSON.stringify(
      process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || ''
    ),
    __SANITY_DATASET__: JSON.stringify(
      process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || ''
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
        { src: 'images', dest: './' }
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

  
})
