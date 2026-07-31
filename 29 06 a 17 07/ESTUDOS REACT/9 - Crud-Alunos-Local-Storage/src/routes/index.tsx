import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AlunoPage } from "../pages/AlunoPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/alunos",
        element: <AlunoPage />
    }
])