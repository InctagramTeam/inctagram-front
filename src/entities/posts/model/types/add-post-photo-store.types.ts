export type ModalState = 'add-photo' | 'cropping' | 'filters' | 'publication'

export type ImageSettings = {
  aspect: number
  croppedArea: CroppedAreaType
  filter: FilterValue
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
  images: Image[]
  modalState: ModalState
  removeImage: (id: string) => void
  setModalStateTo: (state: ModalState) => void
  setOptions: (action: SetOptionsAction) => void
  setSrc: (action: SetSrcAction) => void
}

export type Area = {
  height: number
  width: number
  x: number
  y: number
}

export type CroppedAreaType = { x: number; y: number }

type croppedAreaPixelsType = { height: number; width: number }

export type SetOptionsAction = {
  id: string
  options: 'aspect' | 'croppedArea' | 'filter' | 'zoom'
  value: Area | CroppedAreaType | FilterValue | croppedAreaPixelsType | number
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
