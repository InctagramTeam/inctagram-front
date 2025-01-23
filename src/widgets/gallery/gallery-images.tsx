'use client'

import { useEffect, useState } from 'react'

import { PublicPost } from '@/entities/posts/model/types/posts.types'
import CommentItem from '@/entities/posts/ui/comments/comment-item'
import { AvatarUser } from '@/entities/posts/ui/create-post/publication-post/user-avatar'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  EMPTY_STRING,
  Modal,
  ReturnComponent,
  Text,
  Textarea,
  cn,
} from '@/shared'
import { ModalContent, ModalTrigger } from '@/shared/ui/modal'
import SwiperPhoto from '@/shared/ui/swiper-photo/swiper-photo'
import Image from 'next/image'
import { useRouter } from 'next/router'

export type GalleryImageProps = {
  className?: string
  postData: PublicPost
}

export const GalleryImage = ({ postData, className }: GalleryImageProps): ReturnComponent => {
  const [open, setOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
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
      <ModalTrigger asChild>
        <Image
          alt={postData.description ?? EMPTY_STRING}
          className={cn(`h-full w-full contain-content`, className)}
          height={228}
          src={postData.postImages[0].url}
          width={234}
        />
      </ModalTrigger>
      <ModalContent
        classNameChildrenWrapper={'p-0'}
        classNameContent={'max-w-[61rem] max-h-[564px]'}
        isClose={open}
        isShowHeader={false}
      >
        <div className={'flex'}>
          <SwiperPhoto images={postData.postImages} />
          <div className={'w-full max-w-[480px] self-start px-[24px]'}>
            <AvatarUser classNameWrapper={'my-3'} />
            <div
              className={
                'flex max-h-[350px] flex-col gap-2 overflow-y-auto border-y border-b-Dark-100 border-t-Dark-100 py-[10px]'
              }
            >
              <CommentItem />
              <CommentItem />
              <CommentItem />
            </div>
            {/*{isEditMode && (*/}
            {/*  <Textarea*/}
            {/*    className={'h-[120px]'}*/}
            {/*    defaultCounter={postData.description?.length}*/}
            {/*    id={'publication-post'}*/}
            {/*    label={'Add publication descriptions'}*/}
            {/*    maxLength={500}*/}
            {/*    name={'post-description'}*/}
            {/*    // onChange={event => setDescription(event.currentTarget.value)}*/}
            {/*    placeholder={'Text-area'}*/}
            {/*    // value={description}*/}
            {/*  />*/}
            {/*)}*/}
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}

GalleryImage.displayName = 'GalleryImage'
