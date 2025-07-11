import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'; // Keep this if you use it

// https://vitejs.dev/config/
export default defineConfig({
  base: '/owaistoheed/', // <--- CRITICAL: Change from owaistoheed to owais
  plugins: [react(), svgr()],
})