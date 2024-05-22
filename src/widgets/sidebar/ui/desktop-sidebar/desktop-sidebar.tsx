import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import { ReturnComponent } from '@/shared/types'
import { ToggleCollapsedButtons } from '../../index'
import { DesktopSidebarMenu } from './desktop-sidebar-menu'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'aside'>

export const DesktopSidebar = forwardRef<HTMLElement, Props>(
  ({ className, ...rest }, ref): ReturnComponent => {
    return (
      <>
        <ToggleCollapsedButtons {...rest} />
        <aside ref={ref}>
          <DesktopSidebarMenu ref={ref} {...rest} />
        </aside>
      </>
    )
  }
)
DesktopSidebar.displayName = 'DesktopSidebar'
