import { useEffect, useMemo, useState } from "react";
import { formatCurrency } from "../../helpers/string-functions";
import { api_getImageByProductId } from "../../api/products/api_product";
import SearchProducts from "./SearchProducts";
import { SquarePen, Trash2 } from "lucide-react";
import type { Product } from "../../types/product";
import type { ProductCategory } from "../../types/productCategory";
import Loader from "../ux/Loader";

type TableProductsProps = {
  products: Product[]
  categoriesList: ProductCategory[]
  deleteProduct: (product: Product) => void
  setProductToEdit: (product: Product) => void
  setShowModal: (show: boolean) => void
}

export default function TableProducts({
  products,
  categoriesList,
  deleteProduct,
  setShowModal,
  setProductToEdit,
}: TableProductsProps) {

  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  const productsToShow = useMemo(() => {
    if (!search && !categoryId) return products;
    return products.filter(product =>
      (search && product.name.includes(search)) ||
      product.categoryId === categoryId
    )
  }, [search, products, categoryId]);

  return (
    <>
      <SearchProducts
        categories={categoriesList}
        setSearch={setSearch}
        setCategoryId={setCategoryId}
        setShowModal={() => setShowModal(true)}
      />

      <div className="mt-3 text-black bg-white overflow-x-auto">
        <table className="w-full rounded-sm shadow table-auto border-collapse text-sm">
          <thead className="text-left text-gray-400 bg-gray-100 uppercase">
            <tr>
              <th className="font-normal py-3 pl-4 rounded-tl-sm">producto</th>
              <th className="font-normal text-center">categoría</th>
              <th className="font-normal text-center">precio</th>
              <th className="font-normal text-center">stock</th>
              <th className="font-normal text-center rounded-tr-md">acciones</th>
            </tr>
          </thead>
          <tbody>
            {productsToShow.length > 0 &&
              productsToShow.map((product) => {
                const categoryName = categoriesList.find(category =>
                  category.id === product.categoryId
                )?.name ?? '';
                return (
                  <tr
                    key={product.id}
                    className="h-20"
                  >
                    <td>
                      <div className="flex items-center min-w-52 gap-1 pl-4">
                        <RenderImage
                          id={product.id}
                          altImage={product.name}
                        />
                        <p className="flex flex-col pl-2">
                          {product.name}
                          <span>
                            {product.description}
                          </span>
                        </p>
                      </div>
                    </td>
                    <td className="text-center min-w-32">
                      {categoryName}
                    </td>
                    <td className="text-center min-w-32">
                      {formatCurrency(product.price)}
                    </td>
                    <td className="text-center min-w-32">
                      {product.quantity}
                    </td>
                    <td>
                      <div className="flex gap-3 min-w-32 justify-center items-center">
                        <SquarePen
                          className="text-blue-500 cursor-pointer size-5"
                          onClick={() => setProductToEdit(product)}
                        />
                        <Trash2
                          className="text-red-500 cursor-pointer size-5"
                          onClick={() => deleteProduct(product)}
                        />
                      </div>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

const RenderImage = ({
  id,
  altImage
}: {
  id: Product['id'],
  altImage: string
}) => {
  const [productImage, setProductImage] = useState("")

  useEffect(() => {
    if (id) {
      api_getImageByProductId(id).then(response => {
        if (response) {
          setProductImage(URL.createObjectURL(response))
        }
      });
    }
  }, [id]);

  if (!productImage) {
    return (
      <Loader
        width="20px"
        height="20px"
        borderWidth={1}
      />
    )
  }

  return (
    <img
      className="rounded-md"
      src={productImage}
      alt={altImage ?? 'product image'}
      width={50}
      height={50}
    />
  )
}