import React from 'react'

import { AddPhotosMenu } from '@/entities/posts/ui/create-post/menu/add-photos-menu/add-photos-menu'
import { ScaleMenu } from '@/entities/posts/ui/create-post/menu/scale-menu/scale-menu'
import { ZoomMenu } from '@/entities/posts/ui/create-post/menu/zoom-menu/zoom-menu'
import { ReturnComponent, cn } from '@/shared'

import { Carousel } from '../carousel'
import { CroppingPhotoButton, Menu } from './cropping-photo-button'
import { useCroppingPhoto } from './use-cropping-photo'

const menu: Exclude<Menu, undefined>[] = ['scale-menu', 'zoom-menu', 'add-photos-menu']

export const CroppingPhoto = (): ReturnComponent => {
  const {
    thumbsSwiper,
    setCurrentImageId,
    showMenu,
    currentImageId,
    setThumbsSwiper,
    deleteImgCallback,
    setShowMenu,
  } = useCroppingPhoto()

  return (
    <div className={'relative h-[50vh] min-h-[440px]'}>
      <div className={'h-full w-full'}>
        <Carousel setCurrentImageId={setCurrentImageId} thumbsSwiper={thumbsSwiper} />
      </div>
      <div className={'absolute bottom-[15px] left-[15px] right-[15px] z-2 flex gap-[24px]'}>
        {menu.map(item => (
          <CroppingPhotoButton
            className={'last:ml-auto'}
            currentShowMenu={showMenu}
            key={item}
            name={item}
            setCurrentShowMenu={setShowMenu}
          />
        ))}
      </div>
      {showMenu === 'scale-menu' && <ScaleMenu currentImageId={currentImageId} id={'scale-menu'} />}
      {showMenu === 'zoom-menu' && <ZoomMenu currentImageId={currentImageId} id={'zoom-menu'} />}
      <AddPhotosMenu
        changeThumbSwiper={setThumbsSwiper}
        className={cn(showMenu !== 'add-photos-menu' ? 'hidden' : '')}
        deleteImgCallback={deleteImgCallback}
        id={'add-photos-menu'}
      />
    </div>
  )
}
