import { createBrowserRouter } from "react-router-dom";



import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Contato from "./Pages/Contato";
import Sobre from "./Pages/Sobre";
import ErrorPage from "./Pages/ErrorPage";
import LayoutPadrao from "./Pages/LayoutPadrao";

export const rotas = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPadrao />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "produtos",
        element: <Produtos />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
    ],
  },
]);