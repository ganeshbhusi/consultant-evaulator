import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/consultant-evaulator/',
  plugins: [react()],
})
