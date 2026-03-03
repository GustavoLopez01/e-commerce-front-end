import { CircleUserRound } from "lucide-react";

export default function Nabvar() {
  return (
    <nav className="w-full flex justify-between text-black shadow px-6 py-5">
      <div className="w-full grid grid-cols-2">
        <h3 className="font-bold text-2xl">
          ShopHub
        </h3>

        <div className="flex justify-end">
          <CircleUserRound className="size-8 text-blue-600 " />
        </div>
      </div>
    </nav>
  )
}
