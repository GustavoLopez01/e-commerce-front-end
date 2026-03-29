export const URL_BACKEND_APP =
  import.meta.env.VITE_REACT_APP_URL_BACKEND;


export const DASHBOARD_ROUTES = [
  {
    label: "Productos",
    value: "products",
    path: "/dashboard",
    icon: ""
  },
  {
    label: "Usuarios",
    value: "users",
    path: "/dashboard/users",
    icon: "users"
  },
  {
    label: "Analíticas",
    value: "analytics",
    path: "/dashboard/analytics",
    icon: "chart"
  },
  {
    label: "Mi Perfil",
    value: "profile",
    path: "/dashboard/profile",
    icon: "profile"
  },
  {
    label: "Catálogos",
    value: "catalogues",
    path: "/dashboard/catalogues",
    icon: "list"
  },
];

export const SALE_ROUTES = [
  {
    label: "Ordenes",
    value: "orders",
    path: "/dashboard/orders",
    icon: "store"
  },
];

export const CUSTOMER_ROUTES = [
  {
    label: "Clientes",
    value: "clients",
    path: "/dashboard/clients",
    icon: "customer"
  },
];