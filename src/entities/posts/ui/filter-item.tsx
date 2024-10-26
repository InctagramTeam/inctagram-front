'use client'
import React, { ChangeEvent, ComponentPropsWithoutRef } from 'react'

import { Input, ReturnComponent, cn } from '@/shared'
import Image from 'next/image'
import { FilterValue } from '@/entities/posts/model/types/filter-value'

type FilterItemProps = {
  currentFilter: string
  imageClass?: string
  label: string
  onChange: (value: ChangeEvent<HTMLInputElement> | undefined) => void
  value: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'label' | 'name' | 'onChange' | 'type' | 'value'>
// Стоит ли мудрить с пропсами, делать Omit? Типо вдруг, мы захотим еще что-то передать? Или делаем все по необходимости?
export const FilterItem = ({
  imageClass,
  id,
  currentFilter,
  value,
  ...rest
}: FilterItemProps): ReturnComponent => {
  const classes = {
    container: 'relative min-w-full',
    input: cn(`sr-only`),
    label: cn(
      `flex flex-col gap-[6px] text-center !text-Light-100 text-regular-text-16 cursor-pointer hover:!text-Light-700 transition-colors`,
      currentFilter === value && '!text-Primary-500 pointer-events-none hover:!text-Primary-500'
    ),
    imageClass: cn('aspect-square', imageClass),
  }

  return (
    <Input
      {...rest}
      className={classes.container}
      id={value}
      inputProps={{ className: classes.input }}
      labelProps={{
        className: classes.label,
        htmlFor: id,
        children: (
          <Image
            alt={'Photo'}
            className={classes.imageClass}
            height={108}
            src={'/man.png'}
            width={108}
          />
        ),
      }}
      name={'filters'}
      type={'radio'}
      value={value}
    />
  )
}
