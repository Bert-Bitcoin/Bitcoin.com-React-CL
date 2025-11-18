import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  dts: {
    entry: {
      index: 'src/index.ts'
    }
  },
  minify: false,
  target: 'es2021'
});


