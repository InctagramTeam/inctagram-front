export type ModalState = 'add-photo' | 'cropping' | 'filters' | 'publication'
export type Image = {
  aspect: number
  cropped: null | string
  croppedArea: { x: number; y: number }
  image: string
  zoom: number
}
export type AddPostPhotoStore = {
  addCroppedImage: (croppedImage: string, index: number) => void
  addImage: (image: string) => void
  images: Image[]
  modalState: ModalState
  removeImage: (index: number) => void
  setModalStateTo: (state: ModalState) => void
  setOptions: (action: SetOptionsAction) => void
}
type Area = {
  height: number
  width: number
  x: number
  y: number
}
type croppedAreaType = { x: number; y: number }
type croppedAreaPixelsType = { height: number; width: number }
export type SetOptionsAction = {
  index: number
  options: 'aspect' | 'croppedArea' | 'zoom'
  value: Area | croppedAreaPixelsType | croppedAreaType | number
}
