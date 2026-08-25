import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  // experimental rust port without logging function atm: https://oxc.rs/blog/2026-08-18-react-compiler-support.html#vite
  plugins: [react({ compiler: true }), svgr()],
  base: '/offset-path-with-css-view-timeline/',
});
