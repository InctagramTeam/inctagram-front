/**  Чтобы typescript подсказывал поля заполняем сначала файл en.ts */
import { LocaleType } from './en'

export const ru: LocaleType = {
  lang: {
    en: 'Английский',
    ru: 'Русский',
  },
  layout: {
    sidebar: {
      create: 'Создать',
      favorites: 'Избранное',
      home: 'Главная',
      logout: 'Выйти',
      messenger: 'Чат',
      profile: 'Мой профиль',
      search: 'Поиск',
      statistics: 'Статистика',
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
      metaTitle: 'Регистрация',
      modalBtn: 'Хорошо',
      modalText: 'Мы отправили ссылку для подтверждения вашего электронного адреса на ',
      question: 'У вас уже есть аккаунт?',
      title: 'Регистрация',
    },
  },
  tabs: {
    devices: 'Устройства',
    general: 'Общая информация',
    management: 'Управление аккаунтом',
    payments: 'Мои платежи',
  },
}
