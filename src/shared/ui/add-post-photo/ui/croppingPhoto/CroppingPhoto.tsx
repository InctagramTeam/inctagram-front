import React, { useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Button } from '@/shared'
import { Magnifier, Picture, Vectors } from '@/shared/assets/icons'
import { AddPhotosMenu } from '@/shared/ui/add-post-photo/ui/addPhotosMenu/AddPhotosMenu'
import { Carousel } from '@/shared/ui/add-post-photo/ui/carousel/Carousel'
import { ScaleMenu } from '@/shared/ui/add-post-photo/ui/scaleMenu/ScaleMenu'
import { ZoomMenu } from '@/shared/ui/add-post-photo/ui/zoomMenu/ZoomMenu'

type Menu = '' | 'add-photos-menu' | 'scale-menu' | 'zoom-menu'
export const CroppingPhoto = () => {
  const [showMenu, setShowMenu] = useState<Menu>('')
  const [ind, setInd] = useState<number>(0)
  const handleShowMenu = (menu: Menu) => {
    menu === showMenu ? setShowMenu('') : setShowMenu(menu)
  }
  const images = useAddPostPhotoStore(state => state.images)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)
  const removeImage = useAddPostPhotoStore(state => state.removeImage)
  const deleteImgCallback = (index: number) => {
    removeImage(index)
    if (images.length <= 1) {
      setModalStateTo('add-photo')
    }
  }

  return (
    <div className={'relative min-h-[564px] overflow-hidden'}>
      <div className={'relative h-[504px] w-[490px]'}>
        <Carousel />
      </div>
      <div className={'absolute bottom-[15px] left-[10px]'}>
        <Button onClick={() => handleShowMenu('scale-menu')}>
          <Vectors color={showMenu === 'scale-menu' ? '#397DF6' : '#fff'} />
        </Button>
      </div>
      <div className={'absolute bottom-[15px] left-[60px]'}>
        <Button onClick={() => handleShowMenu('zoom-menu')}>
          <Magnifier color={showMenu === 'zoom-menu' ? '#397DF6' : '#fff'} />
        </Button>
      </div>
      <div className={'absolute bottom-[15px] right-[10px]'}>
        <Button onClick={() => handleShowMenu('add-photos-menu')}>
          <Picture color={showMenu === 'add-photos-menu' ? '#397DF6' : '#fff'} />
        </Button>
      </div>
      {showMenu === 'scale-menu' && <ScaleMenu ind={ind} />}
      {showMenu === 'zoom-menu' && <ZoomMenu ind={ind} />}
      {showMenu === 'add-photos-menu' && <AddPhotosMenu deleteImgCallback={deleteImgCallback} />}
    </div>
  )
}
