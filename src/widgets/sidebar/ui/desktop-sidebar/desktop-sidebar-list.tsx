import { DesktopSidebarItem, NavLink } from '@/widgets/sidebar'
import { ReturnComponent } from '@/shared/types'

type Props = {
  links: NavLink[]
  collapsed?: boolean
}

export const DesktopSidebarList = ({ links, collapsed }: Props): ReturnComponent => {
  return (
    <ul className="flex flex-col gap-[24px] rounded-md cursor-pointer transition-colors [&>*:nth-child(5)]:mb-[46px] h-full">
      {links.map(link => (
        <DesktopSidebarItem key={link.href} isCollapsed={collapsed} link={link} />
      ))}
    </ul>
  )
}
