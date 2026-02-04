import { lazy, Suspense } from "react";
import type { RouteRecord } from "vite-react-ssg";
import App from "./App";

// Lazy load all pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));       // 新版 V2 內容
const AboutV1 = lazy(() => import("./pages/AboutV1"));   // 舊版備份
const Resume = lazy(() => import("./pages/Resume"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

// Wrap component with Suspense for lazy loading
const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

// Define all routes for SSG pre-rendering
// App is the layout wrapper with providers, child routes render via Outlet
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: withSuspense(Index),
      },
      {
        path: "about",
        element: withSuspense(About),      // 新版內容
      },
      {
        path: "about-v1",
        element: withSuspense(AboutV1),    // 舊版備份
      },
      {
        path: "resume",
        element: withSuspense(Resume),
      },
      {
        path: "project/:projectId",
        element: withSuspense(ProjectDetail),
        // Define which paths to pre-render for this dynamic route
        // Must return full paths (including parent route prefix) per vite-react-ssg docs
        getStaticPaths: () => [
          'project/ai-pc',
          'project/drone',
          'project/amr-robot',
          'project/esg-board-game',
        ],
      },
      {
        path: "*",
        element: withSuspense(NotFound),
      },
    ],
  },
];
