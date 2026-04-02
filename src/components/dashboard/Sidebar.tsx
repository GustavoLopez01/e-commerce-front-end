import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useUserStore } from "../../store/useUser";
import styled from "styled-components";
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
import { removeCookie } from "../../helpers/cookie";

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
  const location = useLocation();
  const navigate = useNavigate();
  const showSidebar = useUserStore(state => state.showSidebar);
  const setShowSidebar = useUserStore(state => state.setShowSidebar);

  const handleLogout = async () => {
    removeCookie('userToken');
    navigate('/', {
      replace: true
    });
    window.location.reload();
  }

  useEffect(() => {
    setShowSidebar(false);
  }, [location.pathname]);

  return (
    <>
      <SidebarComponent
        className={
          `bg-white min-h-screen top-0 text-black flex flex-col pb-6 pt-15`
        }
        $showSidebar={showSidebar}
      >
        <div className="h-full flex flex-col py-6 px-10 gap-5">
          <h2 className="font-family-inter-bold">Dashboard</h2>
          <RenderRoutes
            routes={DASHBOARD_ROUTES}
            showFull={true}
          />

          <h2 className="font-family-inter-bold">Ventas</h2>
          <RenderRoutes
            routes={SALE_ROUTES}
            showFull={true}
          />

          <h2 className="font-family-inter-bold">Clientes</h2>
          <RenderRoutes
            routes={CUSTOMER_ROUTES}
            showFull={true}
          />
        </div>

        <button
          className="cursor-pointer flex justify-center items-center gap-2"
          onClick={handleLogout}
        >
          Cerrar sesión
          <LogOut
            className="text-gray-500 size-5"
          />
        </button>
      </SidebarComponent>
    </>
  )
}

const SidebarComponent = styled.aside<{ $showSidebar: boolean }>`
  transition: transform .5s ease;
  min-width: 260px;

  @media(max-width: 1024px) {
    position: absolute;
    transform: ${({ $showSidebar }) =>
    $showSidebar ? '' : 'translateX(-300px)'};
    transition: transform .5s ease;
  }

`