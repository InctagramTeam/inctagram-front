import { NavLink } from '@/shared/types'
import { LocaleType } from 'locales'

export const getBaseLinks = (t: LocaleType): NavLink[] => {
  return [
    {
      disabled: false,
      href: '/home-nav-links',
      name: t.links.home,
    },
    {
      disabled: true,
      href: '/create',
      name: t.links.create,
    },
    {
      disabled: false,
      href: '/messenger',
      name: t.links.messenger,
    },
    {
      disabled: false,
      href: '/search',
      name: t.links.search,
    },
    {
      disabled: false,
      href: '/profile',
      name: t.links.profile,
    },
  ]
}

const getAdditionalDesktopLinks = (t: LocaleType): NavLink[] => {
  return [
    {
      disabled: false,
      href: '/statistics',
      name: t.links.statistics,
    },
    {
      disabled: false,
      href: '/favorites',
      name: t.links.favorites,
    },
  ]
}

export const getSidebarLinks = (t: LocaleType): NavLink[] => [
  ...getBaseLinks(t),
  ...getAdditionalDesktopLinks(t),
]
