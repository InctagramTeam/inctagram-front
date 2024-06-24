export const AuthRoutes = {
  CONFIRM_EMAIL: '/auth/confirm-email',
  CREATE_NEW_PASSWORD: '/auth/create-new-password',
  FORGOT_PASSWORD: '/auth/forgot-password',
  PASSWORD_RECOVERY: '/auth/password-recovery',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
} as const

export const GeneralRoutes = {
  PRIVACY: '/general/privacy',
  REDIRECT: '/general/redirect',
  TERMS: '/general/terms',
} as const

export const AppRoutes = {
  CREATE_POST: '/create',
  FAVORITES: '/favorites',
  HOME: '/home',
  MAIN: '/',
  MESSENGER: '/messenger',
  PROFILE: '/my-profile/:id',
  PROFILE_SETTINGS: '/settings',
  PUBLIC_PROFILE: '/public-profile',
  SEARCH: '/search',
  STATISTICS: '/statistics',
} as const
