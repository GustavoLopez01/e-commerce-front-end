import { Outlet } from "react-router";
import Nabvar from "../components/dashboard/Nabvar";
import Sidebar from "../components/dashboard/Sidebar";

export default function Dashboard({
}) {
  return (
    <>
      <div className="w-full flex">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Nabvar />
          <Outlet />
        </div>
      </div>
    </>
  )
}
