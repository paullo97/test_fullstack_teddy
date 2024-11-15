import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "./components/snackBar";

const theme = createTheme({
  palette: {
    secondary: {
      main: '#EC6724',
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
