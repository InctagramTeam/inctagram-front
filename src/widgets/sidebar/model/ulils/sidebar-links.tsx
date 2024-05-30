import { NavLink } from '@/shared/types'
import { useTranslation } from '@/shared/lib/hooks/use-translation'

const getBaseLinks = (): NavLink[] => {
  const { t } = useTranslation()

  return [
    {
      disabled: false,
      href: '/home',
      name: t.layout.sidebar.home,
    },
    {
      disabled: true,
      href: '/create',
      name: t.layout.sidebar.create,
    },
    {
      disabled: false,
      href: '/messenger',
      name: t.layout.sidebar.messenger,
    },
    {
      disabled: false,
      href: '/search',
      name: t.layout.sidebar.search,
    },
    {
      disabled: false,
      href: '/profile',
      name: t.layout.sidebar.profile,
    },
  ]
}

const getAdditionalDesktopLinks = (): NavLink[] => {
  const { t } = useTranslation()

  return [
    {
      disabled: false,
      href: '/statistics',
      name: t.layout.sidebar.statistics,
    },
    {
      disabled: false,
      href: '/favorites',
      name: t.layout.sidebar.favorites,
    },
    {
      disabled: true,
      href: '/log-out',
      name: t.layout.sidebar.logout,
    },
  ]
}

export const getSidebarLinks = (): NavLink[] => [...getBaseLinks(), ...getAdditionalDesktopLinks()]
export const getMobileLinks = (): NavLink[] => getBaseLinks()