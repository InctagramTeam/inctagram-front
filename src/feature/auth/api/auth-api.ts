import { getContentType, SignUpRequest } from '@/feature'
import { instance } from '@/shared/api/axios-instance'
import { AxiosResponse } from 'axios'
import { IAuthResponse, IEmailPassword } from '@/entities/user/model/types/user-interface'
import Cookies from 'js-cookie'
import { removeFromStorage, saveTokenStorage } from '@/shared/api/auth-token.service'

/* Todo --> AuthApi */
export const AuthApi = {
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')

    const response = await instance.post<null, AxiosResponse<IAuthResponse>, any>(
      `auth/update-token`,
      { refreshToken },
      { headers: getContentType() }
    )

    if (response.data.accessToken) {
      saveTokenStorage(response?.data as any)
    }

    return response
  },

  async signUp(userName: string, email: string, password: string) {
    //
    return await instance.post<null, AxiosResponse<IAuthResponse>, SignUpRequest>(
      'auth/registration',
      { email, password, userName }
    )
  },
  async singIn(email: string, password: string) {
    const response = await instance.post<null, AxiosResponse<IAuthResponse>, IEmailPassword>(
      `auth/login`,
      {
        email,
        password,
      }
    )

    if (response.data.accessToken) {
      saveTokenStorage(response?.data as any)
    }

    return response
  },
  async logout() {
    removeFromStorage()
    localStorage.removeItem('user')
  },
}
