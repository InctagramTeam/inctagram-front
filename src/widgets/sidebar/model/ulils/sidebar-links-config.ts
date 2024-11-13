import { AppRoutes } from '@/shared'
import { LocaleType } from 'locales'

export class SidebarConfig {
  t
  userId: null | number

  constructor(t: LocaleType, userId: null | number) {
    this.t = t
    this.userId = userId
  }

  // Дополнительные ссылки для десктопной версии
  get getAdditionalDesktopLinks() {
    return [
      {
        disabled: false,
        href: AppRoutes.STATISTICS,
        name: this.t.links.statistics,
      },
      {
        disabled: false,
        href: AppRoutes.FAVORITES,
        name: this.t.links.favorites,
      },
    ]
  }

  // Базовые ссылки сайдбара
  get getBaseLinks() {
    return [
      {
        disabled: false,
        href: AppRoutes.HOME,
        name: this.t.links.home,
      },
      {
        disabled: false,
        href: AppRoutes.CREATE_POST,
        name: this.t.links.create,
      },
      {
        disabled: false,
        href: AppRoutes.MESSENGER,
        name: this.t.links.messenger,
      },
      {
        disabled: false,
        href: AppRoutes.SEARCH,
        name: this.t.links.search,
      },
      {
        disabled: false,
        href: AppRoutes.PROFILE + this.userId, // Ссылка на профиль с userId
        name: this.t.links.profile,
      },
    ]
  }
}
