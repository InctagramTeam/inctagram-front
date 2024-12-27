import { FilterValue } from '../model/types/add-post-photo-store.types'
export const getCanvasSettingFilter = (currentFilter: FilterValue): string => {
  switch (currentFilter) {
    case 'brightness':
      return 'brightness(1.25)'
    case 'contrast':
      return 'contrast(1.25)'
    case 'grayscale':
      return 'grayscale(100%)'
    case 'hueRotate':
      return 'hue-rotate(90deg)'
    case 'invert':
      return 'invert(100%)'
    case 'saturate':
      return 'saturate(1.5)'
    case 'sepia':
      return 'sepia(100%)'
    default:
      return 'none'
  }
}
