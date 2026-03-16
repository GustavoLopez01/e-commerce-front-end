import { URL_BACKEND_APP } from "../../constant";
import type { LoginType } from "../../schema/login.schema";
import type { ApiAuthResponse } from "../../types/auth";

export const login = async (body: LoginType): Promise<ApiAuthResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/auth/login`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    return await response.json();
  } catch (error) {
    console.error(`Ocurrió un error al inciar sesión - ${error}`);
    return null;
  }
}