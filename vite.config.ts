import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/desafio5/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 3000, // Usa variable de entorno o 3000 por defecto
    host: true,
  },
})
