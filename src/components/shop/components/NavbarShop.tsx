import { Heart, Menu, ShoppingCart } from "lucide-react";

export default function NavbarShop() {
  return (
    <nav className="w-full py-3 px-8 flex justify-between">
      <h1 className="text-2xl">
        Nexus Shop
      </h1>

      <div className="flex gap-2">
        <button className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
          <ShoppingCart className="size-6" />
        </button>
        <button className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
          <Heart className="size-6" />
        </button>
        <button className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
          <Menu className="size-6"/>
        </button>
      </div>
    </nav>
  )
}
