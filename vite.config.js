import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/scaling-disco/', // bu GitHub repo nomi bilan bir xil bo‘lishi kerak
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
