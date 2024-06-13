import { AppRoutes } from '@/shared/constants/routes'
import { NavLink } from '@/shared/types'
import { LocaleType } from 'locales'
export const getMobileDropdownLinks = (t: LocaleType): NavLink[] => {
  return [
    { href: AppRoutes.PROFILE_SETTINGS, name: t.links.profileSettings },
    { href: AppRoutes.STATISTICS, name: t.links.statistics },
    { href: AppRoutes.FAVORITES, name: t.links.favorites },
  ]
}
