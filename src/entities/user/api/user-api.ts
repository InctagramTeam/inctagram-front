import { GetAvatar, ProfileMe } from '@/entities/user/model/types/user.types'
import { axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'

export class UserService {
  async deleteAvatar() {
    return await axiosWithAuth.delete<null>(`/profile/avatar`)
  }

  async getProfile() {
    return await axiosWithAuth.get<ProfileMe>(`/profile/me`).then(res => res.data)
  }

  async getAvatar(id: number) {
    return await axiosWithAuth.get<GetAvatar>(`/profile/avatar/${id}`).then(res => res.data)
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
