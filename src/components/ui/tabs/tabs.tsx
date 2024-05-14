import React, { ReactNode, forwardRef } from 'react'

import { cn } from '@/utils/merge-cn'
import * as Tabs from '@radix-ui/react-tabs'

const active = `data-[state='active']`
const inactive = `data-[state='inactive']`

/** Стили для активного и неактивного состояния табов */
const baseClasses = `w-full h-fit bg-transparent text-nowrap font-H3-16 border-b-2 

${active}:text-Primary-500 ${active}:border-b-Primary-500 disabled:${active}:text-Primary-900 disabled:${active}:border-b-Primary-900 hover:${active}:bg-Primary-900 hover:${active}:bg-opacity-15 active:${active}:bg-Primary-100 active:${active}:bg-opacity-15 active:${active}:outline-none focus-visible:${active}:outline-none focus-visible:${active}:ring-2 focus-visible:${active}:rounded-sm focus-visible:${active}:ring-Primary-300

${inactive}:text-Dark-100 ${inactive}:border-b-Dark-100 disabled:${inactive}:text-Dark-300 disabled:${inactive}:border-b-Dark-300 focus-visible:${inactive}:outline-none focus-visible:${inactive}:ring-2 focus-visible:${inactive}:rounded-sm focus-visible:${inactive}:ring-Primary-300 hover:${inactive}:bg-Primary-900 hover:${inactive}:bg-opacity-15 active:${inactive}:bg-Primary-100 active:${inactive}:bg-opacity-15 active:${inactive}:outline-none active:ring-0`

const sizes = {
  base: `py-[6px] px-[7px] sm:px-[24px]`,
}

export type Tab = {
  disabled?: boolean
  label: string
  value: string
}

type TabsProps = {
  /** Контент табов передается в качестве дочерних компонентов */
  children: ReactNode
  defaultValue: string
  size?: 'base'

  /** Массив с названиями табов, их значением и состоянием */
  tabs: Tab[]

  variant?: 'primary' | 'secondary'

  /** Собственные классы для настройки вида списка, кнопок и контентной части*/
  listClassName?: string
  triggerClassName?: string
  contentClassName?: string
}

const TabSwitcher = forwardRef<HTMLButtonElement, TabsProps>((props, ref) => {
  const { children, size, tabs, variant, listClassName, triggerClassName, contentClassName } = props

  const classes = {
    content: cn('w-full', contentClassName),
    /** Табы растягиваются на всю ширину контейнера и скролятся, если их ширина превышает ширину контейнера */
    list: cn('flex w-full overflow-x-scroll', listClassName),
    trigger: cn([baseClasses, sizes[size || 'base'], triggerClassName]),
  }

  return (
    <Tabs.Root defaultValue={tabs[0].value}>
      <Tabs.List className={classes.list}>
        {tabs.map((tab, i) => (
          <Tabs.Trigger
            className={classes.trigger}
            disabled={tab.disabled}
            key={i}
            ref={ref}
            value={tab.value}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {React.Children.map(children, (child, i) => (
        <Tabs.Content className={classes.content} key={i} value={tabs[i].value}>
          {child}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
})

export default TabSwitcher
