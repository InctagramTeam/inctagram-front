import { TabletSidebarItem } from './tablet-sidebar-item'
import { SIDEBAR_LINKS } from '../../model/constants/sidebar-links'
import { ReturnComponent } from '@/shared/types'

export const TabletSidebarList = ({ ...rest }): ReturnComponent => {
  return (
    <ul className="flex flex-col gap-[24px] rounded-md cursor-pointer transition-colors [&>*:nth-child(5)]:mb-[46px] h-full">
      {SIDEBAR_LINKS.map(link => (
        <li key={link.href} className="last:mt-auto">
          <TabletSidebarItem link={link} {...rest} />
        </li>
      ))}
    </ul>
  )
}
