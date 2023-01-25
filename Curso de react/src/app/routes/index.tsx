import {
    createBrowserRouter
} from "react-router-dom";

import { Dashboard, Login } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/pagina-inicial",
        element: <Dashboard/>,
    },
    {
        path: "/entrar",
        element: <Login/>,
    },
    {
        path: "*",
        element: <Dashboard/>,
    },
]);

