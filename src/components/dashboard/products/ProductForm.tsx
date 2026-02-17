import type { SubmitEvent } from "react";
import type { CreateProduct } from "../../../types/product";

type ProductFormProps = {
  isUpdate: boolean
}

export default function ProductForm({
  isUpdate
}: ProductFormProps) {
  const handleSave = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = data.get("name") ? String(data.get("name")) : "";
    const description = data.get("description") ? String(data.get("description")) : "";
    const categoryId = data.get("categoryId") ? Number(data.get("categoryId")) : 0;
    const quantity = data.get("name") ? Number(data.get("quantity")) : 0;
    const price = data.get("name") ? Number(data.get("price")) : 0;
    const image = data.get("name") ? String(data.get("image")) : "";

    const body: CreateProduct = {
      name,
      description,
      categoryId,
      quantity,
      price,
      image
    }

    if (isUpdate) {

    } else {

    }

  }

  return (
    <>
      <form
        className="space-y-4"
        autoComplete="off"
        onSubmit={handleSave}
      >
        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="name"
          >
            Nombre *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
            placeholder="Ingresa el nombre del producto"
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="description"
          >
            Descripción *
          </label>
          <textarea
            name="description"
            id="description"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0 resize-none"
            placeholder="Ingresa la descripción"
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="category"
          >
            Categoria *
          </label>
          <select
            name="category"
            id="category"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
          >
            <option>-- Selecciona una opción --</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <label
              htmlFor="quantity"
            >
              Cantidad *
            </label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
              placeholder="Ingresa la cantidad"
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <label
              htmlFor="price"
            >
              Precio *
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
              placeholder="Ingresa el precio"
            />
          </div>
        </div>

        <label
          className="flex flex-1 justify-center py-3 bg-gray-100 font-bold cursor-pointer border border-dashed border-gray-300"
          htmlFor="image"
        >
          Selecciona un archivo
          <input
            type="file"
            id="image"
            name="image"
            className="hidden"
          />
        </label>

        <button
          className="w-full py-2 rounded-md font-bold cursor-pointer bg-blue-500 text-white"
        >
          Guardar
        </button>
      </form>
    </>
  )
}
