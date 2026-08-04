import { createBrowserRouter } from "react-router-dom";
import GerenciamentoUsuario from "../Pages/GerenciamentoUsuario/GerenciamentoUsuario";
import { Sobre } from "../Pages/Sobre/Sobre";

export const routes = createBrowserRouter([
    {
        path:"",
        element: <GerenciamentoUsuario />
    },
    {
        path:"sobre",
        element: <Sobre />
    }
])