export const base64ToFile = (base64: string, filename: string): File | null => {
  const arr = base64.split(',')

  if (arr.length < 2) {
    console.error('Invalid base64 string')

    return null
  }

  const mimeMatch = arr[0]?.match(/:(.*?);/)

  if (!mimeMatch || !mimeMatch[1]) {
    console.error('Could not extract MIME type')

    return null
  }

  const mime = mimeMatch[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}
