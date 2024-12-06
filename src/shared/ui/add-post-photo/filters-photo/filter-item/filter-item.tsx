'use client'
import React, { ComponentPropsWithoutRef } from 'react'

import { FilterValue } from '@/entities/posts/model/types/add-post-photo-store.types'
import { Input, ReturnComponent } from '@/shared'
import Image from 'next/image'

import { getImageFilterClass } from './get-image-filter-class'
import { useFilterItem } from './use-filter-item'

type Props = {
  currentImageId: string
  label: string
  value: FilterValue
} & Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'label' | 'name' | 'onChange' | 'type' | 'value'>
export const FilterItem = ({
  imageClass,
  id,
  currentImageId,
  value,
  ...rest
}: Props): ReturnComponent => {
  const { classes, changeHandler, currentImage } = useFilterItem(value, currentImageId)

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
            className={getImageFilterClass(value)}
            height={108}
            src={currentImage?.baseSrc || ''}
            width={108}
          />
        ),
      }}
      name={'filters'}
      onChange={changeHandler}
      type={'radio'}
      value={value}
    />
  )
}
