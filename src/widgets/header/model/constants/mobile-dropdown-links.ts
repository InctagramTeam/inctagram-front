import { NavLink } from '@/shared/types'
import { AppRoutes } from '@/shared/constants/routes'

export const mobileDropdownLinks: NavLink[] = [
  { href: AppRoutes.PROFILE_SETTINGS, name: 'Profile Settings' },
  { href: AppRoutes.STATISTICS, name: 'Statistics' },
  { href: AppRoutes.FAVORITES, name: 'Favorites' },
]
