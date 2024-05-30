import { Select, SelectContent, SelectTrigger } from '@/shared/ui/select/select'
import Image from 'next/image'
import ChevronDownIcon from '@/shared/assets/icons/ChevronDownIcon'
import { LanguageSelectionList } from '@/widgets/header/ui/language-selection-list'
import { getLanguages } from '@/shared/lib/translate'
import * as React from 'react'
import { useLangSwitcher } from '@/feature/use-lang-switcher/use-lang-switcher'
import { cn } from '@/shared/lib/utils'
import { MD_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'
import { EMPTY_STRING } from '@/shared/constants/base'

type Props = {}

export const LanguageSelection = ({ ...rest }: Props) => {
  const { changeLocale, defaultLocale, locale } = useLangSwitcher()

  const { width } = useResponsive()
  const isDesktop = width && width > MD_BREAKPOINT
  const isMobile = !isDesktop

  const selectedItem = getLanguages().find(({ value }) => value === value)
  const currentValue = selectedItem?.value ?? EMPTY_STRING
  const currentTextValue = selectedItem?.textValue ?? EMPTY_STRING

  const classes = {
    content: cn(
      'bg-Dark-500 border border-Light-100',
      !isMobile && 'w-[164px] border-t-0 rounded-b-[2px]',
      isMobile && 'min-w-0 rounded-[2px]'
    ),
    flag: 'w-[20px] h-[20px] object-contain',
    icon: 'basis-[24px] shrink-0 h-[24px] icon transition-rotate duration-300',
    trigger: cn(
      `[&_.icon]:data-[state=open]:rotate-180 focus:border-Dark-100
    focus-visible:text-Light-900 focus-visible:ring-2 focus-visible:ring-offset-Primary-500 focus-visible:border-transparent`,
      !isMobile &&
        `w-[164px] gap-[12px] rounded-[2px] transition-colors duration-300 px-[12px] data-[state=open]:border-Light-100 data-[state=open]:bg-Dark-500
    hover:text-Light-900 hover:border-Light-900 justify-between`,
      isMobile && `gap-[2px] border-none justify-normal min-w-max ring-0 p-0 `
    ),
    triggerInner: cn(
      !isMobile && `flex items-center gap-[12px]`,
      isMobile && `basis-[20px] shrink-0 h-[20px]`
    ),
  }

  return (
    <Select onValueChange={changeLocale} value={locale || defaultLocale} {...rest}>
      <SelectTrigger className={classes.trigger}>
        <div className={classes.triggerInner}>
          <Image
            alt={currentTextValue}
            aria-hidden
            className={classes.flag}
            height={24}
            src={`/flags/${currentValue}.png`}
            width={24}
          />
          {!isMobile && currentTextValue}
        </div>
        <ChevronDownIcon aria-hidden className={classes.icon} />
      </SelectTrigger>
      <SelectContent className={classes.content}>
        <LanguageSelectionList isMobile={isMobile} items={getLanguages()} />
      </SelectContent>
    </Select>
  )
}
