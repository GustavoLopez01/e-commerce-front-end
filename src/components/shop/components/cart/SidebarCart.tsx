import { useCartShop } from "../../../../store/useCartShop";
import { formatCurrency } from "../../../../helpers/string-functions";
import { ArrowRight, ShoppingBag, Trash2, X } from "lucide-react";
import { URL_BACKEND_APP } from "../../../../constant";
import { motion } from "motion/react";

export default function SidebarCart() {
  const productList = useCartShop(state => state.productList);
  const setShowSidebar = useCartShop(state => state.setShowSidebar);

  return (
    <motion.aside
      // initial={{ x: 100 }}
      // animate={{ x: 0 }}
      // transition={{ stiffness: 100 }}
      className="fixed h-full right-0 z-10 bg-white w-95"
    >
      <div className="flex justify-between py-5 border-b">
        <h3 className="flex items-center gap-3 px-4">
          <ShoppingBag />
          Tus productos
        </h3>

        <X
          className="cursor-pointer mr-4"
          onClick={() => setShowSidebar(false)}
        />
      </div>

      {productList.length > 0 ? (
        <section className="h-full flex flex-col justify-between gap-10 px-4 pt-4">
          <div className="max-h-3/4 flex flex-col gap-3 ">
            {productList.map(product => (
              <div
                className="w-full grid grid-cols-3 bg-gray-50 border-2 border-gray-100 p-2 rounded-md"
              >
                <img
                  src={`${URL_BACKEND_APP}/products/get-image-product/${product.id}`}
                  alt={product.name}
                  className="w-20 rounded-md col-span-1"
                />

                <div className="col-span-2">
                  <h1 className="text-sm">
                    {product.name}
                  </h1>
                  <div className="h-full flex justify-between items-center gap-2">
                    <div className="flex border-2 max-w-20 rounded-2xl">
                      <button className="px-2 cursor-pointer">-</button>
                      <button className="px-2">{product.totalItems}</button>
                      <button className="px-2 cursor-pointer">+</button>
                    </div>

                    <span className="flex items-center gap-2 font-family-inter-bold text-[12px]">
                      {`${formatCurrency(product.price)} MXN`}
                      <Trash2 className="w-4 h-4 text-gray-500 cursor-pointer transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-1 mb-20">
            <button
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-family-inter-bold text-base transition-all duration-200 hover:gap-3"
              style={{ background: 'var(--brand)', color: 'white' }}
            >
              Finalizar compra
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </section>
      ) : (
        <div className="h-full flex flex-col justify-center items-center">
          <div className="bg-gray-100 p-4 rounded-md">
            <ShoppingBag className="text-gray-500 size-15" />
          </div>
          <h3>Tu carrito está vacío</h3>
          <p className="text-gray-500 text-sm">Descubre nuestros productos premium</p>
          <button
            className="mt-3 py-2 px-4 cursor-pointer font-family-inter-bold text-white bg-black rounded-md"
            onClick={() => setShowSidebar(false)}
          >
            Explorar tienda
          </button>
        </div>
      )}
    </motion.aside>
  )
}
