import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Favoritos from "../Pages/Favoritos/Favoritos";
import { Sobre } from "../Pages/Sobre/Sobre";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index:true,
                element: <Home />
            },
            {
                path: "/favoritos",
                element: <Favoritos />
            },
            {
                path: "Sobre",
                element: <Sobre />
            }
        ]
    }
])