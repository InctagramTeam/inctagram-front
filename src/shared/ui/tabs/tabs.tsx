import React, { ReactNode } from 'react'

import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'
import * as Tabs from '@radix-ui/react-tabs'

type Tab = {
  disabled?: boolean
  title: string
  /** Уникальное значение, которое связывает триггер с содержимым.  */
  value: string
}

type Props = {
  ariaLabel?: string
  children?: ReactNode
  defaultValue?: string
  fullWidth?: boolean
  listClassName?: string
  onValueChange?: (value: string) => void
  rootClassName?: string

  size?: 'base'
  /** Массив с названиями табов, их значением и состоянием */
  tabs: Tab[]

  triggerClassName?: string
  /** Контролируемое значение активируемой вкладки. Должно использоваться в сочетании с onValueChange */
  value?: string
}

/** Стили для активного и неактивного состояния табов */
const baseClasses = `w-full h-fit bg-transparent text-nowrap font-H3-16 border-b-2 
data-[state='active']:text-Primary-500 data-[state='active']:border-b-Primary-500 disabled:data-[state='active']:text-Primary-900 disabled:data-[state='active']:border-b-Primary-900 hover:data-[state='active']:bg-Primary-900 hover:data-[state='active']:bg-opacity-15 active:data-[state='active']:bg-Primary-100 active:data-[state='active']:bg-opacity-15 active:data-[state='active']:outline-none focus-visible:data-[state='active']:outline-none focus-visible:data-[state='active']:ring-2 focus-visible:data-[state='active']:rounded-sm focus-visible:data-[state='active']:ring-Primary-300

data-[state='inactive']:text-Dark-100 data-[state='inactive']:border-b-Dark-100 disabled:data-[state='inactive']:text-Dark-300 disabled:data-[state='inactive']:border-b-Dark-300 focus-visible:data-[state='inactive']:outline-none focus-visible:data-[state='inactive']:ring-2 focus-visible:data-[state='inactive']:rounded-sm focus-visible:data-[state='inactive']:ring-Primary-300 hover:data-[state='inactive']:bg-Primary-900 hover:data-[state='inactive']:bg-opacity-15 active:data-[state='inactive']:bg-Primary-100 active:data-[state='inactive']:bg-opacity-15 active:data-[state='inactive']:outline-none active:ring-0`

const sizes = {
  base: `py-[6px] px-[7px] sm:px-[24px]`,
}

export const TabSwitcher = (props: Props): ReturnComponent => {
  const {
    ariaLabel,
    children,
    defaultValue,
    fullWidth,
    listClassName,
    onValueChange,
    rootClassName,
    size,
    tabs,
    triggerClassName,
    value,
  } = props

  const classes = {
    /** Табы растягиваются на всю ширину контейнера и скролятся, если их ширина превышает ширину контейнера */
    list: cn('flex w-full overflow-x-scroll', listClassName),
    trigger: cn([baseClasses, sizes[size || 'base'], fullWidth && `w-full`, triggerClassName]),
  }

  return (
    <Tabs.Root
      className={rootClassName}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <Tabs.List aria-label={ariaLabel || 'tab-switcher'} className={classes.list}>
        {tabs.map(tab => (
          <Tabs.Trigger
            className={classes.trigger}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  )
}

TabSwitcher.displayName = Tabs.List.displayName
