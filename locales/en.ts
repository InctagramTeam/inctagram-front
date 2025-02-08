/**
 * label: названия для лейблов, например "Confirm password", "Email", "New Password", "Password", и т.д.
 * button: названия для кнопок и ссылок
 * validation: сообщения для валидации, например "Maximum 20 characters for password", "Minimum 6 characters for password", "The passwords must match", и т.д.
 * pages: названия для страниц и их элементов, например "Congratulations!", "Create new password", "Email verification link link-expired", и т.д.
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
    signIn: 'Log In',
    signUp: 'Sign Up',
    simple_save: 'Save',
    statistics: 'Statistics',
    yes: 'Yes',
    clearField: 'Clear field',
    closeModal: 'Close modal',
    close: 'Close',
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
    success: 'Success',
  },
  placeholders: {
    email: 'example@gmail.com',
    firstName: 'Enter your first name',
    lastName: 'Enter your last name',
    password: 'Enter your password',
    aboutMe: 'About Me',
    dateOfBirth: 'Pick a date',
    passwordConfirm: 'Enter your password again',
    username: 'Enter your username',
  },
  posts: {
    showMore: 'Show More',
    hide: 'Hide',
    registeredUsers: 'Registered users',
    deletePost: 'Delete post',
    editPost: 'Edit post',
    wantDeletePost: 'Are you sure you want to delete this post?',
  },
  uploadPhoto: {
    addPhoto: 'Add Photo',
    croppingTitle: 'Cropping',
    proportion: 'Choose proportions',
    filter: 'Choose proportions',
    zoom: 'Zoom',
    gallery: 'Gallery menu',
    filtersTitle: 'Filters',
    publicationTitle: 'Publication',
    validateFile: {
      fileSize: (sizes: number) => `Photo size must be less than ${sizes} MB!`,
      fileType: 'The file must be in PNG or JPEG format',
    },
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
    alts: {
      userAvatar: 'User avatar',
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
      metaTitle: 'Sign Up | Inctagram',
      modalBtn: 'OK',
      modalTitle: 'Email sent',
      modalText: 'We have sent a link to confirm your email to ',
      question: 'Do you have an account?',
      github: 'Register with github',
      google: 'Register with google',
      title: 'Sign Up',
    },
    signIn: {
      metaTitle: 'Sign In | Inctagram',
      metaDescription:
        'Log in to your account to start using our api and receive exclusive benefits.',
      title: 'Sign in',
      link: 'Forgot Password',
      question: 'Don’t have an account?',
      github: 'Login with github',
      google: 'Login with google',
    },
    profile: {
      deletePhoto: {
        title: 'Delete Photo',
        deleteProfilePhotoQuestion: 'Are you sure you want to delete the photo?',
        errors: {
          offline: 'You are currently offline. Please check your internet connection.',
        },
      },
      addProfilePhoto: {
        title: 'Add a Profile Photo',
        errors: {
          offline: 'You are currently offline. Please check your internet connection.',
          minDimension: (MIN_DIMENSION: number) =>
            `Image must be at least ${MIN_DIMENSION} x ${MIN_DIMENSION} pixels.`,
        },
        updateAvatar: {
          onError: 'You are currently offline. Changes may not be saved.',
          onSuccess: 'The photo has been successfully updated.',
        },
      },
      followers: 'Followers',
      following: 'Following',
      logOutConfirmation: 'Are you really want to log out of your account',
      metaDescription:
        'Discover detailed information about users, their interests, skills and experience.',
      metaTitle: 'Profile',
      publications: 'Publications',
      logOut: {
        modalTitle: 'Logout',
        modalText: 'Are you really want to log out of your account',
      },
      settings: {
        tabs: {
          devices: 'Devices',
          general: 'General information',
          management: 'Account management',
          payments: 'My payments',
        },
        combobox: {
          loading: 'Loading...',
          empty: 'No locations found.',
          country: {
            label: 'Select your country',
            placeholder: 'Сountry',
            search: 'Search сountry',
          },
          city: {
            label: 'Select your city',
            placeholder: 'City',
            search: 'Search city',
          },
        },
        managementTab: {
          accountType: 'Account type:',
          accountTypeOptions: {
            personal: 'Personal',
            business: 'Business',
          },
          subscriptionCostsTitle: 'Your subscription costs:',
          subscriptionCostsOptions: {
            day: 'per 1 Day',
            week: 'per 7 Day',
            month: 'per month',
          },
          paymentSuccessfulModal: {
            title: 'Success',
            text: 'Payment was successful!',
            button: 'OK',
          },
          paymentErrorModal: {
            title: 'Error',
            text: 'Transaction failed. Please, write to support',
            button: 'Back to payment',
          },
        },
      },
    },
    congratulations: {
      metaDescription: 'Congratulations! Your email has been confirmed',
      metaTitle: 'Congratulations | Inctagram',
      title: 'Congratulations!',
      textEmail: 'Your email has been confirmed',
      textPassword: 'Your password has been successfully changed.',
    },
    verifyEmail: {
      metaDescription:
        'The verification link has expired. Please verify your email again to start using our api and receive exclusive benefits.',
      metaTitle: 'Email verification | Inctagram',
      title: 'Email verification link expired',
      text: 'Looks like the verification link has expired. Not to worry, we can send the link again',
    },
    verifyPasswordRecoveryLink: {
      metaDescription: 'The verification link has expired.',
      metaTitle: 'Create new password | Inctagram',
      title: 'Password recovery link has expired',
      text: 'Looks like the verification link has expired. Not to worry, we can send the link again',
    },
    createPassword: {
      metaTitle: 'Create new password | Inctagram',
      metaDescription:
        'Create a new strong password for your account. Simple process, increased security and protection of your personal data.',
      title: 'Create New Password',
      hint: 'Your password must be between 6 and 20 characters',
    },
    forgotPassword: {
      metaTitle: 'Forgot password | Inctagram',
      metaDescription:
        'Having trouble logging in? Recover access to your account using our simple and secure password reset process. Get started now and get back to your important business without delays',
      title: 'Forgot Password',
      hint: 'Enter your email address and we will send you further instructions ',
      sent: 'The link has been sent by email. If you don’t receive an email send link again',
    },
    privacyPolice: {
      metaDescription:
        'Please read our Privacy Policy to learn how we collect, use and protect your personal information. We are committed to keeping your data secure and upholding your right to privacy.',
      metaTitle: 'Privacy Policy | Inctagram',
      title: 'Privacy Policy',
    },
    termsOfService: {
      metaDescription:
        'Please review our Terms of Service to understand your rights and responsibilities when using our api. We are committed to transparency and fair dealings so that' +
        ' you can use our site with confidence.',
      metaTitle: 'Terms of service | Inctagram',
      title: 'Terms of Service',
    },
    search: {
      metaDescription:
        'Use our convenient search to find interesting people in our social network. Discover new acquaintances, communicate and establish connections, expanding your social circle',
      metaTitle: 'Search users | Inctagram',
      title: 'Search',
      requests: 'Recent requests',
      empty: 'Oops! This place looks empty!',
      noRequests: 'No recent requests',
    },
    favorites: {
      metaDescription:
        "Discover our social network's Favorites page, where you'll find the most popular and discussed topics chosen by our community. Join us and share your favorites!",
      metaTitle: 'Favorites | Inctagram',
      title: 'Favorites',
    },
    createPost: {
      metaDescription:
        'Create a unique post: add a photo, text and hashtags. Share moments and inspire your subscribers in the app Inctagram!',
      metaTitle: 'Create Post | Inctagram',
      pageTitle: 'Create post',
      wantToCloseCreation:
        'Do you really want to close the creation of a publication? If you close everything will be deleted',
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
    noSpaces: 'A space is not allowed in this field',
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
  notifications: {
    profileCreated: 'Profile successfully created',
    profileUpdated: 'Profile successfully updated',
    postCreated: 'Post successfully created',
    postDeleted: 'Post deleted successfully',
    draftSaved: 'Draft successfully saved',
    emailVerification: {
      onSuccess: 'The link email was successfully sent!',
    },
  },
  errors: {
    noProfile: 'There was an error loading your profile. Try refreshing the page',
  },
}
