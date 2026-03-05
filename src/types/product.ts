import type { ApiResponse } from "./generalApiResponse";
import type { ProductCategory } from "./productCategory";

export type Product = {
  id: number
  name: string
  description: string
  categoryId: number
  quantity: number
  price: number
  image: string
  category: ProductCategory
}

export type CreateProduct = Omit<Product, 'id' | 'category'>;
export type UpdateProduct = Omit<Product, 'id' | 'category'>;

export type ApiGetProductsResponse = ApiResponse & {
  products: Product[]
}

export type ApiCreatetProductResponse = ApiResponse & {
  product: Product
}