import Cookies from 'js-cookie'

export const Tokens = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
} as const

export const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.ACCESS_TOKEN)
  return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(Tokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1,
  })
}

export const removeFromStorage = () => {
  Cookies.remove(Tokens.ACCESS_TOKEN)
}
