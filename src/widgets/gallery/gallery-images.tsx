'use client'

import { useEffect, useState } from 'react'

import { PublicPost } from '@/entities/posts/model/types/posts.types'
import { EMPTY_STRING, Modal, ReturnComponent } from '@/shared'
import { clsx } from 'clsx'
import Image, { ImageProps } from 'next/image'
import { useRouter } from 'next/router'

type Props = {
  className?: string
  postData: PublicPost
}

export const GalleryImage = ({ postData, className }: Props): ReturnComponent => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { post, ...rest } = router.query

  useEffect(() => {
    if (post && +post === postData.id) {
      setOpen(true)
    }
  }, [])

  const openChangeHandler = (open: boolean) => {
    if (open) {
      router
        .push(
          {
            pathname: router.pathname,
            query: { ...router.query, post: postData.id },
          },
          undefined,
          { shallow: true }
        )
        .then(res => setOpen(open))
    } else {
      router
        .push(
          {
            pathname: router.pathname,
            query: rest,
          },
          undefined,
          { shallow: true }
        )
        .then(res => setOpen(open))
    }
  }

  return (
    <Modal onOpenChange={openChangeHandler} open={open}>
      <Modal.Button asChild>
        <Image
          alt={postData.description ?? EMPTY_STRING}
          className={clsx(`h-full w-full contain-content`, className)}
          height={228}
          src={postData.postImages[0].url}
          width={234}
        />
      </Modal.Button>
      <Modal.Content>Modal with Photo and Comments</Modal.Content>
    </Modal>
  )
}

GalleryImage.displayName = 'GalleryImage'
