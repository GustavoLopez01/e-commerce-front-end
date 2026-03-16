import type { ApiResponse } from "./generalApiResponse"

export type ProductCategory = {
  id: number
  name: string
  description: string
}

export type ApiGetProductCategoryResponse = ApiResponse & {
  categories: ProductCategory[]
}