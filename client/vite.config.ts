import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 4000,
    strictPort: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        // target: 'https://walamen-offecial.onrender.com', // Backend server
        target: 'http://localhost:5000', // Backend server

        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Ensure proper forwarding
      },
    },
  },
});
