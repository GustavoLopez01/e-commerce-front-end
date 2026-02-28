import type { ApiResponse } from "./product"

export type productCategory = {
  id: number
  name: string
  description: string
}

export type ApiGetProductCategoryResponse = ApiResponse & {
  categories: productCategory[]
}