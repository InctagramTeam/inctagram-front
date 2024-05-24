import * as React from 'react'

import { cn } from '@/shared/lib/utils'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/shared/ui/select/select'
import { SelectItemProps, SelectProps } from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

type Props = {
  isMobile: boolean
  items: SelectItemProps[]
} & SelectProps

export const LanguageSelection = ({ isMobile = false, items, value, ...rest }: Props) => {
  const classes = {
    content: cn(
      'rounded-b-[2px] bg-Dark-500 border border-Light-100',
      !isMobile && 'w-[164px] border-t-0',
      isMobile && 'min-w-0'
    ),
    flag: 'w-[20px] h-[20px] object-contain',
    item: cn(
      `flex gap-[12px] h-auto px-[12px] py-[6px] cursor-pointer transition-colors duration-300 
    hover:!text-Primary-500 hover:bg-Dark-300`,
      !isMobile && `w-full max-w-full`,
      isMobile && 'max-w-max'
    ),
    itemInner: 'flex gap-[12px] text-inherit',
    trigger: cn(
      `focus:border-Dark-100
    focus-visible:text-Light-900 focus-visible:ring-2 focus-visible:ring-offset-Primary-500 focus-visible:border-transparent`,
      !isMobile &&
        `w-[164px] gap-[12px] rounded-[2px] transition-colors duration-300 px-[12px] data-[state=open]:border-Light-100 data-[state=open]:bg-Dark-500
    hover:text-Light-900 hover:border-Light-900 justify-between`,
      isMobile && `gap-[2px] border-none justify-normal max-w-max`
    ),
    triggerInner: cn(!isMobile && `flex items-center gap-[12px]`),
  }

  return (
    <Select value={value} {...rest}>
      <SelectTrigger className={classes.trigger}>
        <div className={classes.triggerInner}>
          <Image
            alt={''}
            aria-hidden
            className={classes.flag}
            height={24}
            src={`/flags/${value}.png`}
            width={24}
          />
          {!isMobile && items.find(item => item.value === value)?.textValue}
        </div>
        <ChevronDown aria-hidden />
      </SelectTrigger>
      <SelectContent className={classes.content}>
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
      </SelectContent>
    </Select>
  )
}
