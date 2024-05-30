import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import { ReturnComponent } from '@/shared/types'

import { DesktopSidebarMenu } from './desktop-sidebar-menu'
import { ToggleCollapsedButtons } from './toggle-collapsed-buttons'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'aside'>

export const DesktopSidebar = ({ className, ...rest }: Props): ReturnComponent => {
  return (
    <nav>
      <ToggleCollapsedButtons />
      <aside>
        <DesktopSidebarMenu {...rest} />
      </aside>
    </nav>
  )
}
