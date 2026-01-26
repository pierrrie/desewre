import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/desewre/', // <--- имя репозитория
  plugins: [react()],
});
