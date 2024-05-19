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
  TrendingIcon,
} from '@/shared/assets/icons'
import { cn } from '@/shared/lib/utils/merge-cn'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLink = {
  className?: string
  disabled?: boolean
  handleClick?: () => void
  href: string
  name: string
}

type NavbarProps = {
  className?: string
  links: NavLink[]
}

const linkClasses = {
  active: `text-Primary-500`,
  base: `flex gap-[12px] font-medium-text-14 transition ease-in-out hover:text-Primary-100 mb-[24px] last:absolute last:bottom-[36px] last:mb-0`,
  default: `text-Light-100`,
  disabled: `pointer-events-none text-Dark-100`,
}

const getIcon = (href: string, isActive: boolean) => {
  switch (href) {
    case '/home': {
      return isActive ? <HomeIcon /> : <HomeOutlineIcon />
    }
    case '/create': {
      return isActive ? <PlusIcon /> : <PlusOutlineIcon />
    }
    case '/profile': {
      return isActive ? <PersonIcon /> : <PersonOutlineIcon />
    }
    case '/messenger': {
      return isActive ? <MessageIcon /> : <MessageOutlineIcon />
    }
    case '/favorites': {
      return isActive ? <BookmarkIcon /> : <BookmarkOutlineIcon />
    }
    case '/search': {
      return <SearchOutline />
    }
    case '/statistics': {
      return <TrendingIcon />
    }
    case '/log-out': {
      return <LogOutIcon />
    }
  }
}

export const Navbar = ({ className, links }: NavbarProps) => {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        className,
        'pt-[72px] pr-[60px] pb-[36px] pl-[40px] h-[660px] w-[220px] fixed top-[60px] left-0 border-r-[1px] border-r-Dark-300 [&>*:nth-child(5)]:mb-[46px]'
      )}
    >
      {links.map(link => {
        const isActive = pathname.startsWith(link.href)

        return (
          <Link
            aria-disabled={link.disabled}
            className={clsx(
              isActive
                ? linkClasses.active
                : link.disabled
                  ? linkClasses.disabled
                  : linkClasses.default,
              linkClasses.base
            )}
            href={link.href}
            key={link.href}
            onClick={link.handleClick}
          >
            {getIcon(link.href, isActive)}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
