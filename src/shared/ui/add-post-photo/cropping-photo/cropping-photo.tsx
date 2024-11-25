import React, { useRef, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { SwiperClass } from 'swiper/react'

import { Carousel } from '../carousel'
import { AddPhotosMenu } from '../menu/add-photos-menu/add-photos-menu'
import { ScaleMenu } from '../menu/scale-menu/scale-menu'
import { ZoomMenu } from '../menu/zoom-menu'
import { CroppingPhotoButton, Menu } from './cropping-photo-button'

const menu: Exclude<Menu, undefined>[] = ['scale-menu', 'zoom-menu', 'add-photos-menu']

export const CroppingPhoto = () => {
  const [showMenu, setShowMenu] = useState<Menu>(undefined)
  const images = useAddPostPhotoStore(state => state.images)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)
  const removeImage = useAddPostPhotoStore(state => state.removeImage)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)

  const [currentImageId, setCurrentImageId] = useState<string>(
    images[thumbsSwiper]?.id ?? images[0].id
  )
  const deleteImgCallback = (id: string) => {
    removeImage(id)
    if (images.length <= 1) {
      setModalStateTo('add-photo')
    }
  }

  return (
    <div className={'relative h-[50vh]'}>
      <div className={'h-full w-full'}>
        <Carousel setCurrentImageId={setCurrentImageId} thumb={thumbsSwiper} />
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
      {showMenu === 'add-photos-menu' && (
        <AddPhotosMenu
          changeThumbSwiper={setThumbsSwiper}
          deleteImgCallback={deleteImgCallback}
          id={'add-photos-menu'}
          thumb={thumbsSwiper}
        />
      )}
    </div>
  )
}
