import react from '@vitejs/plugin-react'
import { defineConfig, transformWithOxc } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'jsx-in-javascript',
      enforce: 'pre',
      async transform(code, id) {
        if (id.includes('/src/') && id.endsWith('.js')) {
          const result = await transformWithOxc(code, id, { lang: 'jsx' })
          return { code: result.code, map: result.map }
        }
      },
    },
    react(),
  ],
})
