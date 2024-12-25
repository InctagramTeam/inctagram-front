import { memo } from 'react'

import { ReturnComponent } from '@/shared'

import { Slider } from '../slider/slider'
import { useZoomMenu } from './use-zoom-menu'

type Props = {
  currentImageId: string
  id: string
}
export const ZoomMenu = memo(({ currentImageId, id }: Props): ReturnComponent => {
  const { handleOnValueChange, zoom } = useZoomMenu(currentImageId)

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
      value={zoom ? [zoom] : undefined}
    />
  )
})
