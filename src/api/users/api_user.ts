import { handleFetch } from "../fetch";
import { URL_BACKEND_APP } from "../../constant";
import type { ApiGetUserResponse } from "../../types/user";

export const getUserByToken = async (): Promise<ApiGetUserResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/users/get-user`;
    const response = await handleFetch(URL, {
      method: "GET"
    });
    return response;
  } catch (error) {
    console.error(`Ocurrió un error al obtener la información del usuario : ${error}`);
    return null;
  }
}