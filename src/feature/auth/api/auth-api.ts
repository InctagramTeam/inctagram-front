import axios from 'axios'
import { SignUpResponse } from '@/feature/auth/model/types/auth.types'

// Todo --> AuthService
export const AuthService = {
  async signUp(userName: string, email: string, password: string) {
    return await axios.post<SignUpResponse>(
      'https://app.incubatogram.org/api/v1/auth/registration',
      { userName, email, password }
    )
  },
}
