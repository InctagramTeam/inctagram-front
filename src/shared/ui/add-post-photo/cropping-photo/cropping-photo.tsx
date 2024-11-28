import React, { useEffect, useRef, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { EasyCrop } from '@/shared/ui/add-post-photo/easy-crop'
import { register } from 'swiper/element/bundle'
import { A11y, Controller, Navigation, Thumbs } from 'swiper/modules'
import { SwiperClass, SwiperSlide } from 'swiper/react'

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

  const swiperMainRef = useRef(null)
  const swiperThumbRef = useRef(null)

  useEffect(() => {
    register()

    if (swiperMainRef?.current) {
      const params = {
        allowTouchMove: false,
        modules: [Navigation, A11y, Thumbs, Controller],
        navigation: true,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 12,
        thumbs: { swiper: thumbsSwiper },
        className: 'h-full w-full',
        on: {
          update: swiper => {
            console.log(swiper, 'update')
          },
          slideChange: () => {
            //setCurrentImageId(images[swiperMainRef.current.swiper.activeIndex].id)
          },
        },
      }

      Object.assign(swiperMainRef?.current, params)

      // swiperMainRef?.current.initialize()
    }
  }, [thumbsSwiper, showMenu])

  console.log(showMenu ?? 'all-hide')

  return (
    <div className={'relative h-[50vh]'}>
      <div className={'h-full w-full'}>
        <swiper-container
          // init={false}
          key={showMenu === 'add-photos-menu' ? showMenu : 'base'}
          ref={swiperMainRef}
        >
          {images?.map(photo => (
            <SwiperSlide className={'cursor-default'} key={photo.id}>
              <EasyCrop
                aspect={photo.settings.aspect}
                croppedArea={photo.settings.croppedArea}
                currentImageId={photo.id}
                image={photo.src}
                zoom={photo.settings.zoom}
              />
            </SwiperSlide>
          ))}
        </swiper-container>
        {/*<Carousel*/}
        {/*  key={showMenu}*/}
        {/*  ref={swiperMainRef}*/}
        {/*  setCurrentImageId={setCurrentImageId}*/}
        {/*  thumbsSwiper={thumbsSwiper}*/}
        {/*/>*/}
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
          ref={swiperThumbRef}
        />
      )}
    </div>
  )
}
