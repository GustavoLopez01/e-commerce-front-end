import { Suspense, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { api_deleteCategory } from "../../../api/category-products/api_categoryProducts";
import { errorToast, successToast } from "../../../toast";
import Pagination from "../../pagination/Pagination";
import HeaderCatalogue from "./HeaderCatalogue";
import CategoryModal from "../../modal/CategoryModal";
import DeleteModal from "../../modal/DeleteModal";
import { SquarePen, Trash2 } from "lucide-react";
import type { PaginatorPageChangeEvent } from "primereact/paginator";
import type { ProductCategory } from "../../../types/productCategory";

type CategoriesTableProps = {
  categoryList: ProductCategory[]
  setCategoryList: (categoryList: ProductCategory[]) => void
}

export default function CategoriesTable({
  categoryList,
  setCategoryList
}: CategoriesTableProps) {
  const [currentCategory, setCurrentCategory] = useState<ProductCategory | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
    if (!currentCategory?.id) return;

    const response = await api_deleteCategory(currentCategory.id);

    if (!response?.success && response?.message) {
      errorToast(response.message);
      return;
    }

    const updatedList = categoryList.filter(category =>
      category?.id !== currentCategory.id
    );

    setCategoryList(updatedList);
    successToast('Se eliminó correctamente la categoría.');
    setCurrentCategory(null);
    setShowDeleteModal(false);
  }

  const handleUpdateList = (category: ProductCategory | null) => {
    if (!currentCategory?.id && category) {
      setCategoryList([...categoryList, category]);
    } else {
      const updatedList = categoryList.map(categoryItem => {
        if (categoryItem.id === category?.id) {
          return {
            ...categoryItem,
            ...category
          }
        }

        return categoryItem;
      });
      setCategoryList(updatedList);
    }

    setCurrentCategory(null);
    setShowModal(false);
  }

  const ButtonActions = (category: ProductCategory) => {
    return (
      <div className="flex gap-2">
        <SquarePen
          className="text-blue-500 cursor-pointer size-5"
          onClick={() => {
            setCurrentCategory(category);
            setShowModal(true);
          }}
        />
        <Trash2
          className="text-red-500 cursor-pointer size-5"
          onClick={() => {
            setCurrentCategory(category);
            setShowDeleteModal(true);
          }}
        />
      </div>
    )
  }

  return (
    <>
      {showModal && (
        <Suspense fallback={<></>}>
          <CategoryModal
            isOpen={showModal}
            category={currentCategory}
            updateList={handleUpdateList}
            close={() => {
              setShowModal(false);
            }}
          />
        </Suspense>
      )}

      {showDeleteModal && (
        <Suspense fallback={<></>}>
          <DeleteModal
            isOpen={showDeleteModal}
            message={`¿Estás seguro de eliminar la siguiente categoría: ${currentCategory?.name}?`}
            onAccept={handleDelete}
            onCancel={() => {
              setCurrentCategory(null);
              setShowDeleteModal(false);
            }}
            close={() => {
              setCurrentCategory(null);
              setShowDeleteModal(false);
            }}
          />
        </Suspense>
      )}

      <HeaderCatalogue
        titleButton='Agregar categoría'
        onClick={() => {
          setCurrentCategory(null);
          setShowModal(true);
        }}
      />

      <DataTable
        value={categoryList}
        tableStyle={{ minWidth: '50rem' }}
        pt={{
          table: { className: 'w-full text-sm text-left text-gray-500' },
          thead: { className: 'text-xs font-family-inter-bold text-gray-700 uppercase bg-gray-50' },
          tbody: { className: 'bg-white' },
        }}
      >
        <Column field="name" header="Nombre"></Column>
        <Column field="description" header="Descripción"></Column>
        <Column field="actions" body={ButtonActions}></Column>
      </DataTable>

      <Pagination
        totalRecords={categoryList.length}
        rows={10}
        onPageChange={(e: PaginatorPageChangeEvent) => {
          console.log(e.first);
        }}
      />
    </>
  )
}
