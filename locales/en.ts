/* eslint-disable max-lines */
export const en = {
  button: {
    signUp: 'Sign Up',
    submit: 'Submit',
    cancel: 'Cancel',
    confirm: 'Confirm',
    reset: 'Reset',
  },
  validation: {
    maxPassword: 'Maximum 20 characters for password',
    minPassword: 'Minimum 6 characters for password',
    passwordsMustMatch: 'The passwords must match',
    requiredField: 'This field is required',
    invalidEmail: 'Invalid email address',
  },
  lang: {
    en: 'English',
    ru: 'Russian',
  },
  layout: {
    sidebar: {
      create: 'Create',
      favorites: 'Favorites',
      home: 'Home',
      logout: 'Log Out',
      messenger: 'Messenger',
      profile: 'My profile',
      search: 'Search',
      statistics: 'Statistics',
    },
  },
  main: {
    signUp: {
      agreement: {
        description: 'I agree to the <1>privacy</1> and <2>terms</2>',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
}

export type LocaleType = typeof en
