import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'],
  outDir: 'dist',
  target: 'es2022',
  splitting: false,
  clean: true,
  sourcemap: false,
  dts: false,
});
