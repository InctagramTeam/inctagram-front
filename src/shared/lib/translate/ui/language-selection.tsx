import * as React from 'react'

import { MD_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'
import { useLangSwitcher } from '@/shared/lib/translate/model/hooks/use-lang-switcher'
import { LanguageSelectionList } from '@/shared/lib/translate/ui/language-selection-list'
import { cn } from '@/shared/lib/utils'
import { Select, SelectContent } from '@/shared/ui/select/select'

import { LanguageSelectionTrigger } from './language-selection-trigger'

export const LanguageSelection = () => {
  const { changeLocale, defaultLocale, locale } = useLangSwitcher()

  const { width } = useResponsive()
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

  const value = locale || defaultLocale

  return (
    <Select onValueChange={changeLocale} value={value}>
      <LanguageSelectionTrigger currentValue={value} />
      <SelectContent className={classes.content}>
        <LanguageSelectionList />
      </SelectContent>
    </Select>
  )
}
