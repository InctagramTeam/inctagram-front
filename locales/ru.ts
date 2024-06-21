/**  Чтобы typescript подсказывал поля заполняем сначала файл en.ts */
import { LocaleType } from './en'

export const ru: LocaleType = {
  button: {
    answer: 'Ответить',
    back: 'Вернуться',
    backToHome: 'Вернутся на домашнюю',
    backToPayment: 'Вернуться к оплате',
    backToSignIn: 'Страница входа',
    backToSignUp: 'Вернуться к регистрации',
    createNewPassword: 'Создать новый пароль',
    discard: 'Отменить',
    done: 'Готово',
    logOut: 'Выйти',
    next: 'Далее',
    no: 'Нет',
    ok: 'OK',
    publish: 'Опубликовать',
    resendVerificationLink: 'Отправить повторное подтверждение',
    save: 'Сохранить изменения',
    saveDraft: 'Сохранить черновик',
    selectFromComputer: 'Выбрать с Компьютера',
    sendLink: 'Отправить ссылку',
    sendLinkAgain: 'Отправить ссылку повторно',
    showLess: 'Показать меньше',
    showMore: 'Показать больше',
    signIn: 'Войти',
    signUp: 'Зарегистрироваться',
    simple_save: 'Сохранить',
    statistics: 'Статистика',
    yes: 'Да',
    clearField: 'Очистить поле',
    closeModal: 'Закрыть модальное окно',
    close: 'Закрыть',
    password: {
      hide: 'Скрыть пароль',
      show: 'Показать пароль',
    },
    notifications: {
      hide: 'Скрыть уведомления',
      show: 'Показать уведомления',
    },
  },
  links: {
    create: 'Создать',
    favorites: 'Избранное',
    home: 'Главная',
    messenger: 'Чат',
    profile: 'Мой профиль',
    search: 'Поиск',
    statistics: 'Статистика',
    profileSettings: 'Настройки профиля',
  },
  label: {
    email: 'Электронная почта',
    error: 'Ошибка',
    password: 'Пароль',
    newPassword: 'Новый пароль',
    userName: 'Имя пользователя',
    confirmPassword: 'Подтвердите пароль',
  },
  placeholders: {
    email: 'email@inctagram.com',
    firstName: 'Введите ваше имя',
    lastName: 'Введите вашу фамилию',
    password: 'Введите ваш пароль',
    passwordConfirm: 'Введите ваш пароль снова',
    username: 'Введите имя пользователя',
  },
  lang: {
    en: 'Английский',
    ru: 'Русский',
  },
  layout: {
    alert: {
      close: 'Закрыть уведомление',
      error: 'Ошибка!',
    },
    notificationsDropdown: {
      title: 'Уведомления!',
      alternativeText: 'Уведомлений еще нет',
    },
    logo: 'Логотип Inctagram',
  },
  pages: {
    signUp: {
      agreement: {
        description: `Я согласен с <1>privacy</1> и <2>terms</2>`,
        privacy: 'Политикой конфиденциальности',
        terms: 'Условиями использования',
      },
      metaDescription:
        'Создайте учетную запись, чтобы начать пользоваться нашими услугами и получать эксклюзивные преимущества.',
      metaTitle: 'Регистрация | Instagram',
      modalTitle: 'Сообщение отправлено',
      modalBtn: 'Хорошо',
      modalText: 'Мы отправили ссылку для подтверждения вашего электронного адреса на ',
      question: 'У вас уже есть аккаунт?',
      github: 'Зарегистрироваться с помощью github',
      google: 'Зарегистрироваться с помощью google',
      title: 'Регистрация',
    },
    signIn: {
      metaTitle: 'Вход | Instagram',
      metaDescription:
        'Войдите в учетную запись, чтобы начать пользоваться нашими услугами и получать эксклюзивные преимущества.',
      title: 'Войти',
      link: 'Забыл-(а) пароль',
      question: 'Еще нет аккаунта?',
      github: 'Войти с помощью github',
      google: 'Войти с помощью google',
    },
    profile: {
      addProfilePhoto: 'Добавить фото',
      deletePhoto: 'Удалить фото',
      deleteProfilePhoto: 'Вы уверены, что хотите удалить фотографию?',
      followers: 'Подписчики',
      following: 'Подписки',
      logOutConfirmation: 'Вы действительно хотите выйти из своего аккаунта',
      metaDescription:
        'Откройте для себя подробную информацию о пользователях, их интересах, навыках и опыте.',
      metaTitle: 'Профиль',
      publications: 'Публикации',
    },
    congratulations: {
      metaDescription: 'Поздравляем! Ваша почта была подтверждена',
      metaTitle: 'Поздравляем | Instagram',
      title: 'Поздравляем!',
      text: 'Ваша почта была подтверждена',
    },
    verifyEmail: {
      metaDescription:
        'Срок действия ссылки для проверки истек. Подтвердите почту снова, чтобы начать пользоваться нашими услугами и получать эксклюзивные преимущества.',
      metaTitle: 'Подтверждение почты | Instagram',
      title: 'Ссылка для подтверждения по электронной почте устарела',
      text: 'Похоже, срок действия ссылки для проверки истек. Не волнуйтесь, мы можем отправить ссылку еще раз',
    },
    createPassword: {
      metaTitle: 'Создание нового пароля | Instagram',
      metaDescription:
        'Создайте новый надежный пароль для вашего аккаунта. Простой процесс, повышенная безопасность и защита ваших личных данных.',
      title: 'Создайте новый пароль',
      hint: 'Ваш пароль должен содержать от 6 до 20 символов.',
    },
    forgotPassword: {
      metaTitle: 'Забыли пароль | Instagram',
      metaDescription:
        'Не можете войти? Восстановите доступ к своему аккаунту, используя нашу простую и безопасную процедуру сброса пароля. Начните сейчас и вернитесь к своим важным делам без задержек',
      title: 'Забыли пароль',
      hint: 'Введите свой адрес электронной почты, и мы вышлем вам дальнейшие инструкции.',
      sent: 'Ссылка отправлена по электронной почте. Если вы не получили письмо, отправьте ссылку еще раз',
    },
    privacyPolice: {
      metaDescription:
        'Ознакомьтесь с нашей Политикой конфиденциальности, чтобы узнать, как мы собираем, используем и защищаем вашу личную информацию. Мы обязуемся обеспечивать безопасность ваших данных и поддерживать ваше право на конфиденциальность.',
      metaTitle: 'Политика конфиденциальности | Instagram',
    },
    termsOfService: {
      metaDescription:
        'Изучите наши Условия обслуживания, чтобы быть в курсе ваших прав и обязанностей при использовании наших услуг. Мы стремимся к прозрачности и честному взаимодействию, чтобы вы могли с уверенностью пользоваться нашим сайтом.',
      metaTitle: 'Условия обслуживания | Instagram',
    },
    search: {
      metaDescription:
        'Используйте наш удобный поиск, чтобы найти интересных людей в нашей социальной сети. Откройте для себя новые знакомства, общайтесь и налаживайте связи, расширяя свой социальный круг.',
      metaTitle: 'Поиск пользователей | Instagram',
      title: 'Поиск',
      requests: 'Последние запросы',
    },
  },
  tabs: {
    devices: 'Устройства',
    general: 'Общая информация',
    management: 'Управление аккаунтом',
    payments: 'Мои платежи',
  },
  validation: {
    minLength: (len: number) => `Минимальное количество символов ${len}`,
    required: 'Обязательное поле',
    maxLength: (len: number) => `Максимальное количество символов ${len}`,
    passwordVerification: 'Пароль должен содержать минимум 1 заглавную букву, спец. символ и цифру',
    emailVerification: 'Почта должна соответствовать формату example@example.com',
    passwordMismatch: 'Пароли должны совпадать',
    recaptcha: 'Пожалуйста, подтвердите, что вы не робот',
    userNameVerification:
      'Имя пользователя может содержать только буквы "a-z" (заглавные и строчные), цифры и символы "_" и "-"',
  },
}
