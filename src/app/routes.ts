import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/pages/HomePage";
import { ProjectPage } from "./components/pages/ProjectPage";
import { PostPage } from "./components/pages/PostPage";
import { AllProjectsPage } from "./components/pages/AllProjectsPage";
import { AllPostsPage } from "./components/pages/AllPostsPage";
import { LifePage } from "./components/pages/LifePage";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/projects", Component: AllProjectsPage },
  { path: "/project/:slug", Component: ProjectPage },
  { path: "/thoughts", Component: AllPostsPage },
  { path: "/thoughts/:slug", Component: PostPage },
  { path: "/life", Component: LifePage },
]);