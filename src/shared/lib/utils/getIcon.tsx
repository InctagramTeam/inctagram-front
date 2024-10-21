import {
  BookmarkIcon,
  BookmarkOutlineIcon,
  GithubIcon,
  GoogleIcon,
  HomeIcon,
  HomeOutlineIcon,
  LogOutIcon,
  MessageIcon,
  MessageOutlineIcon,
  PersonIcon,
  PersonOutlineIcon,
  PlusIcon,
  PlusOutlineIcon,
  SearchOutline,
  SettingIcon,
  TrendingIcon,
} from "@/shared/assets/icons";
import { AppRoutes } from "@/shared/constants/routes";
import Cookies from "js-cookie";

export const getIcon = (href: string, isActive: boolean) => {
  const userId = Cookies.get("userId");

  switch (href) {
    case AppRoutes.HOME:
      return isActive ? <HomeIcon /> : <HomeOutlineIcon />;
    case AppRoutes.CREATE_POST:
      return isActive ? <PlusIcon /> : <PlusOutlineIcon />;
    case AppRoutes.PROFILE + userId:
      return isActive ? <PersonIcon /> : <PersonOutlineIcon />;
    case AppRoutes.MESSENGER:
      return isActive ? <MessageIcon /> : <MessageOutlineIcon />;
    case AppRoutes.FAVORITES:
      return isActive ? <BookmarkIcon /> : <BookmarkOutlineIcon />;
    case AppRoutes.SEARCH:
      return <SearchOutline />;
    case AppRoutes.PROFILE_SETTINGS:
      return <SettingIcon />;
    case AppRoutes.STATISTICS:
      return <TrendingIcon />;
    case process.env.NEXT_PUBLIC_GITHUB_OAUTH2:
      return <GithubIcon />;
    case process.env.NEXT_PUBLIC_GOOGLE_OAUTH2:
      return <GoogleIcon />;
    case "/log-out":
      return <LogOutIcon />;
    default:
      return null;
  }
};
