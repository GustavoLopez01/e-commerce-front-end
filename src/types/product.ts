
export type Product = {
  id: number
  name: string
  description: string
  categoryId: number
  quantity: number
  price: number
  image: string
}

export type CreateProduct = Omit<Product, 'id'>;