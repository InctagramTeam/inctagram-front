import React, { ChangeEvent } from 'react'

import { FilterItem } from './filter-item'
import { filtersList } from './filters-list-data'
import { getImageFilterClass } from './get-image-filter-class'

type FiltersListProps = {
  currentFilter: string
  onChange: (value: ChangeEvent<HTMLInputElement> | undefined) => void
}
export const FiltersList = ({ currentFilter, onChange }: FiltersListProps) => {
  return (
    <div className={'grid grid-cols-3 gap-[24px] self-start px-[55px] py-[24px]'}>
      <span className={'sr-only'}></span>
      {filtersList.map(item => (
        <FilterItem
          currentFilter={currentFilter}
          imageClass={getImageFilterClass(item.value)}
          key={item.value}
          label={item.label}
          onChange={onChange}
          value={item.value}
        />
      ))}
    </div>
  )
}
