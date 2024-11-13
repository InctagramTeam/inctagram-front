import { useAddPostPhotoStore } from '@/entities/posts'
import { Slider } from '@/shared/ui/add-post-photo/ui/croppingPhoto/zoomMenu/Slider'

type Props = {
  ind: number
}

export const ZoomMenu = ({ ind }: Props) => {
  const zoomValue = useAddPostPhotoStore(state => state.images[ind].zoom)
  const setOptions = useAddPostPhotoStore(state => state.setOptions)
  const handleOnValueChange = (valueChange: number[]) => {
    const value = valueChange[0]

    setOptions({ index: ind, options: 'zoom', value: value })
  }

  return (
    <Slider
      className={
        'absolute bottom-[60px] left-[60px] flex h-[36px] w-[124px] items-center bg-black bg-opacity-50 p-[10px]'
      }
      max={3}
      min={1}
      onValueChange={handleOnValueChange}
      step={0.1}
      value={[zoomValue]}
    />
  )
}
