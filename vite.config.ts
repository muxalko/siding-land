import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
 
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: process.env.PORT as unknown as number,
  },
  plugin: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
