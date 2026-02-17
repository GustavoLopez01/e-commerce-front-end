import Cookie from "js-cookie";

export const addCookie = (name: string, value: string) => {
  Cookie.set(name, value)
}