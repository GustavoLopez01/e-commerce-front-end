import { Plus } from "lucide-react";
import { Dropdown } from "primereact/dropdown"
import type { ProductCategory } from "../../types/productCategory";

type SearchProductsProps = {
  categories: ProductCategory[]
  categoryId: ProductCategory['id']
  setSearch: (term: string) => void
  setCategoryId: (id: ProductCategory['id']) => void
  setShowModal: () => void
}

export default function SearchProducts({
  categories,
  categoryId,
  setSearch,
  setCategoryId,
  setShowModal
}: SearchProductsProps) {
  return (
    <>
      <div className="bg-white px-6 py-5 grid md:grid-cols-4 gap-4 shadow-md rounded-md">
        <input
          className="text-black md:col-span-2 px-4 py-2 border border-gray-300 rounded-md outline-0"
          type="text"
          placeholder="Buscar productos..."
          onChange={({ target }) => setSearch(target.value.toLowerCase())}
        />

        <Dropdown
          options={categories}
          className="flex items-center justify-between px-2 text-black border border-gray-300 rounded-md outline-0 h-11"
          placeholder="Selecciona una opción"
          optionLabel="name"
          value={
            categories.find(category =>
              category.id === categoryId
            )
          }
          onChange={(e) => setCategoryId(e.value.id)}
          pt={{
            list: { className: "list-none z-10 max-h-60 overflow-y-auto shadow-md rounded-md" },
            item: { className: `bg-white cursor-pointer font-normal overflow-hidden relative whitespace-nowrap m-0 border-0 transition-shadow duration-200 rounded-none hover:bg-gray-100` }
          }}
        />

        <button
          className="bg-blue-600 cursor-pointer flex items-center justify-center gap-1 text-white text-sm font-family-inter-bold px-4 py-2 rounded-full"
          onClick={setShowModal}
        >
          <Plus size={16} color="white" />
          Agregar producto
        </button>
      </div>
    </>
  )
}
