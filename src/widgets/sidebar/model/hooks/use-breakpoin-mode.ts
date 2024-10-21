import { useMemo } from "react";

import { useLayoutContext, useResponsive, useTranslation } from "@/shared";
import { getBaseLinks, getSidebarLinks } from "@/widgets/sidebar/model";

export const useBreakpointMode = () => {
  const { isCollapsed } = useLayoutContext();
  const { lg, xs } = useResponsive();
  const { t } = useTranslation();

  const tablet = lg;
  const mobile = xs;

  const onlyIcons = tablet || isCollapsed;

  const mobileSidebarLinks = useMemo(() => {
    return getBaseLinks(t);
  }, [t]);
  const sidebarLinks = useMemo(() => {
    return getSidebarLinks(t);
  }, [t]);

  return {
    isCollapsed,
    mobile,
    mobileSidebarLinks,
    onlyIcons,
    sidebarLinks,
    t,
    tablet,
  };
};
