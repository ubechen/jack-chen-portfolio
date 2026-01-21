import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages requires base path set to repo name in production
  // For Lovable preview, keep base as "/"
  base: mode === "production" ? "/jack-ux-portfolio-vite/" : "/",
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
    onPageRendered(route: string, indexHTML: string, appCtx: { helmet?: { title?: { toString: () => string }; meta?: { toString: () => string }; link?: { toString: () => string } } } | undefined) {
      // 從 appCtx 提取 helmet state 並注入到 HTML
      const { helmet } = appCtx || {};
      if (helmet) {
        let html = indexHTML;
        
        // 替換 title
        if (helmet.title) {
          html = html.replace(/<title>.*?<\/title>/, helmet.title.toString());
        }
        
        // 注入 meta tags（在 </head> 前插入）
        if (helmet.meta) {
          html = html.replace('</head>', `${helmet.meta.toString()}</head>`);
        }
        
        // 注入 link tags (canonical 等)
        if (helmet.link) {
          html = html.replace('</head>', `${helmet.link.toString()}</head>`);
        }
        
        return html;
      }
      return indexHTML;
    },
  },
}));
