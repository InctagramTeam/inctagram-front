import { FilterValue } from './filter-value-type'

export const filtersList: { label: string; value: FilterValue }[] = [
  { label: 'Normal', value: 'normal' },
  { label: 'Brightness', value: 'brightness' },
  { label: 'Hue Rotate', value: 'hueRotate' },
  { label: 'Invert', value: 'invert' },
  { label: 'Grayscale', value: 'grayscale' },
  { label: 'Saturate', value: 'saturate' },
  { label: 'Sepia', value: 'sepia' },
  { label: 'Contrast', value: 'contrast' },
]
