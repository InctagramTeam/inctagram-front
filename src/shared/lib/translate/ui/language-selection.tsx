import * as React from 'react'

import { LanguageSelectionList } from '@/shared/lib/translate/ui/language-selection-list'

import { MD_BREAKPOINT } from '../../../constants/breakpoints'
import { Select, SelectContent } from '../../../ui/select/select'
import { useResponsive } from '../../hooks'
import { cn } from '../../utils'
import { useLangSwitcher } from '../model/hooks/use-lang-switcher'
import { LanguageSelectionTrigger } from './language-selection-trigger'

export const LanguageSelection = ({ ...rest }) => {
  const { changeLocale, defaultLocale, locale } = useLangSwitcher()

  const { width } = useResponsive()
  const isDesktop = width && width > MD_BREAKPOINT
  const isMobile = !isDesktop

  const classes = {
    content: cn(
      'bg-Dark-500 border border-Light-100',
      !isMobile && 'w-[164px] border-t-0 rounded-b-[2px]',
      isMobile && 'min-w-0 rounded-[2px]'
    ),
    flag: 'w-[20px] h-[20px] object-contain',
    item: cn(
      `flex gap-[12px] h-auto px-[12px] py-[6px] cursor-pointer transition-colors duration-300 
    hover:!text-Primary-500 hover:bg-Dark-300`,
      !isMobile && `w-full max-w-full`,
      isMobile && 'max-w-max'
    ),
    itemInner: 'flex gap-[12px] text-inherit',
  }

  return (
    <Select onValueChange={changeLocale} value={locale || defaultLocale} {...rest}>
      <LanguageSelectionTrigger />
      <SelectContent className={classes.content}>
        <LanguageSelectionList />
      </SelectContent>
    </Select>
  )
}
