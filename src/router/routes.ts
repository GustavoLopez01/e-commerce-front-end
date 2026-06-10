import { createBrowserRouter } from "react-router";
import Dashboard from "../layout/DashboardLayout";
import Root from "../Root";
import ProductsList from "../components/dashboard/products/ProductsList";
import ProfileUser from "../components/dashboard/profile/ProfileUser";
import UsersMain from "../components/dashboard/users/UsersMain";
import CustomersMain from "../components/dashboard/customers/CustomersMain";
import CatalogueMain from "../components/dashboard/catalogues/CatalogueMain";
import Login from "../components/auth/Login";
import MainShop from "../components/shop/MainShop";
import ProductDetail from "../components/shop/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  {
    path: "/login",
    Component: Login,
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
        path: "users",
        Component: UsersMain
      },
      {
        path: "clients",
        Component: CustomersMain
      },
      {
        path: "catalogues",
        Component: CatalogueMain
      }
    ]
  },
  {
    path: "shop",
    Component: MainShop,
  },
  {
    path: "product",
    Component: ProductDetail
  }
]);

export default router;