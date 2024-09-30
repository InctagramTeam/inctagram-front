import { IAuthResponse, IEmailPassword, ITokens } from '@/entities/user/model/types/user'
import { getContentType, SignUpRequest } from '@/feature'
import { axiosNotAuthorized, axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import saveToLocalStorage from '@/shared/lib/utils/locale-storage/save-local-storage'

/* Todo --> AuthApi */
export class AuthApi {
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')

    const response = await axiosNotAuthorized.post<null, AxiosResponse<IAuthResponse>, any>(
      `auth/update-token`,
      { refreshToken },
      { headers: getContentType() }
    )
    return response
  }

  async logout() {
    const response = await axiosWithAuth.post('auth/logout')
    if (response.status === 204) {
      localStorage?.removeItem('accessToken')
    }
  }

  async signUp(userName: string, email: string, password: string) {
    const response = await axiosNotAuthorized.post<
      null,
      AxiosResponse<IAuthResponse>,
      SignUpRequest
    >('auth/registration', { email, password, userName })
    return response
  }

  async singIn(email: string, password: string) {
    const response = await axiosNotAuthorized.post<null, AxiosResponse<ITokens>, IEmailPassword>(
      `auth/login`,
      {
        loginOrEmail: email,
        password,
      }
    )
    if (response?.data?.accessToken) {
      saveToLocalStorage('accessToken', response.data.accessToken)
    }
    return response
  }
}

const authApi = new AuthApi()

export default authApi
