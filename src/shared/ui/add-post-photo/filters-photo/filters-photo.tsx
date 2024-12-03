'use client'
import React, { useState } from 'react'

import { ReturnComponent } from '@/shared'

import { FilterValue } from './filter-value-type'
import { FiltersList } from './filteres-list'
import { PhotoCarouselFilters } from './photo-carousel-filters'

export const FiltersPhoto = (): ReturnComponent => {
  const [filter, setFilter] = useState<FilterValue>('normal')
  const changeFilterHandler = event => setFilter(event.currentTarget.value)

  return (
    <div className={'flex items-start'}>
      <PhotoCarouselFilters currentFilter={filter} />
      <FiltersList currentFilter={filter} onChange={changeFilterHandler} />
    </div>
  )
}
