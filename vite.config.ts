import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// ✅ DO NOT import or use '@tailwindcss/vite'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
