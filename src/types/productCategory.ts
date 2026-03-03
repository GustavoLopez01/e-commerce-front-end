import type { ApiResponse } from "./product"

export type ProductCategory = {
  id: number
  name: string
  description: string
}

export type ApiGetProductCategoryResponse = ApiResponse & {
  categories: ProductCategory[]
}