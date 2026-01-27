import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use GITHUB_PAGES env var to distinguish deployment targets:
  // - Lovable publish: base = "/"
  // - GitHub Pages: base = "/jack-ux-portfolio-vite/"
  base: process.env.GITHUB_PAGES === "true" ? "/jack-chen-portfolio/" : "/",
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
