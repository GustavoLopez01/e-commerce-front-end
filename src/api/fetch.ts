import { getCookie } from "../helpers/cookie";

export const handleFetch = async (url: string, body: any): Promise<any | null> => {
  try {
    const response = await fetch(url, {
      ...body,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${getCookie('userToken')}`
      },
    });

    const finalResponse = await response.json();

    return finalResponse;
  } catch (error) {
    console.error(`Ocurrió un error al obtener la respuesta de la solicitud - ${error}`);
    return null;
  }
}