import React, { memo } from 'react'

import { Button } from '@/shared'
import { PictureWithoutBackGround } from '@/shared/assets/icons'
import { clsx } from 'clsx'

import { listVariants } from './data'
import { useScaleMenu } from './use-scale-menu'

type Props = {
  currentImageId: string
  id: string
}

export const ScaleMenu = memo(({ currentImageId, id }: Props) => {
  const { classes, handleButtonClick, activeButton } = useScaleMenu(currentImageId)

  return (
    <ul className={classes.list} id={id}>
      {listVariants.map((variant, index) => (
        <li key={variant.key}>
          <Button
            aria-pressed={activeButton === variant.key}
            className={clsx(
              variant.key === activeButton && '!text-Light-100 after:border-Light-100',
              classes.button,
              classes.buttonAfterUnique(variant.key)
            )}
            onClick={() => handleButtonClick(currentImageId, variant.aspect, variant.key)}
            type={'button'}
            variant={'text'}
          >
            {variant.text}
            {variant.key === 'base' && <PictureWithoutBackGround aria-hidden />}
          </Button>
        </li>
      ))}
    </ul>
  )
})
