import { IAuthResponse, IEmailPassword } from '@/entities/user/model/types/user-interface'
import { SignUpRequest, getContentType } from '@/feature'
import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { axiosNotAuthorized, axiosWithAuth } from '@/shared/api/interceptors'
import { removeTokensStorage, saveToStorage } from '@/feature/auth/model/utils/auth.helper'

/* Todo --> AuthApi */
export const AuthApi = {
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')

    const response = await axiosNotAuthorized.post<null, AxiosResponse<IAuthResponse>, any>(
      `auth/update-token`,
      { refreshToken },
      { headers: getContentType() }
    )

    if (response?.data?.accessToken) {
      saveToStorage(response?.data)
    }

    return response
  },

  async logout() {
    removeTokensStorage()
    localStorage?.removeItem('user')
  },
  async signUp(userName: string, email: string, password: string) {
    const response = await axiosNotAuthorized.post<
      null,
      AxiosResponse<IAuthResponse>,
      SignUpRequest
    >('auth/registration', { email, password, userName })

    if (response?.data?.accessToken) {
      saveToStorage(response?.data)
    }

    return response
  },

  async singIn(email: string, password: string) {
    const response = await axiosNotAuthorized.post<
      null,
      AxiosResponse<IAuthResponse>,
      IEmailPassword
    >(`auth/login`, {
      email,
      password,
    })

    if (response?.data?.accessToken) {
      saveToStorage(response?.data)
    }

    return response
  },
}
