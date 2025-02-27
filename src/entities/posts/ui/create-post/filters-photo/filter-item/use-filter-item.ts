import { ChangeEvent, useEffect, useMemo, useState } from 'react'

import { getCroppedImg, useAddPostPhotoStore } from '@/entities/posts'
import { FilterValue } from '@/entities/posts/model/types/add-post-photo-store.types'
import { cn } from '@/shared'

export const useFilterItem = (value: FilterValue, currentImageId: string) => {
  const currentImage = useAddPostPhotoStore(state =>
    state.images.find(image => image.id === currentImageId)
  )
  const images = useAddPostPhotoStore(state => state.images)

  const [currentFilter, setCurrentFilter] = useState(currentImage?.settings.filter)

  useEffect(() => {
    setCurrentFilter(currentImage?.settings.filter)
  }, [currentImageId, currentImage, images])

  const setOptions = useAddPostPhotoStore(state => state.setOptions)
  const setCroppedImage = useAddPostPhotoStore(state => state.setSrc)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.currentTarget.value as FilterValue

    newFilter && setOptions({ options: 'filter', id: currentImageId, value: newFilter })

    getCroppedImg(
      currentImage?.croppedSrc || '',
      {
        x: 0,
        y: 0,
        width: currentImage?.settings.pixelSizes.width || 0,
        height: currentImage?.settings.pixelSizes.height || 0,
      },
      currentImage?.settings.filter,
      true
    ).then(imageSrc => {
      setCroppedImage({
        id: currentImageId,
        newSrc: imageSrc,
        type: 'filtered',
      })
    })
  }
  const classes = useMemo(() => {
    return {
      container: 'relative min-w-full',
      input: cn(`!sr-only`),
      label: cn(
        `flex flex-col gap-[6px] text-center !text-Light-100 text-regular-text-16 cursor-pointer hover:!text-Light-700 transition-colors`,
        currentFilter === value && '!text-Primary-500 pointer-events-none hover:!text-Primary-500'
      ),
      imageClass: 'aspect-square object-cover',
    }
  }, [currentFilter, value])

  return { classes, changeHandler, currentImage, currentFilter }
}
