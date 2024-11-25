import { useCallback, useMemo, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { clsx } from 'clsx'

import { ButtonKey } from './types'

export const useScaleMenu = (currentImageId: string) => {
  const [activeButton, setActiveButton] = useState<ButtonKey>('base')
  const setOptions = useAddPostPhotoStore(state => state.setOptions)

  const handleButtonClick = useCallback(
    (id: string, aspect: number, key: ButtonKey) => {
      setOptions({
        id, // pass current image index
        options: 'aspect', // indicate updating 'aspect' parameter
        value: aspect, // pass aspect value
      })

      setActiveButton(key)
    },
    [currentImageId, setOptions]
  )

  const classes = useMemo(() => {
    return {
      list: 'flex flex-col gap-[12px] absolute z-2 bottom-[60px] left-[10px] max-w-[156px] w-full rounded-[4px] bg-black bg-opacity-50 px-[12px] py-[10px]',
      button: clsx(
        '!justify-between w-full relative py-[0] h-auto active:bg-transparent focus:bg-transparent bg-transparent text-Light-900 transition-colors',
        'after:transition-colors after:rounded-[2px] after:absolute after:right-0 after:top-0 after:border-2 after:border-solid after:border-Light-900 after:content-[""]'
      ),
      buttonAfterUnique: (key: ButtonKey) => {
        let classes = ''

        switch (key) {
          case '1':
            classes = 'after:h-[18px] after:w-[18px] after:translate-y-[15%]'
            break
          case '4:5':
            classes = 'after:h-[26px] after:w-[18px]'
            break
          case '16:9':
            classes = 'after:h-[20px] after:w-[26px] after:translate-y-[15%]'
            break
          case 'base':
            classes = 'after:hidden '
            break
        }

        return classes
      },
    }
  }, [])

  return { classes, handleButtonClick, activeButton }
}
