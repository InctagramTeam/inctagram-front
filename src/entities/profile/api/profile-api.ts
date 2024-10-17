import { User, createProfileRequest } from '@/entities/profile'
import { EMPTY_STRING } from '@/shared'
import { axiosNotAuthorized, axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'
import { format } from 'date-fns'

export class ProfileApi {
  async createProfile({
    firstName,
    city = EMPTY_STRING,
    userName,
    lastName,
    dateOfBirth,
    aboutMe = EMPTY_STRING,
  }: createProfileRequest) {
    return await axiosWithAuth
      .post<null, AxiosResponse<User>, createProfileRequest>('profile/settings', {
        firstName,
        userName,
        lastName,
        aboutMe,
        city,
        dateOfBirth,
      })
      .then(res => res.data)
  }
  async getMyProfile() {
    return await axiosWithAuth.get<null, AxiosResponse<User>>('profile/me').then(res => res.data)
  }
  async getProfile(id: string) {
    return await axiosNotAuthorized
      .get<null, AxiosResponse<User>, string>(`profile/${id}`)
      .then(res => res.data)
  }
  async updateProfile({
    firstName,
    city = EMPTY_STRING,
    userName,
    lastName,
    dateOfBirth,
    aboutMe = EMPTY_STRING,
  }: createProfileRequest) {
    return await axiosWithAuth
      .put<null, AxiosResponse<any>, createProfileRequest>('profile/settings', {
        firstName,
        userName,
        lastName,
        aboutMe,
        city,
        dateOfBirth,
      })
      .then(res => res.data)
  }
}

const profileApi = new ProfileApi()

export default profileApi
