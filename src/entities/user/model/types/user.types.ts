import { z } from 'zod'

//по мере надобности добавляем необходимые нам поля на фронте
export const UserSchema = z.object({
  id: z.number(),
  userName: z.string(),
  email: z.string(),
  isBlocked: z.boolean(),
  isAdmin: z.boolean(),
})

export type User = z.infer<typeof UserSchema>

// export interface IUser {
//   avatar?: string
//   email?: string
//   error?: string
//   id?: string
//   isAdmin?: boolean
//   isAuth: boolean
//   isLoading?: string
//   password: string
//   roles?: 'ADMIN' | 'MANAGER' | 'USER'
//   userName: string
// }

export type GetAvatar = {
  url: string
}

export interface ITokens {
  accessToken: string
  refreshToken?: string
}

// отправляем в параметрах на сервер?
export interface IEmailPassword {
  loginOrEmail: string
  password: string
  rememberMe?: boolean
}
export interface ICodeFromGitHub {
  code: string
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
