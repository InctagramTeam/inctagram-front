import * as React from 'react'
import { memo } from 'react'

import {
  EMPTY_STRING,
  SelectTrigger,
  cn,
  getLanguages,
  useResponsive,
  useTranslation,
  ReturnComponent,
} from '@/shared'
import Image from 'next/image'
import { ChevronIcon } from '@/shared/assets/icons'

type Props = {
  currentValue?: string
}

export const LanguageSelectionTrigger = memo(({ currentValue }: Props): ReturnComponent => {
  const { sm } = useResponsive()
  const { t } = useTranslation()

  const currentTextValue = getLanguages(t).find(item => item.value === currentValue)?.textValue

  const classes = {
    flag: 'w-[20px] h-[20px] object-contain',
    icon: 'basis-[24px] shrink-0 h-[24px] icon transition-rotate duration-300',
    trigger: cn(
      `[&_.icon]:data-[state=open]:rotate-180 focus:border-Dark-100
    focus-visible:text-Light-900 focus-visible:ring-2 focus-visible:ring-offset-Primary-500 focus-visible:border-transparent`,
      !sm &&
        `gap-[12px] rounded-[2px] transition-colors duration-300 px-[12px] data-[state=open]:border-Light-100 data-[state=open]:bg-Dark-500
    hover:text-Light-900 hover:border-Light-900 justify-between`,
      sm && `gap-[2px] border-none justify-normal min-w-max ring-0 p-0 `
    ),
    triggerInner: cn(!sm && `flex items-center gap-[12px]`, sm && `basis-[20px] shrink-0 h-[20px]`),
  }

  return (
    <SelectTrigger className={classes.trigger}>
      <div className={classes.triggerInner}>
        <Image
          alt={currentTextValue ?? EMPTY_STRING}
          aria-hidden
          className={classes.flag}
          height={24}
          src={`/flags/${currentValue}.png`}
          width={24}
        />
        {!sm && currentTextValue}
      </div>
      <ChevronIcon aria-hidden className={classes.icon} />
    </SelectTrigger>
  )
})
