import { DesktopSidebarItem, SIDEBAR_LINKS } from '@/widgets/sidebar'
import { ReturnComponent } from '@/shared/types'
import { useLayoutContext } from '@/shared/layouts'

export const DesktopSidebarList = (): ReturnComponent => {
  const { isCollapsed } = useLayoutContext()

  return (
    <ul className="flex flex-col gap-[24px] rounded-md cursor-pointer transition-colors [&>*:nth-child(5)]:mb-[46px] h-full">
      {SIDEBAR_LINKS.map(link => (
        <DesktopSidebarItem key={link.href} isCollapsed={isCollapsed} link={link} />
      ))}
    </ul>
  )
}
