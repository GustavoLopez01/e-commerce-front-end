import type { SubmitEvent } from "react";
import {
  api_saveCategory,
  api_updateCategory
} from "../../api/category-products/api_categoryProducts";
import { errorToast, successToast } from "../../toast";
import { CategorySchema } from "../../schema/category.schema";
import ModalComponent from "./ModalComponent";
import type { ProductCategory } from "../../types/productCategory";

type CategoryModalProps = {
  isOpen: boolean
  category: ProductCategory | null
  updateList: (category: ProductCategory | null) => void
  close: () => void
}

export default function CategoryModal({
  isOpen,
  category,
  updateList,
  close,
}: CategoryModalProps) {

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get("name") ? data.get("name") : "";
    const description = data.get("description") ? data.get("description") : "";

    const body = {
      name,
      description
    }

    const isValid = CategorySchema.safeParse(body);

    if (!isValid.success) {
      isValid.error.issues.map(error =>
        errorToast(error.message)
      );
      return;
    }

    let response = null;
    if (category?.id) {
      response = await api_updateCategory(isValid.data, category.id);
    } else {
      response = await api_saveCategory(isValid.data);
    }

    if (!response?.success && response?.message) return errorToast(response?.message);

    successToast(`La categoría se ${category?.id ? 'actualizo' : 'agrego'} correctamente.`);
    updateList(response?.category || null);
  }

  return (
    <ModalComponent
      isOpen={isOpen}
      title={`${category?.id ? 'Actualizar' : 'Agregar'} categoría`}
      close={close}
    >
      <form
        className="flex flex-col space-y-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
            defaultValue={category?.name}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0 resize-none min-h-30"
            defaultValue={category?.description}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-family-inter-bold py-2 px-4 rounded-full cursor-pointer"
        >
          {category?.id ? 'Actualizar' : 'Guardar'}
        </button>
      </form>
    </ModalComponent>
  )
}
