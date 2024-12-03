export type ModalState = 'add-photo' | 'cropping' | 'filters' | 'publication'

export type ImageSettings = {
  aspect: number
  croppedArea: CroppedAreaType
  zoom: number
}

export type Image = {
  id: string
  newSrc: null | string
  settings: ImageSettings
  src: string
}

export type AddPostPhotoStore = {
  addCroppedImage: (croppedImage: string, id: string) => void
  addImage: (src: string) => void
  images: Image[]
  modalState: ModalState
  removeImage: (id: string) => void
  setModalStateTo: (state: ModalState) => void
  setOptions: (action: SetOptionsAction) => void
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
  options: 'aspect' | 'croppedArea' | 'zoom'
  value: Area | CroppedAreaType | croppedAreaPixelsType | number
}
