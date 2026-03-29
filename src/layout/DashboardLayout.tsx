import { Outlet } from "react-router";
import Nabvar from "../components/dashboard/Nabvar";
import Sidebar from "../components/dashboard/Sidebar";

export default function Dashboard({
}) {
  return (
    <>
      <div className="w-full flex relative">
        <Sidebar />
        <Nabvar />
        <div className="w-full flex flex-col pt-18 px-6">
          <Outlet />
        </div>
      </div>
    </>
  )
}
