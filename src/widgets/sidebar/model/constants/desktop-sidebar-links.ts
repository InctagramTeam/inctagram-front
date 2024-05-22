import { NavLink } from '@/widgets/sidebar'

export const DESKTOP_SIDEBAR_LINKS = [
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
    href: '/profile',
    name: 'My Profile',
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
] as NavLink[]
