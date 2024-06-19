import {
  LG_BREAKPOINT,
  SM_BREAKPOINT,
  useLayoutContext,
  useResponsive,
  useTranslation,
} from '@/shared'
import { getBaseLinks, getSidebarLinks } from '@/widgets/sidebar/model/ulils/sidebar-links'

export const useBreakpointMode = () => {
  const { isCollapsed } = useLayoutContext()
  const { width } = useResponsive()
  const { t } = useTranslation()

  const tablet = width && width > SM_BREAKPOINT && width < LG_BREAKPOINT
  const mobile = width && width < SM_BREAKPOINT
  const desktop = width && width > LG_BREAKPOINT
  const onlyIcons = tablet || isCollapsed

  const mobileSidebarLinks = getBaseLinks(t)
  const sidebarLinks = getSidebarLinks(t)

  return {
    width,
    isCollapsed,
    t,
    mobile,
    desktop,
    onlyIcons,
    mobileSidebarLinks,
    sidebarLinks,
  }
}
