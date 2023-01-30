import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}
