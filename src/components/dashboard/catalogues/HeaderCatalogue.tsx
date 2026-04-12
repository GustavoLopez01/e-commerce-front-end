import { Plus } from "lucide-react";

type HeaderCatalogueProps = {
  onClick: () => void
}

export default function HeaderCatalogue({
  onClick
}: HeaderCatalogueProps) {
  return (
    <>
      <div className="flex justify-end gap-10 py-6">
        <div>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white flex justify-center items-center gap-2 font-family-inter-bold px-6 py-1 rounded-full cursor-pointer"
            onClick={onClick}
          >
            Agregar
            <Plus className="size-4" />
          </button>
        </div>

        <div>
          Selector
        </div>
      </div>
    </>
  )
}
