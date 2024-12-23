import { useEffect, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'

export const useZoomMenu = (currentImageId: string) => {
  const currentImage = useAddPostPhotoStore(state =>
    state.images.find(image => image.id === currentImageId)
  )

  const [zoom, setZoom] = useState<number | undefined>()

  useEffect(() => {
    setZoom(currentImage?.settings.zoom)
  }, [currentImageId])

  const setOptions = useAddPostPhotoStore(state => state.setOptions)

  const handleOnValueChange = (valueChange: number[]) => {
    const value = valueChange[0]

    setOptions({ id: currentImageId, value: value, options: 'zoom' })
    setZoom(value)
  }

  return { handleOnValueChange, zoom }
}
