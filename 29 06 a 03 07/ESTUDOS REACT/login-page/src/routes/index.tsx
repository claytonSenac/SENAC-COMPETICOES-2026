import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginComponent from "../Components/Login/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <LoginComponent />
    }
])