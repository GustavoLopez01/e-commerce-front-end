import { handleFetch } from "../fetch";
import { URL_BACKEND_APP } from "../../constant";
import type {
  ApiGetProductsResponse,
  Product,
  ApiCreatetProductResponse,
  UpdateProduct
} from "../../types/product";
import { getCookie } from "../../helpers/cookie";

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

export const api_getImageByProductId = async (id: Product['id']):
  Promise<Blob | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/products/get-image-product/${id}`
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${getCookie('userToken')}`
      },
    });

    if (response.status === 404) {
      return null;
    } else {
      return await response.blob();
    }
  } catch (error) {
    console.error(`Ocurrió un error al obtener la imagen del producto : ${error}`);
    return null;
  }
}

export const api_createProduct = async (
  body: UpdateProduct,
  file: File | null
): Promise<ApiCreatetProductResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/products`;

    const formData = new FormData();
    formData.append("name", body.name);
    formData.append("description", body.description);
    formData.append("categoryId", body.categoryId.toString());
    formData.append("quantity", body.quantity.toString());
    formData.append("price", body.price.toString());
    formData.append("image", body.image);

    if (file) {
      formData.append("productImage", file);
    }

    const response = await fetch(URL, {
      method: "POST",
      body: formData,
      headers: {
        authorization: `Bearer ${getCookie('userToken')}`
      }
    });

    return await response.json();
  } catch (error) {
    console.error(`Ocurrió un error al guardar el producto : ${error}`);
    return null;
  }
}

export const api_updateProduct = async (
  body: UpdateProduct,
  id: Product['id'],
  file: File | null
): Promise<ApiCreatetProductResponse | null> => {
  try {
    console.log(body);

    const URL = `${URL_BACKEND_APP}/products/${id}`;

    const formData = new FormData();
    formData.append("name", body.name);
    formData.append("description", body.description);
    formData.append("categoryId", body.categoryId.toString());
    formData.append("quantity", body.quantity.toString());
    formData.append("price", body.price.toString());
    formData.append("image", body.image);

    if (file) {
      formData.append("productImage", file);
    }

    const response = await fetch(URL, {
      method: "PUT",
      body: formData,
      headers: {
        authorization: `Bearer ${getCookie('userToken')}`
      }
    });

    return await response.json();
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