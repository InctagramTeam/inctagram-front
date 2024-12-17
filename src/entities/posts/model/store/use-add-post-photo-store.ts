import {
  AddPostPhotoStore,
  CroppedArea,
  FilterValue,
  Image,
  PixelSizes,
  SetOptionsAction,
  SetSrcAction,
} from '@/entities/posts/model/types/add-post-photo-store.types'
import { images } from 'next/dist/build/webpack/config/blocks/images'
import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'

export const useAddPostPhotoStore = create<AddPostPhotoStore>(set => ({
  modalState: 'add-photo',
  images: [],
  setDescription: description => set({ description }),
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
          pixelSizes: { width: 0, height: 0 },
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
  removeImages: () =>
    set(() => {
      return { images: [] }
    }),
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
            updatedImage.settings.croppedArea = action.value as CroppedArea
            break
          case 'zoom':
            updatedImage.settings.zoom = action.value as number
            break
          case 'filter':
            updatedImage.settings.filter = action.value as FilterValue
            break
          case 'pixelSizes':
            updatedImage.settings.pixelSizes = action.value as PixelSizes
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
