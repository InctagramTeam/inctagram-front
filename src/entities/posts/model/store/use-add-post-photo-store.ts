import {
  AddPostPhotoStore,
  CroppedAreaType,
  FilterValue,
  Image,
  SetOptionsAction,
  SetSrcAction,
} from '@/entities/posts/model/types/add-post-photo-store.types'
import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
export const useAddPostPhotoStore = create<AddPostPhotoStore>(set => ({
  modalState: 'add-photo',
  images: [],
  addImage: (src: string) =>
    set(state => {
      const newImage: Image = {
        id: uuidv4(),
        baseSrc: src,
        croppedSrc: null,
        filteredSrc: null,
        settings: {
          aspect: 1,
          croppedArea: { x: 0, y: 0 },
          zoom: 1,
          filter: 'normal',
        },
      }

      return {
        images: [...state.images, newImage],
      }
    }),
  setModalStateTo: state => set({ modalState: state }),
  removeImage: (id: string) =>
    set(state => ({
      images: state.images.filter(image => image.id !== id),
    })),
  setOptions: (action: SetOptionsAction) =>
    set(state => {
      const updatedImages = [...state.images] // Создаем копию массива изображений
      const image = updatedImages.find(image => image.id === action.id) // Находим изображение по индексу

      if (image) {
        const updatedImage: Image = { ...image }

        switch (action.options) {
          case 'aspect':
            updatedImage.settings.aspect = action.value as number
            break
          case 'croppedArea':
            updatedImage.settings.croppedArea = action.value as CroppedAreaType
            break
          case 'zoom':
            updatedImage.settings.zoom = action.value as number
            break
          case 'filter':
            updatedImage.settings.filter = action.value as FilterValue
        }
      }

      return { images: updatedImages }
    }),
  setSrc: (action: SetSrcAction) =>
    set(state => {
      const updatedImages = [...state.images] // Создаем копию массива изображений
      const image = updatedImages.find(image => image.id === action.id) // Находим изображение по индексу

      if (image) {
        switch (action.type) {
          case 'cropped':
            image.croppedSrc = action.newSrc
            break
          case 'filtered':
            image.filteredSrc = action.newSrc
        }
      }

      return { images: updatedImages }
    }),
}))
