import { getContentType, SignUpRequest } from '@/feature'
import { instance } from '@/shared/api/axios-instance'
import { AxiosResponse } from 'axios'
import { saveToStorage } from '@/shared/lib/utils/locale-storage/save-to-local-storage/save-to-storage'
import { IAuthResponse, IEmailPassword } from '@/entities/user/model/types/user-interface'
import { removeTokensStorage } from '@/shared/lib/utils/locale-storage/remove-tokens-storage/remove-tokens-storage'
import Cookies from 'js-cookie'

/* Todo --> AuthService */
export const AuthService = {
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')

    const response = await instance.post<null, AxiosResponse<IAuthResponse>, any>(
      `auth/update-token`,
      { refreshToken },
      { headers: getContentType() }
    )

    if (response.data.accessToken) {
      saveToStorage(response?.data)
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
      saveToStorage(response?.data)
    }

    return response
  },
  async logout() {
    removeTokensStorage()
    localStorage.removeItem('user')
  },
}
