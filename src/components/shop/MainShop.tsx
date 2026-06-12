import CategoriesSection from "./components/CategoriesSection";
import FeaturedProducts from "./components/FeaturedProducts";
import FeaturesCard from "./components/FeaturesCard";
import MainProduct from "./components/MainProduct";
import Reviews from "./components/Reviews";

export default function MainShop() {
  return (
    <div className="w-full h-full text-black">
      <MainProduct />
      <FeaturesCard />
      <CategoriesSection />
      <FeaturedProducts />
      <Reviews />
    </div>
  )
}
