import React, { ChangeEvent, useRef } from 'react'

import { convertFileToBase64, useAddPostPhotoStore } from '@/entities/posts'
import { Button } from '@/shared'
import { ClosingCross, Plus } from '@/shared/assets/icons'
type Props = {
  deleteImgCallback: (ind: number) => void
}
export const AddPhotosMenu = ({ deleteImgCallback }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const addImage = useAddPostPhotoStore(state => state.addImage)
  const images = useAddPostPhotoStore(state => state.images)
  const imgChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      convertFileToBase64(file, (file64: string) => {
        addImage(file64)
      })
    }
  }
  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    imgChangeCallback(e)
  }
  const handleInputClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    inputRef.current?.click()
  }
  const photoLength = images?.length ? images.length : 1
  const photo = images?.map((el, ind) => (
    <div className={'relative flex h-[82px] w-[97.6px] items-center justify-center'} key={ind}>
      <Button className={'absolute right-[2px] top-[2px]'} onClick={() => deleteImgCallback(ind)}>
        <ClosingCross />
      </Button>
      <img alt={''} className={'max-h-full max-w-full object-contain'} src={el.image} />
    </div>
  ))

  return (
    <div
      className={
        'absolute bottom-[60px] right-[13px] flex h-[106px] min-w-[152px] flex-row items-start gap-1 bg-[rgba(0,0,0,0.5)] p-2'
      }
    >
      {photo}
      <input
        accept={'image/jpeg, image/png'}
        className={'invisible absolute opacity-0'}
        id={'input-file'}
        name={'file'}
        onChange={handleImgChange}
        ref={inputRef}
        type={'file'}
      />
      {photoLength < 10 && (
        <Button className={'p-2'} onClick={handleInputClick} variant={'link'}>
          <Plus />
        </Button>
      )}
    </div>
  )
}
