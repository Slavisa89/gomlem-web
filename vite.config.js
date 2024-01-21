import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    base: "./",
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@": path.resolve(__dirname, "./src"),
      "@animation": path.resolve(__dirname, "./src/components/Animation"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@dashboard": path.resolve(__dirname, "./src/pages/(Dashboard)"),
      "@auth": path.resolve(__dirname, "./src/pages/(auth)"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@skeleton": path.resolve(__dirname, "./src/components/Skeleton"),
      "@modals": path.resolve(__dirname, "./src/components/Modals"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  plugins: [react()],
});
