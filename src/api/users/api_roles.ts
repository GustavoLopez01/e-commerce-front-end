import { handleFetch } from "../fetch";
import { URL_BACKEND_APP } from "../../constant";
import type { ApiGetUserRolListResponse } from "../../types/rol";

export const getAllRoles = async (): Promise<ApiGetUserRolListResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/roles`;
    const response = await handleFetch(URL, {
      method: "GET"
    });
    return response;
  } catch (error) {
    console.error(`Ocurrió un error al obtener la lista de roles : ${error}`);
    return null;
  }
}
