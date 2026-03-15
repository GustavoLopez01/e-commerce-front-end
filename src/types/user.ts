import type { ApiResponse } from "./generalApiResponse";
import type { UserRole } from "./rol";

export type User = {
  name: string
  email: string
  phoneNumber: string
  lastName: string
  password: string
  isEnabled: boolean
  rolId: UserRole['id']
}

export type UserBody = User & {
  id: number
}

export type ApiGetUserResponse = ApiResponse & {
  user: User
}

export type ApiGetUserListResponse = ApiResponse & {
  users: UserBody[]
}
