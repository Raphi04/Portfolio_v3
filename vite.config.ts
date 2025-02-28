import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // N'oublie pas d'importer path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias pour le dossier src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`,
      },
    },
  },
});
