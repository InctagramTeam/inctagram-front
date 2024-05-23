import { Select, SelectContent, SelectItem, SelectTrigger } from '@/shared/ui/select/select'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'
import { SelectItemProps, SelectProps } from '@radix-ui/react-select'
import Image from 'next/image'
import { cn } from '@/shared/lib/utils'

type Props = {
  items: SelectItemProps[]
  isMobile: boolean
} & SelectProps

export const LanguageSelection = ({ items, value, isMobile = false, ...rest }: Props) => {
  const classes = {
    trigger: cn(
      `focus:border-Dark-100
    focus-visible:text-Light-900 focus-visible:ring-2 focus-visible:ring-offset-Primary-500 focus-visible:border-transparent`,
      !isMobile &&
        `w-[164px] gap-[12px] rounded-[2px] transition-colors duration-300 px-[12px] data-[state=open]:border-Light-100 data-[state=open]:bg-Dark-500
    hover:text-Light-900 hover:border-Light-900 justify-between`,
      isMobile && `gap-[2px] border-none justify-normal max-w-max`
    ),
    triggerInner: cn(!isMobile && `flex items-center gap-[12px]`),
    flag: 'w-[20px] h-[20px] object-contain',
    content: cn(
      'rounded-b-[2px] bg-Dark-500 border border-Light-100',
      !isMobile && 'w-[164px] border-t-0',
      isMobile && 'min-w-0'
    ),
    item: cn(
      `flex gap-[12px] h-auto px-[12px] py-[6px] cursor-pointer transition-colors duration-300 
    hover:!text-Primary-500 hover:bg-Dark-300`,
      !isMobile && `w-full max-w-full`,
      isMobile && 'max-w-max'
    ),
    itemInner: 'flex gap-[12px] text-inherit',
  }

  return (
    <Select value={value} {...rest}>
      <SelectTrigger className={classes.trigger}>
        <div className={classes.triggerInner}>
          <Image
            className={classes.flag}
            alt={''}
            src={`/flags/${value}.png`}
            aria-hidden
            width={24}
            height={24}
          />
          {!isMobile && items.find(item => item.value === value)?.textValue}
        </div>
        <ChevronDown aria-hidden />
      </SelectTrigger>
      <SelectContent className={classes.content}>
        {items.map(item => (
          <SelectItem key={item.value} className={`${classes.item} ${item.className}`} {...item}>
            <div className={classes.itemInner}>
              <Image
                className={classes.flag}
                alt={item.textValue ?? ''}
                src={`/flags/${item.value}.png`}
                aria-hidden
                width={20}
                height={20}
              />
              {!isMobile && item.textValue}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
