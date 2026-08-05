import { createBrowserRouter } from "react-router-dom";
import LivroPage from "../Pages/Livros/Livros.jsx";
import Layout from "../Pages/Layout/Layout.jsx";
import Generos from "../Pages/Generos/Generos.jsx";

const routes = createBrowserRouter(
    [
        {
            path: '/',
            Component: Layout,
            children: [
                {
                    index:true,
                    path: '',
                    Component: LivroPage
                },
                {
                    path:'generos',
                    Component: Generos
                }
            ]
        }
    ]
)

export default routes;