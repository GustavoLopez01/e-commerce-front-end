import { createBrowserRouter } from "react-router";
import Login from "../components/auth/Login";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login
  },
  {
    path: "/dashboard",
    Component: Dashboard
  }
]);

export default router;