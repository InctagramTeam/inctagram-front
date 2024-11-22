export const createImageUrlFromPhotoFile = (file: File) => {
  let imageUrl = null

  if (file) {
    imageUrl = URL.createObjectURL(file)
  }

  return imageUrl
}
