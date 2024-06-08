import { useTranslation } from '@/shared/lib/hooks/use-translation'
import { NavLink } from '@/shared/types'

export const getBaseLinks = (): NavLink[] => {
  const { t } = useTranslation()

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

const getAdditionalDesktopLinks = (): NavLink[] => {
  const { t } = useTranslation()

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

export const getSidebarLinks = (): NavLink[] => [...getBaseLinks(), ...getAdditionalDesktopLinks()]
