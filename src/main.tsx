import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

export const createRoot = ViteReactSSG(
  { routes, basename: import.meta.env.BASE_URL },
  ({ app, router, routes, isClient, initialState }) => {
    // SSG 初始化 callback
    // helmetContext 會透過 App props 傳遞，由 vite-react-ssg 自動處理
  }
);
