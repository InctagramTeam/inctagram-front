import {
  AddPostPhotoStore,
  Image,
  SetOptionsAction,
} from '@/entities/posts/model/types/AddPostPhotoStore.types'
import { create } from 'zustand'

export const useAddPostPhotoStore = create<AddPostPhotoStore>(set => ({
  modalState: 'add-photo',
  images: [],
  addImage: (image: string) =>
    set(state => {
      const newImage: Image = {
        aspect: 1,
        croppedArea: { x: 0, y: 0 },
        image,
        zoom: 1,
        cropped: null,
      }

      return {
        images: [...state.images, newImage],
      }
    }),
  setModalStateTo: state => set({ modalState: state }),
  removeImage: (index: number) =>
    set(state => ({
      images: state.images.filter((_, i) => i !== index),
    })),
  setOptions: (action: SetOptionsAction) =>
    set(state => {
      const updatedImages = [...state.images] // Создаем копию массива изображений
      const image = updatedImages[action.index] // Находим изображение по индексу

      if (image) {
        switch (action.options) {
          case 'aspect':
            image.aspect = action.value as number
            break
          case 'croppedArea':
            image.croppedArea = action.value as { x: number; y: number }
            break
          case 'zoom':
            image.zoom = action.value as number
            break
        }
      }

      return { images: updatedImages }
    }),
  addCroppedImage: (croppedImage: string, index: number) =>
    set(state => {
      const updatedImages = [...state.images]

      updatedImages[index].cropped = croppedImage // Сохраняем обрезанное изображение

      return { images: updatedImages }
    }),
}))
