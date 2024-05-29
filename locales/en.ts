/**
 * label: названия для лейблов, например "Confirm password", "Email", "New Password", "Password", и т.д.
 * button: названия для кнопок и ссылок
 * validation: сообщения для валидации, например "Maximum 20 characters for password", "Minimum 6 characters for password", "The passwords must match", и т.д.
 * pages: названия для страниц и их элементов, например "Congratulations!", "Create new password", "Email verification link expired", и т.д.
 * если на странице есть модалка то объект "modal" так же вкладывается внутрь объекта с названием страницы
 */

export type LocaleType = typeof en

export const en = {
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
  pages: {
    signUp: {
      agreement: {
        description: `I agree to the <1>privacy</1> and <2>terms</2>`,
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      metaDescription:
        'Create an account to start using our services and receive exclusive benefits.',
      metaTitle: 'Sign Up',
      modalBtn: 'OK',
      modalText: 'We have sent a link to confirm your email to ',
      question: 'Do you have an account?',
      title: 'Sign Up',
    },
  },
  tabs: {
    devices: 'Devices',
    general: 'General information',
    management: 'Account management',
    payments: 'My payments',
  },
}
