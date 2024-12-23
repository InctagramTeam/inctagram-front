import { useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { SwiperClass } from 'swiper/swiper-react'

import { Menu } from './cropping-photo-button'

export const useCroppingPhoto = (openChangeModalClose: (value: boolean) => void) => {
  const [showMenu, setShowMenu] = useState<Menu>(undefined)
  const images = useAddPostPhotoStore(state => state.images)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)
  const removeImage = useAddPostPhotoStore(state => state.removeImage)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)

  const [currentImageId, setCurrentImageId] = useState<string>(
    images[thumbsSwiper]?.id ?? images[0].id
  )
  const deleteImgCallback = (id: string) => {
    if (images.length === 1) {
      openChangeModalClose(true)
    } else {
      removeImage(id)
    }

    // removeImage(id)
    // if (images.length <= 1) {
    //   setModalStateTo('add-photo')
    // }
  }

  return {
    thumbsSwiper,
    setCurrentImageId,
    showMenu,
    currentImageId,
    setThumbsSwiper,
    deleteImgCallback,
    setShowMenu,
  }
}
