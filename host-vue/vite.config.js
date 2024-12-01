import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host",
      remotes: {
        remote: "http://localhost:5176/testbase/mf-manifest.json",
      },
      shared: {
        vue: {},
      },
      filename: "remoteEntry-[hash].js",
      manifest: true,
    }),
  ],
  build: {
    target: "chrome89",
  },
});
