'use client'

import React, { useState } from 'react'

import { FilterValue } from '@/entities/posts/model/types/filter-value'
import { FiltersList } from '@/entities/posts/ui/filters-list'
import { Slider } from '@/entities/posts/ui/slider'
import { Modal, ReturnComponent} from '@/shared'

export const ModalFilters = (): ReturnComponent => {
  const [isOpen, setIsOpen] = useState(true)
  const [filter, setFilter] = useState<FilterValue>('normal')

  const changeFilterHandler = event => setFilter(event.currentTarget.value)

  return (
    <Modal onOpenChange={setIsOpen} open={isOpen}>
      <Modal.Button asChild className={'rounded p-2 hover:bg-gray-200'}>
        Test
      </Modal.Button>
      <Modal.Content
        classNameChildrenWrapper={'!pt-[0] !pb-[0] !px-[0]'}
        classNameContent={'!max-w-[972px] w-full'}
        title={`Edit Contact`}
      >
        <div className={'flex items-start'}>
          <Slider currentFilter={filter} />
          <FiltersList currentFilter={filter} onChange={changeFilterHandler} />
        </div>
      </Modal.Content>
    </Modal>
  )
}
