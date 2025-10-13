import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// !!! вот это ключевая строка:
export default defineConfig({
  base: '/test-skyeng/',
  plugins: [react()],
})
