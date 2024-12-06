import { FilterValue } from '@/entities/posts/model/types/add-post-photo-store.types'
import { cn } from '@/shared'

export const getImageFilterClass = (value: FilterValue) => {
  return cn(
    value === 'grayscale' && 'grayscale',
    value === 'brightness' && 'brightness-125',
    value === 'hueRotate' && 'hue-rotate-90',
    value === 'invert' && 'invert',
    value === 'saturate' && 'saturate-150',
    value === 'sepia' && 'sepia',
    value === 'contrast' && 'contrast-150'
  )
}
