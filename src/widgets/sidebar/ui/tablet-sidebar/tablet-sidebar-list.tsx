import { ReturnComponent } from '@/shared/types'
import { getSidebarLinks } from '@/widgets/sidebar/model/ulils/sidebar-links'

import { TabletSidebarItem } from './tablet-sidebar-item'

export const TabletSidebarList = ({ ...rest }): ReturnComponent => {
  return (
    <ul
      className={
        'flex h-full cursor-pointer flex-col gap-[24px] rounded-md transition-colors [&>*:nth-child(5)]:mb-[46px]'
      }
    >
      {getSidebarLinks().map(link => (
        <li className={'last:mt-auto'} key={link.href}>
          <TabletSidebarItem link={link} {...rest} />
        </li>
      ))}
    </ul>
  )
}
