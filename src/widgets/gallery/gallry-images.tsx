'use client'

import { PublicPost } from '@/entities/posts/model/types/posts.types'
import { EMPTY_STRING, Modal, ReturnComponent } from '@/shared'
import { clsx } from 'clsx'
import Image, { ImageProps } from 'next/image'

type Props = {
  className?: string
  post: PublicPost
}

// export type GalleryImageType = Omit<ImageProps, keyof Props> & Props
export const GalleryImage = ({ post, className }: Props): ReturnComponent => {
  return (
    <Modal>
      <Modal.Button asChild>
        <Image
          alt={post.description ?? EMPTY_STRING}
          className={clsx(`h-full w-full contain-content`, className)}
          height={228}
          src={post.postImages[0].url} // `/man.png`
          width={234}
        />
      </Modal.Button>
      <Modal.Content>Modal with Photo and Comments</Modal.Content>
    </Modal>
  )
}

GalleryImage.displayName = 'GalleryImage'
