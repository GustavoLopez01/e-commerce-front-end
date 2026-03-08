import { useState } from "react";
import { Link } from "react-router";
import {
  LogOut,
  Menu,
  PackageSearch,
  UserPen,
  UserPlus
} from "lucide-react";
import { ROUTES } from "../../constant";

const renderIcon = (icon: string) => {
  switch (icon) {
    case "profile":
      return (
        <UserPen className="text-slate-500" />
      )
    case "users":
      return (
        <UserPlus className="text-slate-500" />
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
          `bg-white h-screen ${showFull ? 'w-80' : 'w-30'} 
            top-0 text-black flex flex-col pb-6`
        }
      >
        <div className="h-full flex flex-col py-6 px-10 gap-5">
          <Menu
            onClick={() => setShowFull(!showFull)}
          />

          {ROUTES.map(route => (
            <div className="gap-2">
              <Link
                className="flex font-medium justify-start items-center gap-7"
                to={route.path}
              >
                {renderIcon(route.icon)}
                {showFull && route.label}
              </Link>
            </div>
          ))}
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
