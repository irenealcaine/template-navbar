import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    allowedHosts: [
      "all",
      "cjm43p-3000.csb.app",
      "cjm43p-3001.csb.app",
      "cjm43p-3002.csb.app",
    ],
  },
  build: {
    outDir: "build",
  },
});
