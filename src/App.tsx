import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

// 移除 HelmetProvider - 由 vite-react-ssg 在 SSG 時自動提供
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <ScrollToTop />
      <ScrollToTopButton />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
