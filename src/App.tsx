import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

// 客戶端需要 HelmetProvider，SSG 時 vite-react-ssg 的 onPageRendered 會處理 meta 注入
const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" />
        <ScrollToTop />
        <ScrollToTopButton />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
