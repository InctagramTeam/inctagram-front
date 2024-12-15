export type ModalState = 'add-photo' | 'cropping' | 'filters' | 'publication'

export type ImageSettings = {
  aspect: number
  croppedArea: CroppedArea
  filter: FilterValue
  pixelSizes: PixelSizes
  zoom: number
}

export type Image = {
  baseSrc: string
  croppedSrc: null | string
  filteredSrc: null | string
  id: string
  settings: ImageSettings
}

export type AddPostPhotoStore = {
  addImage: (src: string) => void
  description: string
  images: Image[]
  modalState: ModalState
  removeImage: (id: string) => void
  removeImages: () => void
  setDescription: (description: string) => void
  setModalStateTo: (state: ModalState) => void
  setOptions: (action: SetOptionsAction) => void
  setSrc: (action: SetSrcAction) => void
}

export type CroppedArea = { x: number; y: number }
export type PixelSizes = { height: number; width: number }

export type SetOptionsAction = {
  id: string
  options: 'aspect' | 'croppedArea' | 'filter' | 'pixelSizes' | 'zoom'
  value: CroppedArea | FilterValue | PixelSizes | number
}

export type SetSrcAction = {
  id: string
  newSrc: string
  type: 'cropped' | 'filtered'
}

export type FilterValue =
  | 'brightness'
  | 'contrast'
  | 'grayscale'
  | 'hueRotate'
  | 'invert'
  | 'normal'
  | 'saturate'
  | 'sepia'
