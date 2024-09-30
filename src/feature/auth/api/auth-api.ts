import { IAuthResponse, IEmailPassword, ITokens } from '@/entities/user/model/types/user'
import {
  NewPasswordRequestArgs,
  RecoveryPasswordArgs,
  SignUpRequest,
  getContentType,
} from '@/feature'
import { removeTokensStorage } from '@/feature/auth/model/utils/auth.helper'
import { axiosNotAuthorized } from '@/shared/api/interceptors'
import saveToLocalStorage from '@/shared/lib/utils/locale-storage/save-local-storage'
import { getContentType, SignUpRequest } from '@/feature'
import { axiosNotAuthorized, axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import saveToLocalStorage from '@/shared/lib/utils/locale-storage/save-local-storage'

/* Todo --> AuthApi */
export class AuthApi {
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')

    return await axiosNotAuthorized.post<null, AxiosResponse<IAuthResponse>, any>(
      `auth/update-token`,
      { refreshToken },
      { headers: getContentType() }
    )
  }

  async logout() {
    const response = await axiosWithAuth.post('auth/logout')
    if (response.status === 204) {
      localStorage?.removeItem('accessToken')
    }
  }

  async passwordRecovery(email: string, recaptchaValue: string) {
    return await axiosNotAuthorized.post<null, AxiosResponse<any>, RecoveryPasswordArgs>(
      `auth/password-recovery`,
      {
        email,
        recaptchaValue,
      }
    )
  }

  async signUp(userName: string, email: string, password: string) {
    return await axiosNotAuthorized.post<null, AxiosResponse<IAuthResponse>, SignUpRequest>(
      'auth/registration',
      { email, password, userName }
    )
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
