import { IUser } from 'src/entities/user/model/types/user'
import { axiosWithAuth } from '@/shared/api/interceptors'

export interface IProfileResponse {
  statistics: {
    label: string
    value: string
  }[]
  user: IUser
}

export class UserService {
  private BASE_URL = '/profile'

  async getProfile() {
    // const response = await axiosWithAuth.get<IProfileResponse>(this.BASE_URL)
    // return response.data
  }

  async update(data: any) {
    // const response = await axiosWithAuth.put(this.BASE_URL, data)
    // return response.data
  }

  async updatePhoto(formData: FormData) {
    const response = await axiosWithAuth.put(this.BASE_URL + '/avatar', formData)
    console.log(response)
    return response.data
  }
}

export const userService = new UserService()
