export const getCroppedImg = (imageSrc: null | string, pixelCrop: any) => {
  const image = new Image()

  image.src = imageSrc || ''

  return new Promise(resolve => {
    image.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        return
      }
      const { x, y, width, height } = pixelCrop

      canvas.width = width
      canvas.height = height
      ctx.drawImage(image, x, y, width, height, 0, 0, width, height)
      resolve(canvas.toDataURL('image/jpeg'))
    }
  })
}
