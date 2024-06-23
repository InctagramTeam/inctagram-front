export interface IUser {
  id?: string
  isAdmin?: boolean
  email?: string
  password: string
  userName: string
  isLoading?: string
  error?: string
}

export interface ITokens {
  accessToken: string
  refreshToken?: string
}

// отправляем в параметрах на сервер
export interface IEmailPassword {
  email: string
  password: string
  rememberMe?: boolean
}

// получаем данные с сервера
export interface IAuthResponse extends ITokens {
  user: {
    isAdmin?: boolean
  } & IUser
}
