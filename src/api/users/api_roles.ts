import { handleFetch } from "../fetch";
import { URL_BACKEND_APP } from "../../constant";
import type {
  ApiGetUserRolListResponse,
  ApiSaveRoleResponse,
  NewUserRole,
  UserRole
} from "../../types/rol";
import type { ApiResponse } from "../../types/generalApiResponse";

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

export const api_saveRole = async (body: NewUserRole): Promise<ApiSaveRoleResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/roles`;
    const response = await handleFetch(URL, {
      method: "POST",
      body: JSON.stringify(body)
    });

    return response;
  } catch (error) {
    console.error(`Ocurrió un error al guardar el rol : ${error}`);
    return null;
  }
}

export const api_updateRole = async (body: NewUserRole, id: UserRole['id']): Promise<ApiSaveRoleResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/roles/${id}`;
    const response = await handleFetch(URL, {
      method: "PUT",
      body: JSON.stringify(body)
    });

    return response;
  } catch (error) {
    console.error(`Ocurrió un error al actualizar el rol : ${error}`);
    return null;
  }
}

export const api_deleteRole = async (id: UserRole['id']): Promise<ApiResponse | null> => {
  try {
    const URL = `${URL_BACKEND_APP}/roles/${id}`;
    const response = await handleFetch(URL, {
      method: "DELETE"
    });

    return response;
  } catch (error) {
    console.error(`Ocurrió un error al eliminar el rol : ${error}`);
    return null;
  }
}


