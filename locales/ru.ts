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
    createPassword: {
      metaTitle: 'Создание нового пароля | Instagram',
      metaDescription:
        'Создайте новый надежный пароль для вашего аккаунта. Простой процесс, повышенная безопасность и защита ваших личных данных.',
      title: 'Создайте новый пароль',
      hint: 'Ваш пароль должен содержать от 6 до 20 символов.',
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
    userNameVerification:
      'Имя пользователя может содержать только буквы "a-z" (заглавные и строчные), цифры и символы "_" и "-"',
  },
}
