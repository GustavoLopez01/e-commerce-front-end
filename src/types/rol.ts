import type { ApiResponse } from "./generalApiResponse";

export type UserRole = {
  id: number
  name: string
  description: string
}

export type ApiGetUserRolListResponse = ApiResponse & {
  roles: UserRole[]
}