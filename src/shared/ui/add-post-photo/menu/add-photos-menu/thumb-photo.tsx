import React from 'react'

import { Button, useTranslation } from '@/shared'
import { CrossIcon } from '@/shared/assets/icons'
import Image from 'next/image'

type Props = {
  deleteCallback: (id: string) => void
  id: string
  src: string
}
export const ThumbPhoto = ({ deleteCallback, id, src }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      <Button
        aria-label={t.pages.profile.deletePhoto.title}
        className={'absolute right-[2px] top-[2px] !h-[12px] w-[12px] py-[0] text-Light-100'}
        onClick={() => deleteCallback(id)}
        type={'button'}
        variant={'text'}
      >
        <CrossIcon aria-hidden height={6} width={6} />
      </Button>
      <Image
        alt={''}
        className={'h-full w-full rounded-[4px] object-cover'}
        height={80}
        src={src}
        width={80}
      />
    </>
  )
}
