import { IUser } from '../model/types/user-interface'

export interface IProfileResponse {
  statistics: {
    label: string
    value: string
  }[]
  user: IUser
}

class UserService {
  // private BASE_URL = '/user/profile'

  async getProfile() {
    // const response = await axiosWithAuth.get<IProfileResponse>(this.BASE_URL)
    // return response.data
  }

  async update(data: any) {
    // const response = await axiosWithAuth.put(this.BASE_URL, data)
    // return response.data
  }
}

export const userService = new UserService()
