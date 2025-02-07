import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import "./styles/index.scss";

import App from "./App.tsx";
import Accueil from "./pages/accueil/Accueil.tsx";
import Projets from "./pages/projets/Projets.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Accueil />,
      },
      {
        path: "projets/:selectedProject",
        element: <Projets />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
