import { useEffect, useMemo, useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { formatCurrency } from "../../helpers/string-functions";
import { api_getImageByProductId } from "../../api/products/api_product";
import SearchProducts from "./SearchProducts";
import Pagination from "../pagination/Pagination";
import Loader from "../ux/Loader";
import type { PaginatorPageChangeEvent } from "primereact/paginator";
import type { Product } from "../../types/product";
import type { ProductCategory } from "../../types/productCategory";

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
  const [page, setPage] = useState(1);
  const [first, setFirst] = useState(0);
  const [register, setRegister] = useState(10);

  const ProductName = (product: Product) => {
    return (
      <div className="flex items-center min-w-52 gap-1 pl-4 z-0">
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
    )
  }

  const ProductCategory = (product: Product) => {
    const categoryName = categoriesList.find(category =>
      category.id === product.categoryId
    )?.name ?? '';
    return <> {categoryName} </>
  }

  const ProductPrice = (product: Product) => {
    return <> {formatCurrency(product.price)}  </>
  }

  const ButtonActions = (product: Product) => {
    return (
      <div className="flex gap-2">
        <SquarePen
          className="text-blue-500 cursor-pointer size-5"
          onClick={() => {
            setProductToEdit(product);
          }}
        />
        <Trash2
          className="text-red-500 cursor-pointer size-5"
          onClick={() => {
            deleteProduct(product);
          }}
        />
      </div>
    )
  }

  const productsPerPage = useMemo(() => {
    const copy = [...products];
    const start = page === 1 ? 0 : ((page - 1) * register);
    return copy.splice(start, register);
  }, [products, page, register]);

  const productsToShow = useMemo(() => {
    if (!search && !categoryId) return productsPerPage;
    return productsPerPage.filter(product =>
      (search && product.name.includes(search)) ||
      product.categoryId === categoryId
    )
  }, [search, productsPerPage, categoryId]);

  return (
    <>
      <SearchProducts
        categories={categoriesList}
        categoryId={categoryId}
        setSearch={setSearch}
        setCategoryId={setCategoryId}
        setShowModal={() => setShowModal(true)}
      />

      <DataTable
        value={productsToShow}
        tableStyle={{ minWidth: '50rem' }}
        emptyMessage="Sin registros"
        pt={{
          table: { className: 'w-full text-sm text-left text-gray-500 mt-2' },
          thead: { className: 'text-xs font-family-inter-bold text-gray-700 uppercase bg-gray-50' },
          tbody: { className: 'bg-white' },
        }}
      >
        <Column header="nombre" body={ProductName} ></Column>
        <Column header="categoria" body={ProductCategory} ></Column>
        <Column header="precio" body={ProductPrice} ></Column>
        <Column field="quantity" header="stock"></Column>
        <Column header="acciones" body={ButtonActions}></Column>
      </DataTable>

      <Pagination
        first={first}
        totalRecords={products.length}
        rows={register}
        onPageChange={(e: PaginatorPageChangeEvent) => {
          setFirst(e.first);
          setPage(e.page + 1)
        }}
      />
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