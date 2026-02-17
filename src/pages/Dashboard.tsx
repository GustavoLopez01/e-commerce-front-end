import { useState } from "react";
import Header from "../components/dashboard/Header";
import Nabvar from "../components/dashboard/Nabvar";
import ProductForm from "../components/dashboard/products/ProductForm";
import SearchProducts from "../components/dashboard/SearchProducts";
import TableProducts from "../components/dashboard/TableProducts";
import CreateProductModal from "../components/modal/CreateProductModal";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Nabvar />
      <CreateProductModal
        isOpen={showModal}
        close={() => setShowModal(false)}
      >
        <ProductForm
          isUpdate={false}
        />
      </CreateProductModal>

      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col px-6">
          <Header />
          <SearchProducts
            setShowModal={() => setShowModal(true)}
          />
          <TableProducts />
        </div>
      </div>
    </>
  )
}
