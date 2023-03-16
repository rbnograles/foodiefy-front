import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react({
        include: "**/*.{jsx,tsx}",
      }),
    ],
    build: {
      outDir: "./dist",
      target: "esnext",
    },
    publicDir: "./public",
    resolve: {
      alias: {
        "~": resolve(__dirname, "src"),
      },
    },
    server: {
      // host: true,
      port: 3000,
      proxy: {
        "/api": {
          target: env.VITE_SERVER_PROXY_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
