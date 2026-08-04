import { createBrowserRouter } from "react-router-dom";
import LivroPage from "../Pages/Livros/Livros.jsx";
import Layout from "../Pages/Layout/Layout.jsx";

const routes = createBrowserRouter(
    [
        {
            path: '/',
            Component: Layout,
            children: [
                {
                    index:true,
                    Component: LivroPage
                }
            ]
        }
    ]
)

export default routes;