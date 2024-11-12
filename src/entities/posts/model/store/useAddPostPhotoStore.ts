import { AddPostPhotoStore, Image } from '@/entities/posts/model/types/AddPostPhotoStore.types'
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
}))
