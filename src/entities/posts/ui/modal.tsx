'use client'

import React, { useState } from 'react'

import { FilterItem } from '@/entities/posts/ui/filter-item'
import { Modal, cn, ReturnComponent } from "@/shared";
import Image from 'next/image'

const filterItems = [
  { label: 'Normal', id: 'normal' },
  { label: 'Brightness', id: 'brightness' },
  { label: 'Hue Rotate', id: 'hueRotate' },
  { label: 'Invert', id: 'invert' },
  { label: 'Grayscale', id: 'grayscale' },
  { label: 'Saturate', id: 'saturate' },
  { label: 'Sepia', id: 'sepia' },
  { label: 'Contrast', id: 'contrast' },
]

export const Filters = (): ReturnComponent => {
  const [isOpen, setIsOpen] = useState(true)
  const [filter, setFilter] = useState('normal')

  const changeFilterHandler = event => setFilter(event.currentTarget.value)

  const getImageFilterClass = (value: string) => {
    return cn(
      value === 'grayscale' && 'grayscale',
      value === 'brightness' && 'brightness-125',
      value === 'hueRotate' && 'hue-rotate-90',
      value === 'invert' && 'invert',
      value === 'saturate' && 'saturate-150',
      value === 'sepia' && 'sepia',
      value === 'contrast' && 'contrast-150'
    )
  }

  const classes = {
    container: 'flex',
    slider: 'max-w-[490px] w-full',
    items: 'grid grid-cols-3 gap-[24px] px-[55px] py-[24px] self-start',
    sliderImage: cn('h-full object-cover min-h-[500px]', getImageFilterClass(filter)),
  }

  return (
    <Modal onOpenChange={setIsOpen} open={isOpen}>
      <Modal.Button asChild className={'rounded p-2 hover:bg-gray-200'}>
        Test
      </Modal.Button>
      <Modal.Content
        classNameChildrenWrapper={'pt-[0px] pb-[0px] px-[0px]'}
        classNameContent={'!max-w-[972px] w-full'}
        title={`Edit Contact`}
      >
        <div className={classes.container}>
          <div className={classes.slider}>
            <Image
              alt={'Picture of the author'}
              className={classes.sliderImage}
              height={500}
              src={'/man.png'}
              width={500}
            />
          </div>
          <div className={classes.items}>
            <span className={'sr-only'}></span>
            {filterItems.map(item => (
              <FilterItem
                currentFilter={filter}
                id={item.id}
                imageClass={getImageFilterClass(item.id)}
                isChecked={item.checked ?? false}
                key={item.id}
                label={item.label}
                onChange={changeFilterHandler}
                value={item.id}
              />
            ))}
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}
