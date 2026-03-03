import { useState, use, Suspense } from "react";
import { api_deleteProduct, api_getAllProducts } from "../api/products/api_product";
import { api_getAllCategories } from "../api/category-products/api_categoryProducts";
import { errorToast, successToast } from "../toast";
import Header from "../components/dashboard/Header";
import Nabvar from "../components/dashboard/Nabvar";
import ProductForm from "../components/dashboard/products/ProductForm";
import TableProducts from "../components/dashboard/TableProducts";
import CreateProductModal from "../components/modal/CreateProductModal";
import DeleteModal from "../components/modal/DeleteModal";
import type { Product } from "../types/product";

const products = api_getAllProducts();
const categories = api_getAllCategories();

export default function Dashboard() {
  const productsResponse = use(products);
  const categoriesResponse = use(categories);
  const [productsList, setProductsList] = useState<Product[]>(productsResponse?.products ?? []);
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

  return (
    <>
      <Nabvar />
      {showModal && (
        <Suspense fallback={<></>}>
          <CreateProductModal
            isOpen={showModal}
            close={() => setShowModal(false)}
          >
            <ProductForm
              product={productToEdit}
              categoriesList={categoriesResponse?.categories ?? []}
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
            categoriesList={categoriesResponse?.categories ?? []}
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
