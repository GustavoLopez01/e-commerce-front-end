import type { ApiResponse } from "./generalApiResponse"

export type ProductCategory = {
  id: number
  name: string
  description: string
}

export type SaveProductCategory = Omit<ProductCategory, 'id'>;

export type ApiSaveCategory = ApiResponse & {
  category: ProductCategory 
};

export type ApiGetProductCategoryResponse = ApiResponse & {
  categories: ProductCategory[]
}