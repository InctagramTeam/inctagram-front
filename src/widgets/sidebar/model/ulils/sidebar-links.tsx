import { useTranslation } from '@/shared/lib/hooks/use-translation'
import { NavLink } from '@/shared/types'

export const getBaseLinks = (): NavLink[] => {
  const { t } = useTranslation()

  return [
    {
      disabled: false,
      href: '/home-nav-links',
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
  ]
}

export const getSidebarLinks = (): NavLink[] => [...getBaseLinks(), ...getAdditionalDesktopLinks()]
export const getMobileLinks = (): NavLink[] => getBaseLinks()
