import type { productCategory } from "./productCategory";

export type ApiResponse = {
  success: boolean
  message: string
}

export type Product = {
  id: number
  name: string
  description: string
  categoryId: number
  quantity: number
  price: number
  image: string
  category: productCategory
}

export type CreateProduct = Omit<Product, 'id' | 'category'>;
export type UpdateProduct = Omit<Product, 'id' | 'category'>;

export type ApiGetProductsResponse = ApiResponse & {
  products: Product[]
}

export type ApiCreatetProductResponse = ApiResponse & {
  product: Product
}