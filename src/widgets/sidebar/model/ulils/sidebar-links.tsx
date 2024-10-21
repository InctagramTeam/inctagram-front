import { AppRoutes, NavLink } from "@/shared";
import Cookies from "js-cookie";
import { LocaleType } from "locales";

export const getBaseLinks = (t: LocaleType): NavLink[] => {
  const userId = Cookies.get("userId");

  return [
    {
      disabled: false,
      href: AppRoutes.HOME,
      name: t.links.home,
    },
    {
      disabled: true,
      href: AppRoutes.CREATE_POST,
      name: t.links.create,
    },
    {
      disabled: false,
      href: AppRoutes.MESSENGER,
      name: t.links.messenger,
    },
    {
      disabled: false,
      href: AppRoutes.SEARCH,
      name: t.links.search,
    },
    {
      disabled: false,
      href: AppRoutes.PROFILE + userId,
      name: t.links.profile,
    },
  ];
};

const getAdditionalDesktopLinks = (t: LocaleType): NavLink[] => {
  return [
    {
      disabled: false,
      href: AppRoutes.STATISTICS,
      name: t.links.statistics,
    },
    {
      disabled: false,
      href: AppRoutes.FAVORITES,
      name: t.links.favorites,
    },
  ];
};

export const getSidebarLinks = (t: LocaleType): NavLink[] => [
  ...getBaseLinks(t),
  ...getAdditionalDesktopLinks(t),
];
