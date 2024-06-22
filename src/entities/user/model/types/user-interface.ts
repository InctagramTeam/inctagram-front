export interface IUser {
  email: string
  id?: string
  isAdmin?: boolean
  password: string
  userName: string
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
