import React, { ReactNode } from 'react'

import { ReturnComponent } from '@/shared/types'
import * as Tabs from '@radix-ui/react-tabs'

export type Props = {
  children: ReactNode
  className?: string
  /** Уникальное значение, которое связывает триггер с содержимым.  */
  value: string
}

export const TabContent = ({ children, className, value }: Props): ReturnComponent => {
  return (
    <Tabs.Content className={className} value={value}>
      {children}
    </Tabs.Content>
  )
}

TabContent.displaName = Tabs.Content.displayName
