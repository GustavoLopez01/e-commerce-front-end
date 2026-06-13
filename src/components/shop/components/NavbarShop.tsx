import { Heart, Menu, ShoppingCart } from "lucide-react";

export default function NavbarShop() {
  return (
    <nav className="w-full bg-white/95 border py-3 px-8 flex justify-between fixed z-10">
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
