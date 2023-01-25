import {
    createBrowserRouter
} from "react-router-dom";

import { Dashboard } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/pagina-inicial",
        element: <Dashboard/>,
    },
    {
        path: "*",
        element: <Dashboard/>,
    },
]);

