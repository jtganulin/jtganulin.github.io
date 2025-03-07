import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [postcssNesting()]
    }
  }
})
