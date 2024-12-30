'use client'
import React, { ComponentPropsWithoutRef, ReactNode, memo } from 'react'

import { FilterValue } from '@/entities/posts/model/types/add-post-photo-store.types'
import { EMPTY_STRING, Input, ReturnComponent, cn } from '@/shared'
import Image from 'next/image'

import { getImageFilterClass } from './get-image-filter-class'
import { useFilterItem } from './use-filter-item'

type Props = {
  currentImageId: string
  label: string
  value: FilterValue
} & Omit<ComponentPropsWithoutRef<'input'>, 'label' | 'name' | 'onChange' | 'type' | 'value'>
export const FilterItem = memo(({ id, currentImageId, value, ...rest }: Props): ReturnComponent => {
  const { classes, changeHandler, currentImage, currentFilter } = useFilterItem(
    value,
    currentImageId
  )

  return (
    <Input
      {...rest}
      aria-checked={currentFilter === value}
      className={classes.container}
      id={value}
      inputProps={{ className: classes.input }}
      labelProps={{
        className: classes.label,
        htmlFor: id,
        children: (
          <Image
            alt={EMPTY_STRING}
            className={cn(getImageFilterClass(value), 'h-[108px] w-full object-cover')}
            height={0}
            src={currentImage?.baseSrc || ''}
            width={0}
          />
        ),
      }}
      name={'filters'}
      onChange={changeHandler}
      type={'radio'}
      value={value}
    />
  )
})
