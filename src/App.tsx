import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

// SSG 時會從外部傳入 helmetContext，用於提取 meta 標籤
const App = ({ helmetContext = {} }: { helmetContext?: object }) => (
  <HelmetProvider context={helmetContext}>
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
