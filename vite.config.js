import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"
import postcss from 'postcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcss(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
})


