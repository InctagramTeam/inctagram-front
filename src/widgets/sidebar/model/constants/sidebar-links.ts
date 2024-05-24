import { NavLink } from '@/shared/types'

const BASE_LINKS: NavLink[] = [
  {
    disabled: false,
    href: '/home',
    name: 'Home',
  },
  {
    disabled: true,
    href: '/create',
    name: 'Create',
  },
  {
    disabled: false,
    href: '/messenger',
    name: 'Messenger',
  },
  {
    disabled: false,
    href: '/search',
    name: 'Search',
  },
  {
    disabled: false,
    href: '/profile',
    name: 'Profile',
  },
]

const ADDITIONAL_DESKTOP_LINKS: NavLink[] = [
  {
    disabled: false,
    href: '/statistics',
    name: 'Statistics',
  },
  {
    disabled: false,
    href: '/favorites',
    name: 'Favorites',
  },
  {
    disabled: true,
    href: '/log-out',
    name: 'Log-out',
  },
]

export const SIDEBAR_LINKS: NavLink[] = [...BASE_LINKS, ...ADDITIONAL_DESKTOP_LINKS]
export const MOBILE_LINKS: NavLink[] = BASE_LINKS
