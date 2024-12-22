import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        script: "src/main.tsx",
        background: "src/background.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});