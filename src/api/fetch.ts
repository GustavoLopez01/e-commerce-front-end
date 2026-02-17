

export const handleFetch = async (url: string, body: any): Promise<any | null> => {
  try {
    const response = await fetch(url, {
      ...body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.error(`Ocurrió un error al obtener la respuesta de la solicitud - ${error}`);
    return null;
  }
}