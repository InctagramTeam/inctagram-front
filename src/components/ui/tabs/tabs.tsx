import React, { ComponentPropsWithoutRef, ReactNode, forwardRef, useRef } from 'react'

import { ReturnComponent } from '@/common/types'
import { cn } from '@/utils/merge-cn'
import * as Tabs from '@radix-ui/react-tabs'

/** Стили для активного и неактивного состояния табов */
const baseClasses = `w-full h-fit bg-transparent text-nowrap font-H3-16 border-b-2 
data-[state='active']:text-Primary-500 data-[state='active']:border-b-Primary-500 disabled:data-[state='active']:text-Primary-900 disabled:data-[state='active']:border-b-Primary-900 hover:data-[state='active']:bg-Primary-900 hover:data-[state='active']:bg-opacity-15 active:data-[state='active']:bg-Primary-100 active:data-[state='active']:bg-opacity-15 active:data-[state='active']:outline-none focus-visible:data-[state='active']:outline-none focus-visible:data-[state='active']:ring-2 focus-visible:data-[state='active']:rounded-sm focus-visible:data-[state='active']:ring-Primary-300
data-[state='inactive']:text-Dark-100 data-[state='inactive']:border-b-Dark-100 disabled:data-[state='inactive']:text-Dark-300 disabled:data-[state='inactive']:border-b-Dark-300 focus-visible:data-[state='inactive']:outline-none focus-visible:data-[state='inactive']:ring-2 focus-visible:data-[state='inactive']:rounded-sm focus-visible:data-[state='inactive']:ring-Primary-300 hover:data-[state='inactive']:bg-Primary-900 hover:data-[state='inactive']:bg-opacity-15 active:data-[state='inactive']:bg-Primary-100 active:data-[state='inactive']:bg-opacity-15 active:data-[state='inactive']:outline-none active:ring-0`

const sizes = {
  base: `py-[6px] px-[7px] sm:px-[24px]`,
}

export type Tab = {
  disabled?: boolean
  title: string
  value: string
}

type TabsProps = {
  ariaLabel?: string
  /** Контент табов передается в качестве дочерних компонентов */
  children: ReactNode

  contentClassName?: string

  fullWidth?: boolean
  /** Собственные классы для настройки вида списка, кнопок и контентной части*/
  listClassName?: string
  size?: 'base'
  /** Массив с названиями табов, их значением и состоянием */
  tabsValues: Tab[]
  triggerClassName?: string
} & Omit<ComponentPropsWithoutRef<typeof Tabs.Root>, 'asChild'>

const TabSwitcher = forwardRef<HTMLButtonElement, TabsProps>(
  (props, tabsTriggerRef): ReturnComponent => {
    const {
      ariaLabel,
      children,
      contentClassName,
      fullWidth,
      listClassName,
      size,
      tabsValues,
      triggerClassName,
      ...rest
    } = props

    const contentRef = useRef<HTMLDivElement | null>(null)

    const classes = {
      content: cn('w-full', contentClassName),
      /** Табы растягиваются на всю ширину контейнера и скролятся, если их ширина превышает ширину контейнера */
      list: cn('flex w-full overflow-x-scroll', listClassName),
      trigger: cn([baseClasses, sizes[size || 'base'], fullWidth && `w-full`, triggerClassName]),
    }

    return (
      <Tabs.Root defaultValue={tabsValues[0].value} {...rest}>
        <Tabs.List aria-label={ariaLabel || 'tab-switcher'} className={classes.list}>
          {tabsValues.map((tab, index) => (
            <Tabs.Trigger
              className={classes.trigger}
              disabled={tab.disabled}
              key={index}
              ref={tabsTriggerRef}
              value={tab.value}
            >
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {React.Children.map(children, (child, i) => (
          <Tabs.Content
            className={classes.content}
            key={i}
            ref={contentRef}
            value={tabsValues[i].value}
          >
            {child}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    )
  }
)

export default TabSwitcher
