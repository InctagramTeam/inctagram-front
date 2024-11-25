import { useAddPostPhotoStore } from '@/entities/posts'
import { Slider } from '@/shared/ui/add-post-photo/slider'

type Props = {
  currentImageId: string
  id: string
}
export const ZoomMenu = ({ currentImageId, id }: Props) => {
  const settings = useAddPostPhotoStore(state => state.images.find(image => image.id)?.settings)
  const setOptions = useAddPostPhotoStore(state => state.setOptions)

  if (!settings) {
    return
  }
  const handleOnValueChange = (valueChange: number[]) => {
    const value = valueChange[0]

    setOptions({ id: currentImageId, value: value, options: 'zoom' })
  }

  return (
    <Slider
      className={
        'absolute bottom-[60px] left-[60px] z-2 flex h-[36px] w-[124px] items-center bg-black bg-opacity-50 p-[10px]'
      }
      id={id}
      max={3}
      min={1}
      onValueChange={handleOnValueChange}
      step={0.1}
      value={[settings.zoom]}
    />
  )
}
