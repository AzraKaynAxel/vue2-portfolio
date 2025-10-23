import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  // server config permet de dire d'écouter sur toutes les interfaces réseau (contrecarre le blocage de NordVPN).
  // server config allows you to listen on all network interfaces (counteracts NordVPN blocking).
  server: {
    host: true,
    port: 5173,
  }
})
