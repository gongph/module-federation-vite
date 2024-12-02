import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";
import veauryVitePlugins from "veaury/vite/index.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    veauryVitePlugins({
      type: "vue",
      // 所有.vue文件中的jsx以及在名为vue_app目录里的jsx文件都将以vue jsx编译，其他的以react jsx编译
      // vueJsxInclude: [
      //   /vue&type=script&lang\.[tj]sx$/i,
      //   /vue&type=script&setup=true&lang\.[tj]sx$/i,
      //   /[/\\]vue_app[\\/][\w\W]+\.[tj]sx$/,
      // ],
    }),
    federation({
      name: "host",
      remotes: {
        "remote-vue": "http://localhost:5176/testbase/mf-manifest.json",
        "remote-react": "http://localhost:5177/testbase/mf-manifest.json",
      },
      shared: {
        vue: {},
        "react/": {
          requiredVersion: "18",
        },
        "react-dom": {},
      },
      filename: "remoteEntry-[hash].js",
      manifest: true,
    }),
  ],
  build: {
    target: "chrome89",
  },
});
