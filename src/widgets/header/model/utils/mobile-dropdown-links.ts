import { AppRoutes } from '@/shared/constants/routes'
import { NavLink } from '@/shared/types'
import { useTranslation } from '@/shared/lib/hooks'
export const getMobileDropdownLinks = (): NavLink[] => {
  const { t } = useTranslation()

  return [
    { href: AppRoutes.PROFILE_SETTINGS, name: t.button.profileSettings },
    { href: AppRoutes.STATISTICS, name: t.button.statistics },
    { href: AppRoutes.FAVORITES, name: t.button.favorites },
  ]
}
