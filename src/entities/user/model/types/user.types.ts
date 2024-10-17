export interface IUser {
  avatar?: string
  email?: string
  error?: string
  id?: string
  isAdmin?: boolean
  isAuth: boolean
  isLoading?: string
  password: string
  roles?: 'ADMIN' | 'MANAGER' | 'USER'
  userName: string
}

export type UserProfile = {
  aboutMe: string
  avatarId: string
  city: string
  country: string
  dateOfBirth: string
  firstName: string
  lastName: string
}

export type ProfileMe = {
  id: number
  userName: string
  email: string
  emailIsConfirm: boolean
  createdAt: string
  updatedAt: string
  profile: ProfileMeProfile
}
export type ProfileMeProfile = {
  firstName: string
  lastName: string
  dateOfBirth: string
  country: string
  city: string
  aboutMe: string
  avatarId: string
}

export type GetAvatar = {
  url: string
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
  loginOrEmail: string
  password: string
  rememberMe?: boolean
}

// данные с сервера
export interface IAuthResponse {
  confirmed: boolean
  createdAt: string
  email: string
  id: number
  name: null
  passwordHash: string
  passwordSalt: string
  updatedAt: string
  userName: string
}
