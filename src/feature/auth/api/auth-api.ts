import { IAuthResponse, IEmailPassword, ITokens } from '@/entities/user/model/types/user'
import {
  NewPasswordArgs,
  NewPasswordRequestArgs,
  RecoveryPasswordArgs,
  SignUpRequest,
  getContentType,
} from '@/feature'
import { removeTokensStorage } from '@/feature/auth/model/utils/auth.helper'
import { axiosNotAuthorized } from '@/shared/api/interceptors'
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
    removeTokensStorage()
    localStorage?.removeItem('user')
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

  async passwordRecovery(email: string, recaptchaValue: string) {
    const response = await axiosNotAuthorized.post<null, AxiosResponse<any>, RecoveryPasswordArgs>(
      `auth/password-recovery`,
      {
        email,
        recaptchaValue,
      }
    )

    return response
  }

  async createNewPassword(code: string, newPassword: string) {
    const response = await axiosNotAuthorized.post<
      null,
      AxiosResponse<any>,
      NewPasswordRequestArgs
    >(`auth/new-password?code=${code}`, {
      newPassword,
    })

    return response
  }
}

const authApi = new AuthApi()

export default authApi
