import * as React from 'react'
import { memo } from 'react'

import { Language } from '@/feature/translate/model'
import {
  LanguageSelectionList,
  Select,
  SelectContent,
  cn,
  useLangSwitcher,
  useResponsive,
} from '@/shared'

import { LanguageSelectionTrigger } from './'

type Props = {
  sidebarItems: Language[]
}

export const LanguageSelection = memo(({ sidebarItems }: Props) => {
  const { changeLocale, defaultLocale, locale } = useLangSwitcher()
  const { sm } = useResponsive()

  const classes = {
    content: cn(
      'bg-Dark-500 border border-Light-100 w-[--radix-popper-anchor-width]',
      !sm && ' border-t-0 rounded-b-[2px]',
      sm && 'min-w-0 rounded-[2px]'
    ),
    flag: 'w-[20px] h-[20px] object-contain',
    item: cn(
      `flex gap-[12px] h-auto px-[12px] py-[6px] cursor-pointer transition-colors duration-300 
    hover:!text-Primary-500 hover:bg-Dark-300`,
      sm && 'max-w-max'
    ),
    itemInner: 'flex gap-[12px] text-inherit',
  }

  const value = locale || defaultLocale

  return (
    <Select onValueChange={changeLocale} value={value}>
      <LanguageSelectionTrigger currentValue={value} />
      <SelectContent className={classes.content}>
        <LanguageSelectionList sidebarItems={sidebarItems} />
      </SelectContent>
    </Select>
  )
})
