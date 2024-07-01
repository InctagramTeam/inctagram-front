export interface IUser {
  avatar?: string
  email?: string
  error?: string
  id?: string
  isAdmin?: boolean
  isLoading?: string
  password: string
  roles?: 'ADMIN' | 'MANAGER' | 'USER'
  userName: string
  isAuth: boolean
}

export interface IUserSchema {
  _inited: boolean
  authData?: IUser
}

export interface ITokens {
  accessToken: string
  refreshToken?: string
}
// todo:
// отправляем в параметрах на сервер?
export interface IEmailPassword {
  email: string
  password: string
  rememberMe?: boolean
}

// получаем данные с сервера?
export interface IAuthResponse extends ITokens {
  user: {
    isAdmin?: boolean
  } & IUser
}
