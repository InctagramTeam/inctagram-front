import { useLayoutContext } from '@/shared/layouts'
import { ReturnComponent } from '@/shared/types'

import { getSidebarLinks } from 'src/widgets/sidebar/model/ulils/sidebar-links'
import { DesktopSidebarItem } from './desktop-sidebar-item'

export const DesktopSidebarList = (): ReturnComponent => {
  const { isCollapsed } = useLayoutContext()

  return (
    <ul
      className={
        'flex h-full cursor-pointer flex-col gap-[24px] rounded-md transition-colors [&>*:nth-child(5)]:mb-[46px]'
      }
    >
      {getSidebarLinks().map(link => (
        <DesktopSidebarItem isCollapsed={isCollapsed} key={link.href} link={link} />
      ))}
    </ul>
  )
}
