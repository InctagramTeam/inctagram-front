export type createProfileRequest = {
  aboutMe: string
  city: string
  dateOfBirth: string
  firstName: string
  lastName: string
  userName: string
}

export type Profile = {
  aboutMe: string
  avatarId: string
  city: string
  country: string
  dateOfBirth: string
  firstName: string
  lastName: string
}

export type User = {
  createdAt: string
  email: string
  emailIsConfirm: boolean
  followersCount: number
  followingCount: number
  id: number
  profile: Profile
  publicationsCount: number
  updatedAt: string
  userName: string
}
