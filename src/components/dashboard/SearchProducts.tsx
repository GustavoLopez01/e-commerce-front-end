import { Plus } from "lucide-react";

type SearchProductsProps = {
  setSearch: (term: string) => void
  setShowModal: () => void
}

export default function SearchProducts({
  setSearch,
  setShowModal
}: SearchProductsProps) {

  return (
    <>
      <div className="px-6 py-5 grid md:grid-cols-4 gap-4 shadow-md rounded-md">
        <input
          className="text-black md:col-span-2 px-4 py-2 border border-gray-300 rounded-md outline-0"
          type="text"
          placeholder="Buscar productos..."
          onChange={({ target }) => setSearch(target.value.toLowerCase())}
        />

        <select
          className="text-black px-4 py-2 border border-gray-300 rounded-md outline-0"
        >
          <option>Selecciona una opción</option>
        </select>

        <button
          className="bg-blue-600 cursor-pointer flex items-center justify-center gap-1 text-white text-sm font-bold px-4 py-1 rounded-full"
          onClick={setShowModal}
        >
          <Plus size={16} color="white" />
          Agregar producto
        </button>
      </div>
    </>
  )
}
