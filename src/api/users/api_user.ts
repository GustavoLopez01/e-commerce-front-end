import { handleFetch } from "../fetch";
import type {
  ApiGetUserListResponse,
  ApiGetUserResponse,
  User,
  UserBody
} from "../../types/user";
import { URL_BACKEND_APP } from "../../constant";

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

export const getAllUsers = async (): Promise<ApiGetUserListResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/users`;
    const response = await handleFetch(URL, {
      method: "GET",
    });
    return response;
  } catch (error) {
    console.error(`Ocurrió un error al obtener la lista de los usuarios : ${error}`);
    return null;
  }
}

export const createUser = async (body: User): Promise<ApiGetUserResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/users`;
    const response = await handleFetch(URL, {
      method: "POST",
      body: JSON.stringify(body)
    });
    return response;
  } catch (error) {
    console.error(`Ocurrió un error al crear al usuario : ${error}`);
    return null;
  }
}

export const updateUser = async (id: UserBody['id'], body: User): Promise<ApiGetUserResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/users/${id}`;
    const response = await handleFetch(URL, {
      method: "PUT",
      body: JSON.stringify(body)
    });
    return response;
  } catch (error) {
    console.error(`Ocurrió un error al actualizar al usuario : ${error}`);
    return null;
  }
}