type Profile = {
  // поля с сервака (БД)
}

export type ProfileSchema = {
  data: Profile
  isLoading?: boolean
  error?: string
  readonly?: string
}
