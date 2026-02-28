import { URL_BACKEND_APP } from "../../constant";
import type { ApiGetProductCategoryResponse } from "../../types/productCategory";
import { handleFetch } from "../fetch";

export const api_getAllCategories = async (): Promise<ApiGetProductCategoryResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/categories`;
    const response = await handleFetch(URL, {
      method: "GET"
    });

    return response;
  } catch (error) {
    console.error(`Ocurrió un error al obtener las categorias - ${error}`);
    return null;
  }
}