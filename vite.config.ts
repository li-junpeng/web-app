import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'web-app',
  plugins: [vue()],
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
      '*': resolve('')
    },
  }
})
