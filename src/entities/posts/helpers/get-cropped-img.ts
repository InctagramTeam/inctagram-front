import { Area, FilterValue } from '@/entities/posts/model/types/add-post-photo-store.types'

import { getCanvasSettingFilter } from './get-canvas-setting-filter'

export const getCroppedImg = (
  imageSrc: null | string,
  pixelCrop: Area,
  filter?: FilterValue
): Promise<string> => {
  const image = new Image()

  image.src = imageSrc || ''

  return new Promise(resolve => {
    image.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        return
      }
      const { x, y, width, height } = pixelCrop

      canvas.width = width
      canvas.height = height
      ctx.filter = 'none'
      if (filter) {
        ctx.filter = getCanvasSettingFilter(filter)
      }
      ctx.drawImage(image, x, y, width, height, 0, 0, width, height)
      // ctx.drawImage(image, x, x, width, height)

      resolve(canvas.toDataURL('image/jpeg'))
    }
  })
}
