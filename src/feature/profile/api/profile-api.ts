import { Profile } from '@/entities/profile'
import { axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'

export class ProfileApi {
  async createNewProfile(profile: Profile) {
    return await axiosWithAuth.post<null, AxiosResponse<any>, Profile>(`profile/settings`, profile)
  }
}

const profileApi = new ProfileApi()

export default profileApi
