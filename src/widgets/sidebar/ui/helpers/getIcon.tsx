import {
  BookmarkIcon,
  BookmarkOutlineIcon,
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
} from '@/shared/assets/icons'

export const getIcon = (href: string, isActive: boolean) => {
  switch (href) {
    case '/home':
      return isActive ? <HomeIcon /> : <HomeOutlineIcon />
    case '/create':
      return isActive ? <PlusIcon /> : <PlusOutlineIcon />
    case '/profile':
      return isActive ? <PersonIcon /> : <PersonOutlineIcon />
    case '/messenger':
      return isActive ? <MessageIcon /> : <MessageOutlineIcon />
    case '/favorites':
      return isActive ? <BookmarkIcon /> : <BookmarkOutlineIcon />
    case '/search':
      return <SearchOutline />
    case '/settings':
      return <SettingIcon />
    case '/statistics':
      return <TrendingIcon />
    case '/log-out':
      return <LogOutIcon />
    default:
      return null
  }
}
