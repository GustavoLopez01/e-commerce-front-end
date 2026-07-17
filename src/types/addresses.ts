export interface NewAddress {
  street: string;
  extNumber?: string; // Opcional si no siempre se usa
  postalCode: string;
  settlement: string;
  city: string;
  state: string;
  country: string;
  phoneNumber: string;
  observations?: string; // Opcional
}

export interface Address extends NewAddress {
  id: string | number;
}

// Las interfaces de respuesta deben ajustarse a lo que devuelve tu backend
export interface ApiGetAddressListResponse {
  // Aquí irían las propiedades que devuelve el listado del backend
}

export interface ApiSaveAddressResponse {
  // Aquí irían las propiedades que devuelve el guardado/update
}