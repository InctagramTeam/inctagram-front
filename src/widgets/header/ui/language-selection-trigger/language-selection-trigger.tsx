import * as React from 'react'

import ChevronDownIcon from '@/shared/assets/icons/ChevronIcon'
import { cn } from '@/shared/lib/utils'
import { SelectTrigger } from '@/shared/ui/select/select'
import Image from 'next/image'

type Props = {
  currentTextValue: string
  currentValue: string
  isMobile: boolean
}

export const LanguageSelectionTrigger = ({ currentTextValue, currentValue, isMobile }: Props) => {
  const classes = {
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
    <SelectTrigger className={classes.trigger}>
      <div className={classes.triggerInner}>
        <Image
          alt={''}
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
  )
}
