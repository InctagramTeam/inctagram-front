export const AuthRoutes = {
  CONFIRM_EMAIL: '/auth/confirm-email',
  CONGRATULATIONS: '/congratulations',
  CREATE_NEW_PASSWORD: '/auth/create-new-password',
  FORGOT_PASSWORD: '/auth/forgot-password',
  PASSWORD_RECOVERY: '/auth/password-recovery',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  LINK_EXPIRED: '/link-expired',
  TERMS: '/auth/terms-of-service',
  PRIVACY: '/auth/privacy-policy',
} as const

export const GeneralRoutes = {
  REDIRECT: '/general/redirect',
} as const

export const AppRoutes = {
  CREATE_POST: '/create',
  FAVORITES: '/favorites',
  HOME: '/home',
  MAIN: '/',
  MESSENGER: '/messenger',
  PROFILE: '/my-profile/',
  PROFILE_SETTINGS: '/settings',
  PUBLIC_PROFILE: '/public-profile',
  SEARCH: '/search',
  STATISTICS: '/statistics',
} as const
