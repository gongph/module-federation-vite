import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: 5176,
  },
  server: {
    open: true,
    port: 5176,
    origin: "http://localhost:5176",
  },
  base: "http://localhost:5176/testbase",
  plugins: [
    vue(),
    federation({
      name: "remote-vue",
      filename: "remoteEntry-[hash].js",
      exposes: {
        ".": "./src/App.vue",
      },
      manifest: true,
      shared: {
        vue: {},
      },
    }),
  ],
  build: {
    target: "chrome89",
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
