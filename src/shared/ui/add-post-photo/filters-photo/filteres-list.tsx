import React from 'react'

import { ReturnComponent, useTranslation } from '@/shared'

import { FilterItem } from './filter-item/filter-item'
import { filtersList } from './filters-list-data'

type Props = {
  currentImageId: string
}
export const FiltersList = ({ currentImageId }: Props): ReturnComponent => {
  const { t } = useTranslation()

  return (
    <div
      className={'grid w-full max-w-[480px] grid-cols-3 gap-[24px] self-start px-[55px] py-[24px]'}
    >
      <span className={'sr-only'}>{t.uploadPhoto.filter}</span>
      {filtersList.map(item => (
        <FilterItem
          currentImageId={currentImageId}
          key={item.value}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
  )
}
