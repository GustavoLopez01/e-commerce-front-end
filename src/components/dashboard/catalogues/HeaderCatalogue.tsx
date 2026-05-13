import { Plus } from "lucide-react";
import Selector from "../../pagination/Selector";

type HeaderCatalogueProps = {
  titleButton: string
  onClick: () => void
}

export default function HeaderCatalogue({
  titleButton,
  onClick
}: HeaderCatalogueProps) {
  return (
    <>
      <div className="flex flex-wrap justify-end gap-10 py-6">
        <div>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white flex justify-center items-center gap-2 font-family-inter-bold px-8 py-2 rounded-full cursor-pointer"
            onClick={onClick}
          >
            {titleButton}
            <Plus className="size-4" />
          </button>
        </div>

        <Selector
          currentRegister={10}
        />
      </div>
    </>
  )
}
