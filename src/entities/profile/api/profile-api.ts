import {
  Profile,
  ProfileSchema,
  ProfileSettings,
  ProfileSettingsSchema,
  updateProfileRequest,
} from '@/entities/profile'
import { ProfileDto } from '@/entities/profile/api/dto'
import { EMPTY_STRING } from '@/shared'
import { axiosNotAuthorized, axiosWithAuth } from '@/shared/api/interceptors'
import { mapDtoToModel } from '@/shared/lib/utils/mapDtoToModel'
import { AxiosResponse } from 'axios'

export class ProfileApi {
  async getProfile(): Promise<Profile | null> {
    try {
      return await axiosWithAuth
        .get<null, AxiosResponse<ProfileDto>>(`profile`)
        .then(res => mapDtoToModel<Profile, typeof res.data>(res.data))
        .then(ProfileSchema.parse)
    } catch (error) {
      return null
    }
  }

  async getProfileById(id: string): Promise<Profile | null> {
    try {
      return await axiosNotAuthorized
        .get<null, AxiosResponse<ProfileDto>, string>(`profile/${id}`)
        .then(res => mapDtoToModel<Profile, typeof res.data>(res.data))
        .then(ProfileSchema.parse)
    } catch (error) {
      return null
    }
  }

  //TODO: переделать на запрос с куками и обсудить с командой accessToken в куки
  // async getProfileSettings(): Promise<ProfileSettings | null> {
  //   try {
  //     return await axiosWithAuth
  //       .get<null, AxiosResponse<ProfileDto>>(`profile`)
  //       .then(res => mapDtoToModel<ProfileSettings, typeof res.data>(res.data))
  //       .then(ProfileSettingsSchema.parse)
  //   } catch (error) {
  //     return null
  //   }
  // }

  async getProfileSettings(id: string): Promise<ProfileSettings | null> {
    try {
      return await axiosNotAuthorized
        .get<null, AxiosResponse<ProfileDto>>(`profile/${id}`)
        .then(res => mapDtoToModel<ProfileSettings, typeof res.data>(res.data))
        .then(ProfileSettingsSchema.parse)
    } catch (error) {
      return null
    }
  }

  async updateProfile({
    firstName,
    city = EMPTY_STRING,
    userName,
    lastName,
    dateOfBirth,
    country = EMPTY_STRING,
    aboutMe = EMPTY_STRING,
  }: updateProfileRequest) {
    return await axiosWithAuth
      .put<null, AxiosResponse<any>, updateProfileRequest>('profile/settings', {
        firstName,
        userName,
        country,
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
