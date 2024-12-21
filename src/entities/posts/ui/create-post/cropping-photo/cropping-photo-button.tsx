import React, { memo } from 'react'

import { Button, ReturnComponent, cn, useTranslation } from '@/shared'
import { Magnifier, Picture, Vectors } from '@/shared/assets/icons'

export type Menu = 'add-photos-menu' | 'scale-menu' | 'zoom-menu' | undefined

type Props = {
  className?: string
  currentShowMenu: Menu
  name: Menu
  setCurrentShowMenu: (value: Menu) => void
}
export const CroppingPhotoButton = memo(
  ({ name, currentShowMenu, setCurrentShowMenu, className }: Props): ReturnComponent => {
    const { t } = useTranslation()
    const handleShowMenu = (menu: Menu) => {
      menu === currentShowMenu ? setCurrentShowMenu(undefined) : setCurrentShowMenu(menu)
    }

    const getButtonColor = (value: Menu) => {
      return currentShowMenu === value ? '!text-Primary-500' : 'text-Light-100'
    }

    return (
      <Button
        aria-controls={name}
        aria-expanded={currentShowMenu === name}
        aria-haspopup
        aria-label={t.uploadPhoto.proportion}
        className={cn(getButtonColor(name), className)}
        onClick={() => handleShowMenu(name)}
        type={'button'}
      >
        {name === 'scale-menu' && <Vectors aria-hidden />}
        {name === 'zoom-menu' && <Magnifier aria-hidden />}
        {name === 'add-photos-menu' && <Picture aria-hidden />}
      </Button>
    )
  }
)
