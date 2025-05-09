import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  clean: true,
  dts: true,
});
