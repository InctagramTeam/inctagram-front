import * as React from 'react'

import { MD_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'
import { getLanguages } from '@/shared/lib/translate'
import { cn } from '@/shared/lib/utils'
import { SelectItem } from '@/shared/ui/select/select'
import Image from 'next/image'

export const LanguageSelectionList = () => {
  const { width } = useResponsive()
  const isDesktop = width && width > MD_BREAKPOINT
  const isMobile = !isDesktop

  const classes = {
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
    <>
      {getLanguages().map(item => (
        <SelectItem className={classes.item} key={item.value} {...item}>
          <div className={classes.itemInner}>
            <Image
              alt={item.textValue ?? ''}
              aria-hidden
              className={classes.flag}
              height={20}
              src={`/flags/${item.value}.png`}
              width={20}
            />
            {!isMobile && item.textValue}
          </div>
        </SelectItem>
      ))}
    </>
  )
}
