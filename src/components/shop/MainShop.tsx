import { useCartShop } from "../../store/useCartShop";
import SidebarCart from "./components/cart/SidebarCart";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedProducts from "./components/FeaturedProducts";
import FeaturesCard from "./components/FeaturesCard";
import MainProduct from "./components/MainProduct";
import Reviews from "./components/Reviews";

export default function MainShop() {

  const showSidebar = useCartShop(state => state.showSidebar);

  return (
    <div className="w-full h-full text-black">
      {showSidebar && <SidebarCart />}
      <MainProduct />
      <FeaturesCard />
      <CategoriesSection />
      <FeaturedProducts />
      <Reviews />
    </div>
  )
}
