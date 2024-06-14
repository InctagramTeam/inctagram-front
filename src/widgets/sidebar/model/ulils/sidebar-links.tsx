import { NavLink } from '@/shared/types'
import { LocaleType } from 'locales'
import { AppRoutes } from '@/shared/constants'

export const getBaseLinks = (t: LocaleType): NavLink[] => {
  return [
    {
      disabled: false,
      href: AppRoutes.HOME,
      name: t.links.home,
    },
    {
      disabled: true,
      href: AppRoutes.CREATE_POST,
      name: t.links.create,
    },
    {
      disabled: false,
      href: AppRoutes.MESSENGER,
      name: t.links.messenger,
    },
    {
      disabled: false,
      href: AppRoutes.SEARCH,
      name: t.links.search,
    },
    {
      disabled: false,
      href: AppRoutes.PROFILE,
      name: t.links.profile,
    },
  ]
}

const getAdditionalDesktopLinks = (t: LocaleType): NavLink[] => {
  return [
    {
      disabled: false,
      href: AppRoutes.STATISTICS,
      name: t.links.statistics,
    },
    {
      disabled: false,
      href: AppRoutes.FAVORITES,
      name: t.links.favorites,
    },
  ]
}

export const getSidebarLinks = (t: LocaleType): NavLink[] => [
  ...getBaseLinks(t),
  ...getAdditionalDesktopLinks(t),
]
