import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron/simple";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  build: {
    target: "esnext",
  },
  plugins: [
    react(),
    electron({
      main: {
        entry: "src-electron/main.ts",
        vite: {
          build: {
            minify: process.env.NODE_ENV === "production",
            outDir: "src-electron/dist",
          },
        },
      },
      preload: {
        input: "src-electron/preload.ts",
        vite: {
          build: {
            minify: process.env.NODE_ENV === "production",
            outDir: "src-electron/dist",
          },
        },
      },
    }),
  ],
}));
