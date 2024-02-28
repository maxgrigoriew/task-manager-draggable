import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  server: {
    open: true,
    host: 'localhost',
    port: 3000,
  },
});
