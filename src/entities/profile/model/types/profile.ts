export type Profile = {
  // поля с сервака (БД)
}

export type ProfileSchema = {
  data: Profile
  error?: string
  isLoading?: boolean
  readonly?: string
}
