import { ITokens } from '@/entities/user/model/types/user-interface'
import Cookies from 'js-cookie'

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken)
  Cookies.set('refreshToken', data.refreshToken)
}
