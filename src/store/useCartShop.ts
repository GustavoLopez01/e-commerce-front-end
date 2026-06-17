import { create } from "zustand";
import type { Product, ProductCart } from "../types/product";

type State = {
  productList: ProductCart[]
}

type Action = {
  addProduct: (product: Product) => void
}

function addProductToCart(product: Product, productList: ProductCart[]) {
  let updateProductList = [];
  const existProduct = productList.find(item =>
    item.id === product.id
  );

  if (existProduct) {
    updateProductList = productList.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          totalItems: item.totalItems + 1
        }
      }
      return item;
    })
  } else {
    updateProductList = [...productList, { ...product, totalItems: 1 }];
  }

  return updateProductList;
}

export const useCartShop = create<State & Action>((set, get) => ({
  productList: [],
  addProduct: (product) => {
    const productList = addProductToCart(product, get().productList);
    set(() => ({ productList }))
  }
}))