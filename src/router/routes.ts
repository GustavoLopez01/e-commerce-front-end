import { createBrowserRouter } from "react-router";
import Dashboard from "../layout/DashboardLayout";
import ProductsList from "../components/dashboard/products/ProductsList";
import ProfileUser from "../components/dashboard/profile/ProfileUser";
import UsersMain from "../components/dashboard/users/UsersMain";
import CustomersMain from "../components/dashboard/customers/CustomersMain";
import CatalogueMain from "../components/dashboard/catalogues/CatalogueMain";
import Login from "../components/auth/Login";
import MainShop from "../components/shop/MainShop";
import ShopLayout from "../layout/ShopLayout";
import DetailProduct from "../components/shop/components/DetailProduct";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: ShopLayout,
    children: [
      {
        index: true,
        Component: MainShop
      },
      {
        path: "shop/detail-product/:productId",
        Component: DetailProduct
      }
    ]
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
]);

export default router;