export type ModalState = 'add-photo' | 'cropping' | 'filters' | 'publication'

export type Image = {
  aspect: number
  cropped: null | string
  croppedArea: { x: number; y: number }
  image: string
  zoom: number
}

export type AddPostPhotoStore = {
  addImage: (image: string) => void
  images: Image[]
  modalState: ModalState
  setModalStateTo: (state: ModalState) => void
}
