import { useState } from "react";
import { Link } from "react-router";
import {
  ChartColumnDecreasing,
  List,
  LogOut,
  PackageSearch,
  ShoppingBasket,
  UserCog,
  UserPen,
  Users
} from "lucide-react";
import {
  CUSTOMER_ROUTES,
  DASHBOARD_ROUTES,
  SALE_ROUTES
} from "../../constant";

type Route = {
  label: string
  value: string
  path: string
  icon: string
}

type RenderRoutesProps = {
  routes: Route[]
  showFull: boolean
}


const renderIcon = (icon: string) => {
  switch (icon) {
    case "profile":
      return (
        <UserPen className="text-slate-500" />
      )
    case "users":
      return (
        <UserCog className="text-slate-500" />
      )
    case "store":
      return (
        <ShoppingBasket className="text-slate-500" />
      )
    case "customer":
      return (
        <Users className="text-slate-500" />
      )
    case "chart":
      return (
        <ChartColumnDecreasing className="text-slate-500" />
      )
    case "list":
      return (
        <List className="text-slate-500" />
      )
    default:
      return (
        <PackageSearch className="text-slate-500" />
      );
  }
}

export default function Sidebar() {
  const [showFull, setShowFull] = useState(true);

  return (
    <>
      <aside
        className={
          `bg-white min-h-screen ${showFull ? 'min-w-72' : 'w-30'} 
            top-0 text-black flex flex-col pb-6 pt-15`
        }
      >
        <div className="h-full flex flex-col py-6 px-10 gap-5">
          <h2 className="font-family-inter-bold">Dashboard</h2>
          <RenderRoutes
            routes={DASHBOARD_ROUTES}
            showFull={showFull}
          />

          <h2 className="font-family-inter-bold">Ventas</h2>
          <RenderRoutes
            routes={SALE_ROUTES}
            showFull={showFull}
          />

          <h2 className="font-family-inter-bold">Clientes</h2>
          <RenderRoutes
            routes={CUSTOMER_ROUTES}
            showFull={showFull}
          />
        </div>

        <button
          className="cursor-pointer flex justify-center items-center gap-2"
        >
          Cerrar sesión
          <LogOut
            className="text-gray-500 size-5"
          />
        </button>
      </aside>
    </>
  )
}

const RenderRoutes = ({
  routes,
  showFull
}: RenderRoutesProps) => {
  return (
    <>
      {routes.map(route => (
        <div
          key={route.path}
          className="gap-2"
        >
          <Link
            className="flex font-medium justify-start items-center gap-7"
            to={route.path}
          >
            {renderIcon(route.icon)}
            {showFull && route.label}
          </Link>
        </div>
      ))}
    </>
  )
}
