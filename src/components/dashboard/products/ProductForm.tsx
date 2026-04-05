import { useEffect, useState, type SubmitEvent } from "react";
import {
  api_createProduct,
  api_getImageByProductId,
  api_updateProduct
} from "../../../api/products/api_product";
import { errorToast, successToast } from "../../../toast";
import { ProductSchema } from "../../../schema/product.schema";
import type { CreateProduct, Product } from "../../../types/product";
import type { ProductCategory } from "../../../types/productCategory";

type ProductFormProps = {
  product: Product | null
  categoriesList: ProductCategory[]
  updateProductList: (product: Product) => void
  close: () => void
}

export default function ProductForm({
  product,
  categoriesList,
  updateProductList,
  close
}: ProductFormProps) {

  const [file, setFile] = useState<File | null>(null);
  const [currentImage, setCurrentImage] = useState<any>(null);

  const handleSave = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = data.get("name") ? String(data.get("name")) : "";
    const description = data.get("description") ? String(data.get("description")) : "";
    const categoryId = data.get("categoryId") ? Number(data.get("categoryId")) : 0;
    const quantity = data.get("quantity") ? Number(data.get("quantity")) : 0;
    const price = data.get("price") ? Number(data.get("price")) : 0;
    const image = product?.image ?? file?.name ?? "";

    const body: CreateProduct = {
      name,
      description,
      categoryId,
      quantity,
      price,
      image,
    }

    const isValid = ProductSchema.safeParse(body);

    if (!isValid.success) {
      return isValid.error.issues.forEach(error =>
        errorToast(error.message)
      );
    }

    let response = null;
    if (product?.id) {
      response = await api_updateProduct(isValid.data, product?.id, file)
    } else {
      response = await api_createProduct(isValid.data, file);
    }

    if (!response?.success && response?.message) {
      errorToast(response.message);
      return;
    }

    updateProductList(response?.product!);
    successToast('Producto actualizado correctamente.');
    close();
  }

  const handleGetImage = async () => {
    if (product?.id) {
      const response = await api_getImageByProductId(product?.id);
      if (response) {
        const url = URL.createObjectURL(response);
        setCurrentImage(url);
      }
    }
  }

  useEffect(() => {
    if (product?.id) handleGetImage();
  }, [product?.id]);

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
            defaultValue={product?.name}
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
            defaultValue={product?.description}
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="category"
          >
            Categoria *
          </label>
          <select
            name="categoryId"
            id="categoryId"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
            defaultValue={
              categoriesList.find(category =>
                category.id === product?.categoryId
              )?.id ?? categoriesList?.[0].id
            }
          >
            <option>-- Selecciona una opción --</option>
            {categoriesList.length > 0 &&
              categoriesList.map(category => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
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
              defaultValue={product?.quantity}
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
              defaultValue={product?.price}
            />
          </div>
        </div>

        {!currentImage && (
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
              accept=".png,.jpg,.jpeg"
              onChange={({ target }) => {
                if (target?.files?.[0]) {
                  setFile(target?.files?.[0]);
                  setCurrentImage(URL.createObjectURL(target?.files?.[0]));
                }
              }}
            />
          </label>
        )}

        {currentImage && (
          <div className="relative">
            <img
              className="w-full h-60 object-cover"
              src={currentImage}
            />

            <div className="w-full px-5 absolute bottom-5">
              <label
                className="text-black block text-center rounded-full px-2 py-2 font-family-inter-bold bg-white/90 w-full cursor-pointer hover:bg-white/80"
                htmlFor="loadImage"
              >
                Cambiar imagen
                <input
                  type="file"
                  id="loadImage"
                  name="loadImage"
                  className="hidden"
                  accept=".png,.jpg,.jpeg"
                  onChange={({ target }) => {
                    if (target?.files?.[0]) {
                      setFile(target?.files?.[0]);
                      setCurrentImage(URL.createObjectURL(target?.files?.[0]));
                    }
                  }}
                />
              </label>
            </div>

          </div>
        )}

        <button
          className="w-full py-2 rounded-md font-family-inter-bold cursor-pointer bg-blue-500 text-white"
        >
          {product?.id ? 'Actualizar' : 'Guardar' }
        </button>
      </form>
    </>
  )
}
