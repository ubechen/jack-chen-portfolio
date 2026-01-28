import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Custom domain (taiyun.design) uses base = "/"
  // GitHub Pages repo URL uses base = "/jack-chen-portfolio/"
  // CUSTOM_DOMAIN=true → "/" | GITHUB_PAGES=true → "/jack-chen-portfolio/" | default → "/"
  base:
    process.env.CUSTOM_DOMAIN === "true"
      ? "/"
      : process.env.GITHUB_PAGES === "true"
        ? "/jack-chen-portfolio/"
        : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
  },
}));
