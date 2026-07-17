import { handleFetch } from "../fetch";
import { URL_BACKEND_APP } from "@/constant";
import type {
  ApiGetAddressListResponse,
  ApiSaveAddressResponse,
  NewAddress,
  Address
} from "../../types/addresses";
import type { ApiResponse } from "../../types/generalApiResponse";

export const getAllAddresses = async (): Promise<ApiGetAddressListResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/addresses`;
    const response = await handleFetch(URL, {
      method: "GET"
    });
    return response;
  } catch (error) {
    console.error(`Ocurrió un error al obtener la lista de direcciones : ${error}`);
    return null;
  }
}

export const api_saveAddress = async (body: NewAddress): Promise<ApiSaveAddressResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/addresses`;
    const response = await handleFetch(URL, {
      method: "POST",
      body: JSON.stringify(body)
    });

    return response;
  } catch (error) {
    console.error(`Ocurrió un error al guardar la dirección : ${error}`);
    return null;
  }
}

export const api_updateAddress = async (body: NewAddress, id: Address['id']): Promise<ApiSaveAddressResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/addresses/${id}`;
    const response = await handleFetch(URL, {
      method: "PUT",
      body: JSON.stringify(body)
    });

    return response;
  } catch (error) {
    console.error(`Ocurrió un error al actualizar la dirección : ${error}`);
    return null;
  }
}

export const api_deleteAddress = async (id: Address['id']): Promise<ApiResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/addresses/${id}`;
    const response = await handleFetch(URL, {
      method: "DELETE"
    });

    return response;
  } catch (error) {
    console.error(`Ocurrió un error al eliminar la dirección : ${error}`);
    return null;
  }
}