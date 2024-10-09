export type Profile = {
  aboutMe?: string | undefined
  city?: string | undefined
  dateOfBirth: string
  firstName: string
  lastName: string
  userName: string
}

export type ProfileSchema = {
  data: Profile
  error?: string
  isLoading?: boolean
  readonly?: string
}
