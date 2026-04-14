import type { ApiResponse } from "./generalApiResponse";

export type UserRole = {
  id: number
  name: string
  description: string
}

export type NewUserRole = Omit<UserRole, 'id'>;

export type ApiGetUserRolListResponse = ApiResponse & {
  roles: UserRole[]
}

export type ApiSaveRoleResponse = ApiResponse & {
  role: UserRole
}