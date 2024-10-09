/**
 * label: названия для лейблов, например "Confirm password", "Email", "New Password", "Password", и т.д.
 * button: названия для кнопок и ссылок
 * validation: сообщения для валидации, например "Maximum 20 characters for password", "Minimum 6 characters for password", "The passwords must match", и т.д.
 * pages: названия для страниц и их элементов, например "Congratulations!", "Create new password", "Email verification link expired", и т.д.
 * если на странице есть модалка то объект "modal" так же вкладывается внутрь объекта с названием страницы
 */

export type LocaleType = typeof en

export const en = {
  button: {
    answer: 'Answer',
    back: 'Back',
    addProfilePhoto: 'Add a Profile Photo',
    backToHome: 'Back to home-nav-links',
    backToPayment: 'Back to payment',
    backToSignIn: 'Back to Sign In',
    backToSignUp: 'Back to Sign Up',
    createNewPassword: 'Create new password',
    discard: 'Discard',
    done: 'Done',
    logOut: 'Log out',
    next: 'Next',
    no: 'No',
    ok: 'OK',
    publish: 'Publish',
    resendVerificationLink: 'Resend verification link',
    save: 'Save changes',
    saveDraft: 'Save draft',
    selectFromComputer: 'Select from Computer',
    sendLink: 'Send Link',
    sendLinkAgain: 'Send Link Again',
    showLess: 'Show less',
    showMore: 'Show more',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    simple_save: 'Save',
    statistics: 'Statistics',
    yes: 'Yes',
    clearField: 'clear field',
    closeModal: 'close modal',
    close: 'close',
    password: {
      hide: 'hide password',
      show: 'show password',
    },
    notifications: {
      hide: 'hide notifications',
      show: 'show notifications',
    },
  },
  links: {
    create: 'Create',
    favorites: 'Favorites',
    home: 'Home',
    messenger: 'Messenger',
    profile: 'My profile',
    search: 'Search',
    statistics: 'Statistics',
    profileSettings: 'Profile settings',
  },
  label: {
    userName: 'Username',
    firstName: 'First Name',
    dateOfBirth: 'Date of birth',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    newPassword: 'New password',
    error: 'Error',
    aboutMe: 'About Me',
    confirmPassword: 'Confirm password',
  },
  placeholders: {
    email: 'email@inctagram.com',
    firstName: 'Enter your first name',
    lastName: 'Enter your last name',
    password: 'Enter your password',
    aboutMe: 'About Me',
    dateOfBirth: 'Pick a date',
    passwordConfirm: 'Enter your password again',
    username: 'Enter your username',
  },
  lang: {
    en: 'English',
    ru: 'Russian',
  },
  layout: {
    alert: {
      close: 'Close alert',
      error: 'Error!',
    },
    notificationsDropdown: {
      title: 'Notifications!',
      alternativeText: 'No notifications yet',
    },
    logo: 'Logo Inctagram',
  },
  pages: {
    signUp: {
      agreement: {
        description: `I agree to the <1>privacy</1> and <2>terms</2>`,
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      metaDescription: 'Create an account to start using our api and receive exclusive benefits.',
      metaTitle: 'Sign Up | Instagram',
      modalBtn: 'OK',
      modalTitle: 'Email sent',
      modalText: 'We have sent a link to confirm your email to ',
      question: 'Do you have an account?',
      github: 'Register with github',
      google: 'Register with google',
      title: 'Sign Up',
    },
    signIn: {
      metaTitle: 'Sign In | Instagram',
      metaDescription:
        'Log in to your account to start using our api and receive exclusive benefits.',
      title: 'Sign in',
      link: 'Forgot Password',
      question: 'Don’t have an account?',
      github: 'Login with github',
      google: 'Login with google',
    },
    profile: {
      addProfilePhoto: 'Add a Profile Photo',
      deletePhoto: 'Delete Photo',
      deleteProfilePhoto: 'Are you sure you want to delete the photo?',
      followers: 'Followers',
      following: 'Following',
      logOutConfirmation: 'Are you really want to log out of your account',
      metaDescription:
        'Discover detailed information about users, their interests, skills and experience.',
      metaTitle: 'Profile',
      publications: 'Publications',
    },
    congratulations: {
      metaDescription: 'Congratulations! Your email has been confirmed',
      metaTitle: 'Congratulations | Instagram',
      title: 'Congratulations!',
      textEmail: 'Your email has been confirmed',
      textPassword: 'Your password has been successfully changed.',
    },
    verifyEmail: {
      metaDescription:
        'The verification link has expired. Please verify your email again to start using our api and receive exclusive benefits.',
      metaTitle: 'Email verification | Instagram',
      title: 'Email verification link expired',
      text: 'Looks like the verification link has expired. Not to worry, we can send the link again',
    },
    createPassword: {
      metaTitle: 'Create new password | Instagram',
      metaDescription:
        'Create a new strong password for your account. Simple process, increased security and protection of your personal data.',
      title: 'Create New Password',
      hint: 'Your password must be between 6 and 20 characters',
    },
    forgotPassword: {
      metaTitle: 'Forgot password | Instagram',
      metaDescription:
        'Having trouble logging in? Recover access to your account using our simple and secure password reset process. Get started now and get back to your important business without delays',
      title: 'Forgot Password',
      hint: 'Enter your email address and we will send you further instructions ',
      sent: 'The link has been sent by email. If you don’t receive an email send link again',
    },
    privacyPolice: {
      metaDescription:
        'Please read our Privacy Policy to learn how we collect, use and protect your personal information. We are committed to keeping your data secure and upholding your right to privacy.',
      metaTitle: 'Privacy Policy | Instagram',
      title: 'Privacy Policy',
    },
    termsOfService: {
      metaDescription:
        'Please review our Terms of Service to understand your rights and responsibilities when using our api. We are committed to transparency and fair dealings so that' +
        ' you can use our site with confidence.',
      metaTitle: 'Terms of service | Instagram',
      title: 'Terms of Service',
    },
    search: {
      metaDescription:
        'Use our convenient search to find interesting people in our social network. Discover new acquaintances, communicate and establish connections, expanding your social circle',
      metaTitle: 'Search users | Instagram',
      title: 'Search',
      requests: 'Recent requests',
      empty: 'Oops! This place looks empty!',
      noRequests: 'No recent requests',
    },
    favorites: {
      metaDescription:
        "Discover our social network's Favorites page, where you'll find the most popular and discussed topics chosen by our community. Join us and share your favorites!",
      metaTitle: 'Favorites | Instagram',
      title: 'Favorites',
    },
  },
  tabs: {
    devices: 'Devices',
    general: 'General information',
    management: 'Account management',
    payments: 'My payments',
  },
  validation: {
    minLength: (len: number) => `Minimum ${len} characters`,
    required: 'Required field',
    acceptTerms: 'Required check',
    maxLength: (len: number) => `Maximum ${len} characters`,
    emailVerification: 'The email must match the format example@example.com',
    passwordVerification:
      'The password must contain at least 1 capital letter, a special character and a number',
    passwordMismatch: 'The passwords must match',
    recaptcha: 'Please verify that you are not a robot',
    userNameVerification:
      'Username can contain only letters "a-z" (uppercase and lowercase), numbers, and the characters "_" and "-"',
    nameVerification: 'Can contain only letters "a-z" (uppercase and lowercase)',
    aboutMeVerification:
      'It can only contain the letters a-z, numbers and special characters (!@#$%^&*()-_+=)',
    minAgeDateOfBirthVerification: 'A user under 13 cannot create a profile.',
    dateOfBirthVerification: 'Please enter your date of birth.',
  },
}
