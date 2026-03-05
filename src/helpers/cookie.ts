import Cookie from "js-cookie";

export const addCookie = (name: string, value: string) => {
  Cookie.set(name, value)
}

export const getCookie = (name: string) => {
  return Cookie.get(name);
}

export const removeCookie = (name: string) => {
  return Cookie.remove(name);
}