import { handleFetch } from "../fetch";
import { URL_BACKEND_APP } from "../../constant";
import type { LoginType } from "../../schema/login.schema";
import type { ApiAuthResponse } from "../../types/auth";

export const login = async (body: LoginType): Promise<ApiAuthResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/auth/login`;
    const response = await handleFetch(URL, {
      method: "POST",
      body: JSON.stringify(body)
    });

    return response;
  } catch (error) {
    console.error(`Ocurrió un error al inciar sesión - ${error}`);
    return null;
  }
}