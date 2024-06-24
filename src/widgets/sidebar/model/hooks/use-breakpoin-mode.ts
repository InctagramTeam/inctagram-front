import { useLayoutContext, useResponsive, useTranslation } from '@/shared'
import { getBaseLinks, getSidebarLinks } from '@/widgets/sidebar/model'

export const useBreakpointMode = () => {
  const { isCollapsed } = useLayoutContext()
  const { lg, xl, xl2, xs } = useResponsive()
  const { t } = useTranslation()

  const tablet = lg
  const mobile = xs
  const desktop = xl2 || xl

  const onlyIcons = tablet || isCollapsed

  const mobileSidebarLinks = getBaseLinks(t)
  const sidebarLinks = getSidebarLinks(t)

  return {
    desktop,
    isCollapsed,
    mobile,
    mobileSidebarLinks,
    onlyIcons,
    sidebarLinks,
    t,
  }
}
