import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset paths so the built portfolio works on any host (GitHub Pages, Vercel, Netlify, subdirectories, or local preview)
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1200,
    cssMinify: true,
  },
})
