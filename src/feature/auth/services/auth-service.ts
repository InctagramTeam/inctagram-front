import axios, { AxiosResponse } from 'axios'
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from '../model/types/auth.types'
import { getContentType } from '../model/utils/get-content-type/get-content-type'
import { instance } from '@/shared/api/axios-instance'

// Todo --> AuthService
export const AuthService = {
  async signUp(userName: string, email: string, password: string) {
    //
    return await instance.post<null, AxiosResponse<SignUpResponse>, SignUpRequest>(
      'auth/registration',
      { userName, email, password }
    )
  },

  async singIn(email: string, password: string) {
    return await instance.post<null, AxiosResponse<SignInResponse>, SignInRequest>(`auth/login`, {
      email,
      password,
    })
  },
  logout() {},
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
}
