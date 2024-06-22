import { IAuthResponse } from '@/entities/user/model/types/user-interface'
import { saveTokensStorage } from '../save-tokens-storage/save-tokens-storage'

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}
