import { create } from "zustand";
import type { Product } from "../types/product";

type State = {
  product: Product | null
}

type Action = {
  setProduct: (product: Product) => void
}

export const useProductStore = create<State & Action>((set) => ({
  product: null,
  setProduct: (product) => set(() => ({ product }))
}));