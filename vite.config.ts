import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger";
import vercel from 'vite-plugin-vercel';
 
// export default defineConfig({
//   server: {
//     port: process.env.PORT as unknown as number,
//   },
//   plugins: [vercel()],
// });

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // host: "::",
    // port: 8080,
    port: process.env.PORT as unknown as number,
  },
  plugin: [react(), vercel()].filter(Boolean),
  // plugins: [react(), mode === "development" && componentTagger(), vercel()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
