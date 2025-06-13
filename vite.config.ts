import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { reactRouterPlugin } from '@react-router/dev/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouterPlugin(), react()],
})
