import { AppRoutes } from '@/shared/constants/routes'
import { useTranslation } from '@/shared/lib/hooks'
import { NavLink } from '@/shared/types'
export const getMobileDropdownLinks = (): NavLink[] => {
  const { t } = useTranslation()

  return [
    { href: AppRoutes.PROFILE_SETTINGS, name: t.links.profileSettings },
    { href: AppRoutes.STATISTICS, name: t.links.statistics },
    { href: AppRoutes.FAVORITES, name: t.links.favorites },
  ]
}
