import React, { memo } from 'react'

import { Button, ReturnComponent, cn } from '@/shared'
import { PictureWithoutBackGround } from '@/shared/assets/icons'

import { listVariants } from './data'
import { useScaleMenu } from './use-scale-menu'

type Props = {
  currentImageId: string
  id: string
}

export const ScaleMenu = memo(({ currentImageId, id }: Props): ReturnComponent => {
  const { classes, handleButtonClick, activeButton } = useScaleMenu(currentImageId)

  return (
    <ul className={classes.list} id={id}>
      {listVariants.map((variant, index) => (
        <li key={variant.key}>
          <Button
            aria-pressed={activeButton === variant.key}
            className={cn(
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
