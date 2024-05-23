import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { ReturnComponent } from '@/shared/types'
import { TabletSidebarMenu } from '@/widgets/sidebar/ui/tablet-sidebar/tablet-sidebar-menu'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'aside'>

export const TabletSidebar = forwardRef<HTMLElement, Props>(
  ({ className, ...rest }, ref): ReturnComponent => {
    return (
      <aside className={'w-full'}>
        <TabletSidebarMenu ref={ref} {...rest} />
      </aside>
    )
  }
)

TabletSidebar.displayName = 'DesktopSidebar'
