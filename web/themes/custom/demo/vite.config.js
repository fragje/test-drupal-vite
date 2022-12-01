
import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";

export default defineConfig(({ mode }) => {
  return {
    plugins: [liveReload(["**/*.scss", "**/*.js"])],
    base: "/themes/custom/frank/",
    build: {
      manifest: true,
      rollupOptions: {
        input: ['styles/index.scss', 'js/index.js'],
      },
    },
    // server: {
    //   host: true,
    //   strictPort: true,
    // },
  };
});
