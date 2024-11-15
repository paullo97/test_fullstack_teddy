import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard";
import DefaultLayout from "../pages/defaultLayout";
import SelectedClients from "../pages/selectedClients";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: '/dashboard/selecteds',
          element: <SelectedClients />
        }
      ],
    },
  ]);