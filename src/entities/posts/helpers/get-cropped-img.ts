import { getCanvasSettingFilter } from '@/entities/posts/helpers/get-canvas-setting-filter'
import {
  CroppedArea,
  FilterValue,
  PixelSizes,
} from '@/entities/posts/model/types/add-post-photo-store.types'

export const getCroppedImg = (
  imageSrc: null | string,
  pixelCrop: CroppedArea & PixelSizes,
  filter?: FilterValue,
  isRecropping?: boolean
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

      isRecropping
        ? ctx.drawImage(image, x, x, width, height)
        : ctx.drawImage(image, x, y, width, height, 0, 0, width, height)

      resolve(canvas.toDataURL('image/jpeg'))
    }
  })
}
