import { createBrowserRouter } from "react-router";
import Dashboard from "../layout/DashboardLayout";
import Root from "../Root";
import ProductsList from "../components/dashboard/products/ProductsList";
import ProfileUser from "../components/dashboard/profile/ProfileUser";
import UsersMain from "../components/dashboard/users/UsersMain";
import CustomersMain from "../components/dashboard/customers/CustomersMain";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  {
    path: "dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: ProductsList
      },
      {
        path: "profile",
        Component: ProfileUser
      },
      {
        path: "employees",
        Component: UsersMain
      },
      {
        path: "clients",
        Component: CustomersMain
      }
    ]
  }
]);

export default router;