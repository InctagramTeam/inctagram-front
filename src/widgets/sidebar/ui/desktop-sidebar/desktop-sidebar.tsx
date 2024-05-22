import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import { ReturnComponent } from '@/shared/types'
import { DesktopSidebarMenu, ToggleCollapsedButtons } from '../../index'

type Props = {
  className?: string
  isCollapsed?: boolean
  onToggleIsCollapsedClick: (isCollapsed: boolean) => void
} & ComponentPropsWithoutRef<'aside'>

export const DesktopSidebar = forwardRef<HTMLElement, Props>(
  ({ className, onToggleIsCollapsedClick, isCollapsed, ...rest }, ref): ReturnComponent => {
    return (
      <>
        <ToggleCollapsedButtons
          onToggleIsCollapsedClick={onToggleIsCollapsedClick}
          isCollapsed={isCollapsed}
          {...rest}
        />
        <DesktopSidebarMenu isCollapsed={isCollapsed} ref={ref} {...rest} />
      </>
    )
  }
)
DesktopSidebar.displayName = 'DesktopSidebar'
