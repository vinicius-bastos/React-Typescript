import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/pagina-inicial',
        element: <div>rota teste</div>
    },
    {
        path: '*',
        element: <Navigate to={'/pagina-inicial'}/>
    }
]);