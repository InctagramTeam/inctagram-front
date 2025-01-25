'use client'

import React, { useEffect, useState } from 'react'

import { PublicPost } from '@/entities/posts/model/types/posts.types'
import CommentItem from '@/entities/posts/ui/comments/comment-item'
import { AvatarUser } from '@/entities/posts/ui/create-post/publication-post/user-avatar'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dropdown,
  EMPTY_STRING,
  Input,
  Modal,
  ReturnComponent,
  Text,
  cn,
} from '@/shared'
import {
  BookmarkOutlineIcon,
  HeartIconOutline,
  MoreIcon,
  PaperPlaneIcon,
} from '@/shared/assets/icons'
import EditIcon from '@/shared/assets/icons/EditIcon'
import TrashIcon from '@/shared/assets/icons/TrashIcon'
import { ModalContent, ModalTrigger } from '@/shared/ui/modal'
import SwiperPhoto from '@/shared/ui/swiper-photo/swiper-photo'
import { formatDate } from '@/widgets/gallery/lib/formateDate'
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

  const dropDownMenu = () => (
    <Dropdown.Menu
      align={'start'}
      className={'px-3 py-3'}
      trigger={
        <Button style={{ padding: '0' }} variant={'text'}>
          <MoreIcon />
        </Button>
      }
    >
      <Dropdown.Item>
        <div className={'flex items-center gap-3'}>
          <EditIcon />
          <Text variant={'regular-text-14'}>Edit Post</Text>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className={'flex items-center gap-3'}>
          <TrashIcon />
          <Text variant={'regular-text-14'}>Delete Post</Text>
        </div>
      </Dropdown.Item>
    </Dropdown.Menu>
  )

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
          <div className={'w-full max-w-[480px] self-start px-[24px] py-3'}>
            <AvatarUser actions={dropDownMenu()} classNameWrapper={'mb-3'} />
            <div
              className={
                'mb-3 flex max-h-[350px] flex-col gap-2 overflow-y-auto border-y border-b-Dark-100 border-t-Dark-100 py-[10px]'
              }
            >
              <CommentItem createdAt={'2024-12-18T13:04:54.610Z'} likes={0} />
              <CommentItem createdAt={'2024-12-18T13:04:54.610Z'} likes={0} />
              <CommentItem createdAt={'2024-12-18T13:04:54.610Z'} likes={0} />
            </div>
            <div className={'mb-[10px] flex justify-between'}>
              <div className={'flex gap-6'}>
                <HeartIconOutline height={24} width={24} />
                <PaperPlaneIcon height={24} width={24} />
              </div>
              <BookmarkOutlineIcon height={24} width={24} />
            </div>
            <div className={'mb-[7px]'}>
              <div className={'mb-[3px] flex items-center gap-3'}>
                <Avatar className={'h-6 w-6'}>
                  <AvatarImage src={''} />
                  <AvatarFallback className={'bg-Light-900'}>{'A'}</AvatarFallback>
                </Avatar>
                <Text variant={'regular-text-14'}>
                  2200 <Text variant={'bold_text_14'}>&quot;Like&quot;</Text>
                </Text>
              </div>
              <Text asComponent={'div'} textColor={'lightDark'} variant={'small-text-12'}>
                {formatDate(postData.createdAt)}
              </Text>
            </div>
            <div className={'flex items-center gap-6'}>
              <Input placeholder={'Add a Comment...'} type={'text'} />
              <Button variant={'text'}>Publish</Button>
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
