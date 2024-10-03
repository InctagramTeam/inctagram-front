import { axiosWithAuth } from '@/shared/api/interceptors'
import { GetAvatar } from '@/entities/user/model/types/user.types'
import { AxiosResponse } from 'axios'

export class UserService {
  async getAvatar(id: number) {
    return await axiosWithAuth.get<GetAvatar>(`/profile/avatar/${id}`).then(res => res.data)
  }

  async deleteAvatar() {
    return await axiosWithAuth.delete<null>(`/profile/avatar`)
  }

  async updateAvatar(formData: FormData) {
    return await axiosWithAuth
      .put<null, AxiosResponse<null>, FormData>('/profile/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
  }
}

export const userService = new UserService()
