import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  return {
    publicDir: './assets',
    build: {
      target: 'esnext',
      outDir: 'bin',
      chunkSizeWarningLimit: 1000000,
      rollupOptions: {
        output: {
          entryFileNames: 'client.js',
          manualChunks: false,
          inlineDynamicImports: true,
        },
      },
      copyPublicDir: true,
    },
    optimizeDeps: {
      esbuildOptions: { target: 'esnext', supported: { bigint: true } },
    },
    plugins: [
    ],
    server: {
      host: true,
    },
  }
})
