import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useProductStore } from "../../../store/useProductStore";
import { api_getAllProducts } from "../../../api/products/api_product";
import ProductCard from "../../ux/shop/ProductCard";
import TitleSectionStore from "./TitleSectionStore";
import type { Product } from "../../../types/product";

export default function FeaturedProducts() {
  const setProduct = useProductStore(state => state.setProduct);
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api_getAllProducts().then(response => {
      if (response?.success && response.products) setProducts(response.products);
    })
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <TitleSectionStore title="Productos destacados" />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-7">
        {products.length > 0 && products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onShowDetail={() => {
              setProduct(product);
              navigate(`/shop/detail-product/${product.id}`)
            }}
          />
        ))}
      </div>
    </section>
  )
}
