import type { ApiResponse } from "./generalApiResponse"

export type User = {
  name: string
  email: string
  phoneNumber: number
  lastName: string
  password: string
  isEnabled: boolean
  rolId: number
}

export type ApiGetUserResponse = ApiResponse & {
  user: User
}


