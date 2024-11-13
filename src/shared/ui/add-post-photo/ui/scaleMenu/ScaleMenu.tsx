import React, { useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Button, Text } from '@/shared'
import {
  InvertedRectangle,
  PictureWithoutBackGround,
  Rectangle,
  Square,
} from '@/shared/assets/icons'
import { clsx } from 'clsx'

type Props = {
  ind: number
}
const buttonArr = [
  {
    active: false,
    aspect: 1,
    svg: <PictureWithoutBackGround />,
    text: 'Оригинал',
  },
  { active: false, aspect: 1, svg: <Square />, text: '1:1' },
  {
    active: false,
    aspect: 5 / 9,
    svg: <Rectangle />,
    text: '4:5',
  },
  {
    active: false,
    aspect: 16 / 9,
    svg: <InvertedRectangle />,
    text: '16:9',
  },
]

export const ScaleMenu = ({ ind }: Props) => {
  const [arrayButton, setArrayButton] = useState(buttonArr)
  const setOptions = useAddPostPhotoStore(state => state.setOptions)
  const handleButtonClick = (index: number, aspect: number) => {
    setOptions({
      index: ind, // pass current image index
      options: 'aspect', // indicate updating 'aspect' parameter
      value: aspect, // pass aspect value
    })
    const updatedArrayButton = arrayButton.map((btn, i) => ({
      ...btn,
      active: i === index,
    }))

    setArrayButton(updatedArrayButton)
  }
  const buttons = arrayButton.map((el, index) => {
    const styleButton = clsx(
      'flex items-center justify-between w-full', // common styling for button
      el.active ? 'text-white fill-white' : 'text-gray-500 fill-gray-500'
    )

    return (
      <Button
        className={styleButton}
        fullWidth
        key={index}
        onClick={() => handleButtonClick(index, el.aspect)}
        variant={'link'}
      >
        <Text>{el.text}</Text>
        {el.svg}
      </Button>
    )
  })

  return (
    <div
      className={'absolute bottom-[60px] left-[10px] h-[152px] w-[156px] bg-black bg-opacity-50'}
    >
      {buttons}
    </div>
  )
}
