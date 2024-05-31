import * as React from 'react'

import { cn } from '@/shared/lib/utils'
import { SelectItem } from '@/shared/ui/select/select'
import { SelectItemProps } from '@radix-ui/react-select'
import Image from 'next/image'

type Props = {
  isMobile: boolean
  items: SelectItemProps[]
}

export const LanguageSelectionList = ({ isMobile, items }: Props) => {
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
      {items.map(item => (
        <SelectItem className={`${classes.item} ${item.className}`} key={item.value} {...item}>
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
