import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/project',
    element: <ProjectPage />
  },

  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
