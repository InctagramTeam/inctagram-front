import { ProfileInfoFormValues } from '@/feature/profile'
import { createProfileRequest } from '@/feature/profile/model/types'
import { EMPTY_STRING } from '@/shared'
import { axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'
import { format } from 'date-fns'

export class ProfileApi {
  async createProfile({
    firstName,
    country = EMPTY_STRING,
    city = EMPTY_STRING,
    userName,
    lastName,
    dateOfBirth,
    aboutMe = EMPTY_STRING,
  }: ProfileInfoFormValues) {
    await axiosWithAuth.post<null, AxiosResponse<any>, createProfileRequest>('profile/settings', {
      firstName,
      userName,
      lastName,
      aboutMe,
      city,
      dateOfBirth: format(dateOfBirth, 'dd-MM-yy'),
    })
  }
}

const profileApi = new ProfileApi()

export default profileApi
