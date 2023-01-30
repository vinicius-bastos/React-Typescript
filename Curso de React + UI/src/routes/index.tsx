import Button from "@mui/material/Button";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/pagina-inicial',
        element: <Button>Teste</Button>
    },
    {
        path: '*',
        element: <Navigate to={'/pagina-inicial'}/>
    }
]);