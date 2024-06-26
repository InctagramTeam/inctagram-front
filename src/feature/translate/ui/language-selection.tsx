import * as React from 'react'
import { memo } from 'react'

import { Language } from '@/feature/translate/model/helpers/get-languages'
import { Nullable } from '@/shared'
import { MD_BREAKPOINT } from '@/shared/constants'
import { LanguageSelectionList, cn, useLangSwitcher, useResponsive } from '@/shared/lib'
import { Select, SelectContent } from '@/shared/ui'

import { LanguageSelectionTrigger } from './'

type Props = {
  sidebarItems: Language[]
  width: Nullable<number>
}

export const LanguageSelection = memo(({ sidebarItems, width }: Props) => {
  const { changeLocale, defaultLocale, locale } = useLangSwitcher()

  const isDesktop = width && width > MD_BREAKPOINT
  const isMobile = !isDesktop

  const classes = {
    content: cn(
      'bg-Dark-500 border border-Light-100 w-[--radix-popper-anchor-width]',
      !isMobile && ' border-t-0 rounded-b-[2px]',
      isMobile && 'min-w-0 rounded-[2px]'
    ),
    flag: 'w-[20px] h-[20px] object-contain',
    item: cn(
      `flex gap-[12px] h-auto px-[12px] py-[6px] cursor-pointer transition-colors duration-300 
    hover:!text-Primary-500 hover:bg-Dark-300`,
      !isMobile && ``,
      isMobile && 'max-w-max'
    ),
    itemInner: 'flex gap-[12px] text-inherit',
  }

  const value = locale ?? defaultLocale

  return (
    <Select onValueChange={changeLocale} value={value}>
      <LanguageSelectionTrigger currentValue={value} />
      <SelectContent className={classes.content}>
        <LanguageSelectionList sidebarItems={sidebarItems} width={width} />
      </SelectContent>
    </Select>
  )
})
