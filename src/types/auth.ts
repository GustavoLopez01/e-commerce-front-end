
export type AuthSuccessResponse = {
  token: string
}

export type AuthErrorResponse = {
  message: string
  success: boolean
}

export type ApiAuthResponse = AuthSuccessResponse & AuthErrorResponse;