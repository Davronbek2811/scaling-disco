import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/scaling-disco/', // ⚠️ bu senga mos, repo noming bilan bir xil
  build: {
    outDir: 'docs', // ⚙️ GitHub Pages uchun
  },
})
