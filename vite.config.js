import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/sitemap.xml': {
        target: 'https://laseq-panel.vercel.app/api/public/sitemap?domain=mariniosiptvpro.com',
        changeOrigin: true,
        rewrite: () => '',
      }
    }
  }
})
