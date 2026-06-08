import CategoriesSection from "./components/CategoriesSection";
import FeaturedProducts from "./components/FeaturedProducts";
import FeaturesCard from "./components/FeaturesCard";
import MainProduct from "./components/MainProduct";
import NavbarShop from "./components/NavbarShop";

export default function MainShop() {
  return (
    <div className="w-full h-full text-black">
      <NavbarShop />
      <MainProduct />
      <FeaturesCard />
      <CategoriesSection />
      <FeaturedProducts />
    </div>
  )
}
