import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: 5177,
  },
  server: {
    open: true,
    port: 5177,
    origin: "http://localhost:5177",
  },
  base: "http://localhost:5177/testbase",
  plugins: [
    react(),
    federation({
      name: "remote-react",
      filename: "remoteEntry-[hash].js",
      exposes: {
        ".": "./src/App.jsx",
      },
      manifest: true,
      shared: {
        "react/": {},
        react: {
          requireVersion: "^18.2.0",
        },
        "react-dom/": {},
        "react-dom": {},
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
