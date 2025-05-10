// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Make sure this is set correctly for your deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: 'es'
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true
  }
})