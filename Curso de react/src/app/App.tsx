import { RouterProvider } from "react-router-dom"
import { router } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <RouterProvider router={router} />
    </UsuarioLogadoProvider>
  );
}
