import { Suspense, useEffect, useState } from "react";
import {
  api_deleteProduct,
  api_getAllProducts
} from "../../../api/products/api_product";
import { api_getAllCategories } from "../../../api/category-products/api_categoryProducts";
import { errorToast, successToast } from "../../../toast";
import CreateProductModal from "../../modal/CreateProductModal";
import DeleteModal from "../../modal/DeleteModal";
import ProductForm from "./ProductForm";
import Header from "../Header";
import TableProducts from "../TableProducts";
import type { Product } from "../../../types/product";
import type { ProductCategory } from "../../../types/productCategory";

export default function ProductsList() {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [categoriesList, setCategoriesList] = useState<ProductCategory[]>([]);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleUpdateProductsList = (product: Product) => {
    let updateProducts = [];
    const existInList = productsList.find(item =>
      item.id === product.id
    );

    if (!existInList) {
      updateProducts = [...productsList, product];
    } else {
      updateProducts = productsList.map(item => {
        if (item.id === product.id) {
          return { ...item, ...product }
        }
        return item;
      });
    }
    setProductsList(updateProducts);
  }

  const handleDeleteProduct = async () => {
    if (!productToDelete?.id) return;
    const response = await api_deleteProduct(productToDelete.id);
    if (response?.success) {
      successToast(response.message);
      setProductsList((currentProducts) =>
        currentProducts.filter(product =>
          product.id !== productToDelete.id
        )
      );
      setShowDeleteModal(false);
      setProductToDelete(null);
    } else {
      errorToast(response?.message ?? 'Ocurrió un error al eliminar el producto')
    }
  }

  useEffect(() => {
    api_getAllProducts().then(response => {
      setProductsList(response?.products ?? []);
    });
    api_getAllCategories().then(response => {
      setCategoriesList(response?.categories ?? [])
    });
  }, []);

  return (
    <>
      {showModal && (
        <Suspense fallback={<></>}>
          <CreateProductModal
            isOpen={showModal}
            close={() => setShowModal(false)}
          >
            <ProductForm
              product={productToEdit}
              categoriesList={categoriesList ?? []}
              updateProductList={handleUpdateProductsList}
              close={() => setShowModal(false)}
            />
          </CreateProductModal>
        </Suspense>
      )}

      {showDeleteModal && (
        <Suspense fallback={<></>}>
          <DeleteModal
            isOpen={showDeleteModal}
            message={`¿Estas seguro de eliminar el producto ${productToDelete?.name ?? ''}?`}
            onAccept={handleDeleteProduct}
            onCancel={() => setShowDeleteModal(false)}
            close={() => setShowDeleteModal(false)}
          />
        </Suspense>
      )}

      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col px-6">
          <Header
            products={productsList}
          />
          <TableProducts
            products={productsList}
            categoriesList={categoriesList ?? []}
            deleteProduct={(product: Product) => {
              setProductToDelete(product);
              setShowDeleteModal(true);
            }}
            setShowModal={setShowModal}
            setProductToEdit={(product) => {
              setProductToEdit(product);
              setShowModal(true);
            }}
          />
        </div>
      </div>
    </>
  )
}
