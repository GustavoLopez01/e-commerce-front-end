import { handleFetch } from "../fetch";
import { URL_BACKEND_APP } from "../../constant";
import type {
  ApiGetProductsResponse,
  Product,
  ApiCreatetProductResponse,
  UpdateProduct
} from "../../types/product";

export const api_getAllProducts = async (): Promise<ApiGetProductsResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/products`
    const response = await handleFetch(URL, {
      method: "GET",
    });
    return response;
  } catch (error) {
    console.error(`Ocurrió un error al obtener los productos - ${error}`);
    return null
  }
}

export const api_createProduct = async (body: UpdateProduct):
  Promise<ApiCreatetProductResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/products`;
    const response = await handleFetch(URL, {
      method: "POST",
      body: JSON.stringify(body)
    });
    return response;
  } catch (error) {
    console.error(`Ocurrió un error al guardar el producto : ${error}`);
    return null;
  }
}

export const api_updateProduct = async (body: UpdateProduct, id: Product['id']):
  Promise<ApiCreatetProductResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/products/${id}`;
    const response = await handleFetch(URL, {
      method: "PUT",
      body: JSON.stringify(body)
    });

    return response;
  } catch (error) {
    console.error(`Ocurrió un error al guardar el producto : ${error}`);
    return null;
  }
}

export const api_deleteProduct = async (id: Product['id']):
  Promise<ApiCreatetProductResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/products/${id}`;
    const response = await handleFetch(URL, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.error(`Ocurrió un error al eliminar el producto : ${error}`);
    return null;
  }
}