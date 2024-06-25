import { useLayoutContext, useResponsive, useTranslation } from '@/shared'
import { getBaseLinks, getSidebarLinks } from '@/widgets/sidebar/model'

export const useBreakpointMode = () => {
  const { isCollapsed } = useLayoutContext()
  const { lg, xs } = useResponsive()
  const { t } = useTranslation()

  const tablet = lg
  const mobile = xs

  const onlyIcons = tablet || isCollapsed

  const mobileSidebarLinks = getBaseLinks(t)
  const sidebarLinks = getSidebarLinks(t)

  return {
    isCollapsed,
    mobile,
    tablet,
    mobileSidebarLinks,
    onlyIcons,
    sidebarLinks,
    t,
  }
}
