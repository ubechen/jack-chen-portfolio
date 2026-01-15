import { lazy, Suspense } from "react";
import type { RouteRecord } from "vite-react-ssg";
import App from "./App";

// Lazy load all pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
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
        element: withSuspense(About),
      },
      {
        path: "resume",
        element: withSuspense(Resume),
      },
      {
        path: "project/ai-pc",
        element: withSuspense(ProjectDetail),
      },
      {
        path: "project/drone-ux",
        element: withSuspense(ProjectDetail),
      },
      {
        path: "project/amr-robot",
        element: withSuspense(ProjectDetail),
      },
      {
        path: "project/esg-board-game",
        element: withSuspense(ProjectDetail),
      },
      {
        path: "*",
        element: withSuspense(NotFound),
      },
    ],
  },
];
