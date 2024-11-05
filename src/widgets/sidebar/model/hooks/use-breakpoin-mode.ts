import { useLayoutContext, useResponsive, useTranslation } from '@/shared'

export const useBreakpointMode = () => {
  const { isCollapsed } = useLayoutContext()
  const { lg, xs } = useResponsive()
  const { t } = useTranslation()

  const tablet = lg
  const mobile = xs

  const onlyIcons = tablet || isCollapsed

  return {
    isCollapsed,
    mobile,
    onlyIcons,
    t,
    tablet,
  }
}
