import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/root-layout";
import { SerpPage } from "./pages/serp-page";
import { JobDetailPage } from "./pages/job-detail-page";
import { NotFoundPage } from "./pages/not-found-page";
import { SavedJobsPage } from "./pages/saved-jobs-page";
import { GoogleSearchPage } from "./pages/google-search-page";
import { ChatGPTPage } from "./pages/chatgpt-page";
import { LauncherPage } from "./pages/launcher-page";

export const router = createBrowserRouter([
  { path: "/", Component: LauncherPage },
  { path: "/google", Component: GoogleSearchPage },
  { path: "/chatgpt", Component: ChatGPTPage },
  {
    path: "/app",
    Component: RootLayout,
    children: [
      { index: true, Component: SerpPage },
      { path: "jobs", Component: SerpPage },
      { path: "jobs/:id", Component: JobDetailPage },
      { path: "saved-jobs", Component: SavedJobsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);