import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/whatsapp-v2/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'WhatsApp',
        short_name: 'WhatsApp',
        description: 'WhatsApp Business mobile workspace',
        theme_color: '#075e54',
        background_color: '#f7f8fa',
        display: 'standalone',
        start_url: '/whatsapp-v2/',
        scope: '/whatsapp-v2/',
        icons: [{ src: '/whatsapp-v2/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }]
      }
    })
  ]
})