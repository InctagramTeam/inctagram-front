import { useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Swiper } from 'swiper/types'

import { Menu } from './cropping-photo-button'

export const useCroppingPhoto = (openChangeModalClose: (value: boolean) => void) => {
  const [showMenu, setShowMenu] = useState<Menu>(undefined)
  const images = useAddPostPhotoStore(state => state.images)
  const removeImage = useAddPostPhotoStore(state => state.removeImage)
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null)

  const [currentImageId, setCurrentImageId] = useState<string>(images[0].id)

  const deleteImgCallback = (id: string) => {
    images.length === 1 ? openChangeModalClose(true) : removeImage(id)
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
