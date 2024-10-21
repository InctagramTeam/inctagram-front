import { memo, useMemo } from "react";

import { NavigationElement } from "@/shared";
import { useLayoutContext } from "@/shared/layouts";
import { cn, getIcon } from "@/shared/lib/utils";
import { NavLink } from "@/shared/types";
import { AppLink } from "@/shared/ui/app-link/app-link";

type Props = {
  isMobile?: boolean;
  links: NavLink[];
  onlyIcons?: boolean;
};

export const SidebarList = memo(
  ({ isMobile = false, links, onlyIcons = false }: Props) => {
    const { isCollapsed } = useLayoutContext();

    const classes = useMemo(
      () => ({
        item: cn(isMobile && `w-[24px] h-[24px]`, !isMobile && "flex"),
        list: cn(
          "w-full flex cursor-pointer rounded-md transition-colors",
          !isMobile &&
            "mb-[46px] flex-col gap-[24px] [&>*:nth-child(5)]:mb-[46px]",
          (isCollapsed || isMobile) && "justify-center",
          (isCollapsed || onlyIcons) && "items-center",
          isMobile && "gap-[36px]",
        ),
      }),
      [isCollapsed, isMobile, onlyIcons],
    );

    const renderLink = (link: NavLink) => {
      if (link.disabled) {
        return (
          <li className={classes.item} key={link.href}>
            <NavigationElement
              asComponent={"span"}
              disabled={link.disabled}
              name={link.name}
              onlyIcon={onlyIcons}
              startIcon={getIcon(link.href, false)}
            />
          </li>
        );
      }

      return (
        <li className={classes.item} key={link.href}>
          <NavigationElement
            asComponent={AppLink}
            onlyIcon={onlyIcons}
            {...link}
          />
        </li>
      );
    };

    return <ul className={classes.list}>{links.map(renderLink)}</ul>;
  },
);

SidebarList.displayName = "SidebarList";
