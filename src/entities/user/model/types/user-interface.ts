export interface IUserState {
  id?: string
  email: string
  isAdmin: boolean
}

export interface IUserInitialState {
  user: IUserState | null
  isLoading?: boolean
}

export interface IUser {
  id?: string
  email: string
  password: string
  isAdmin?: boolean
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

// отправляем в параметрах на сервер
export interface IEmailPassword {
  email: string
  password: string
  rememberMe?: boolean
}

// получаем данные с сервера
export interface IAuthResponse extends ITokens {
  user: IUser & {
    isAdmin?: boolean
  }
}
