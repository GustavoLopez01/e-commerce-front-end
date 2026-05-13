import { handleFetch } from "../fetch";
import { URL_BACKEND_APP } from "../../constant";
import type {
  ApiGetProductCategoryResponse,
  ApiSaveCategory,
  ProductCategory,
  SaveProductCategory
} from "../../types/productCategory";
import type { ApiResponse } from "../../types/generalApiResponse";

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

export const api_saveCategory = async (body: SaveProductCategory): Promise<ApiSaveCategory | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/categories`;
    return handleFetch(URL, {
      method: "POST",
      body: JSON.stringify(body)
    });
  } catch (error) {
    console.error(`Ocurrío un error al guardar la cartegoría - ${error}`);
    return null;
  }
}

export const api_updateCategory = async (body: SaveProductCategory, id: ProductCategory['id']): Promise<ApiSaveCategory | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/categories/${id}`;
    return handleFetch(URL, {
      method: "PUT",
      body: JSON.stringify(body)
    });
  } catch (error) {
    console.error(`Ocurrío un error al actualizar la cartegoría - ${error}`);
    return null;
  }
}

export const api_deleteCategory = async (id: ProductCategory['id']): Promise<ApiResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/categories/${id}`;
    return handleFetch(URL, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(`Ocurrió un error al eliminar la categoría - ${error}`);
    return null;
  }
}