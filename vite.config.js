import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Content-Security-Policy for production builds. Applied only at build time
// because the Vite dev server injects inline scripts for hot reloading.
// Note: frame-ancestors and other header-only directives must be set on the
// web server; they are ignored in a <meta> tag.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'", // react-bootstrap sets inline styles
  "img-src 'self' data:", // Bootstrap uses data: SVGs for icons
  "font-src 'self'",
  "connect-src 'self'",
  'frame-src https://streams.2200aldrich.com',
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const cspPlugin = {
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: { 'http-equiv': 'Content-Security-Policy', content: csp },
      injectTo: 'head-prepend',
    },
  ],
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cspPlugin],
  server: {
    // Forward API calls to website-prolegoma-backend during development.
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        changeOrigin: true,
      },
    },
  },
})
