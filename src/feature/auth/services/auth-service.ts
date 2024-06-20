import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  getContentType,
} from '@/feature'
import { instance } from '@/shared/api/axios-instance'
import { AxiosResponse } from 'axios'

// Todo --> AuthService
export const AuthService = {
  async getNewTokens() {
    // const refreshToken = получаем из "куки"
    return await instance.post<null, any, any>(
      `auth/update-token`,
      {
        // refreshToken,
      },
      {
        headers: getContentType(),
      }
    )
  },

  logout() {},
  async signUp(userName: string, email: string, password: string) {
    //
    return await instance.post<null, AxiosResponse<SignUpResponse>, SignUpRequest>(
      'auth/registration',
      { email, password, userName }
    )
  },
  async singIn(email: string, password: string) {
    return await instance.post<null, AxiosResponse<SignInResponse>, SignInRequest>(`auth/login`, {
      email,
      password,
    })
  },
}
