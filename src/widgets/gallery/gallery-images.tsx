'use client'

import React, { useEffect, useState } from 'react'

import { useDeletePost } from '@/entities/posts/api/hooks/use-delete-post'
import { Post } from '@/entities/posts/model/types/posts.types'
import CommentItem from '@/entities/posts/ui/comments/comment-item'
import { DoubleModal } from '@/entities/posts/ui/double-modal'
import { AvatarUser } from '@/entities/posts/ui/user-avatar'
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
  useTranslation,
} from '@/shared'
import {
  BookmarkOutlineIcon,
  EditIcon,
  HeartIconOutline,
  MoreIcon,
  PaperPlaneIcon,
  TrashIcon,
} from '@/shared/assets/icons'
import { ModalContent, ModalTrigger } from '@/shared/ui/modal'
import SwiperPhoto from '@/shared/ui/swiper-photo/swiper-photo'
import { formatDate } from '@/widgets/gallery/lib/formateDate'
import Image from 'next/image'
import { useRouter } from 'next/router'

export type GalleryImageProps = {
  className?: string
  postData: Post
}

export const GalleryImage = ({ postData, className }: GalleryImageProps): ReturnComponent => {
  const [open, setOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isOpenDeletePostModal, setIsOpenDeletePostModal] = useState(false)
  const router = useRouter()
  const { post, ...rest } = router.query
  const { mutate: deletePost, isSuccess } = useDeletePost()
  const { t } = useTranslation()

  useEffect(() => {
    if (post && +post === postData.id) {
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    if (isSuccess) {
      setIsOpenDeletePostModal(false)
      setOpen(false)
    }
  }, [isSuccess])

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

  const classes = {
    button: '!h-[24px] w-[24px] pb-0 pt-0 focus:bg-transparent active:bg-transparent',
  }

  const dropDownMenu = () => (
    <Dropdown.Menu
      align={'end'}
      className={'px-3 py-3 pb-3 before:left-[86%]'}
      trigger={
        <Button
          aria-label={'Открыть попап'}
          className={classes.button}
          type={'button'}
          variant={'text'}
        >
          <MoreIcon aria-hidden />
        </Button>
      }
    >
      <ul className={'flex flex-col gap-[12px]'}>
        <Dropdown.Item>
          <li>
            <Button
              className={'h-full pb-0 pt-0 focus:bg-transparent active:bg-transparent'}
              startIcon={<EditIcon aria-hidden />}
              variant={'text'}
            >
              {t.posts.editPost}
            </Button>
          </li>
        </Dropdown.Item>
        <Dropdown.Item>
          <li>
            <Button
              className={'h-full pb-0 pt-0 focus:bg-transparent active:bg-transparent'}
              onClick={() => setIsOpenDeletePostModal(true)}
              startIcon={<TrashIcon aria-hidden />}
              variant={'text'}
            >
              {t.posts.deletePost}
            </Button>
          </li>
        </Dropdown.Item>
      </ul>
    </Dropdown.Menu>
  )

  return (
    <Modal onOpenChange={openChangeHandler} open={open}>
      <ModalTrigger asChild>
        <div className={'relative aspect-square w-full'}>
          <button aria-label={'Open modal'} className={'absolute inset-0 z-2'} type={'button'} />
          <Image
            alt={postData.description ?? EMPTY_STRING}
            className={cn(`h-full w-full contain-content`, className)}
            fill
            src={postData.postImages[0].url}
          />
        </div>
      </ModalTrigger>
      <ModalContent
        classNameChildrenWrapper={'p-0'}
        classNameContent={'max-w-[61rem] max-h-[564px]'}
        isClose={open}
        isShowHeader={false}
      >
        <DoubleModal
          isOpen={isOpenDeletePostModal}
          modalTitle={t.posts.deletePost}
          openChange={setIsOpenDeletePostModal}
          text={t.posts.wantDeletePost}
        >
          <Button
            className={'px-[32px] py-[6px]'}
            onClick={() => deletePost(String(postData.id))}
            type={'button'}
            variant={'outline'}
          >
            {t.button.yes}
          </Button>
          <Button
            className={'px-[32px] py-[6px]'}
            onClick={() => setIsOpenDeletePostModal(false)}
            type={'button'}
            variant={'primary'}
          >
            {t.button.no}
          </Button>
        </DoubleModal>
        <div className={'flex'}>
          <SwiperPhoto images={postData.postImages} />
          <div className={'w-full max-w-[486px] self-start'}>
            <AvatarUser actions={dropDownMenu()} classNameWrapper={'px-[24px] py-[12px] mb-0'} />
            <div
              className={
                'flex max-h-[280px] flex-col gap-4 overflow-y-auto border-y border-b-Dark-100 border-t-Dark-100 p-[24px]'
              }
            >
              <CommentItem createdAt={'2024-12-18T13:04:54.610Z'} likes={0} />
              <CommentItem createdAt={'2024-12-18T13:04:54.610Z'} likes={0} />
              <CommentItem createdAt={'2024-12-18T13:04:54.610Z'} likes={0} />
            </div>
            <div className={'border-b border-b-Dark-100 px-[24px] py-[12px] pb-[7px]'}>
              <div className={'mb-[20px] flex gap-6'}>
                <Button
                  aria-label={'Нравится'}
                  className={classes.button}
                  onClick={() => {}}
                  type={'button'}
                  variant={'text'}
                >
                  <HeartIconOutline aria-hidden height={24} width={24} />
                </Button>
                <Button
                  aria-label={'Поделиться'}
                  className={classes.button}
                  onClick={() => {}}
                  type={'button'}
                  variant={'text'}
                >
                  <PaperPlaneIcon aria-hidden height={24} width={24} />
                </Button>
                <Button
                  aria-label={'Добавить в избранное'}
                  className={classes.button}
                  onClick={() => {}}
                  type={'button'}
                  variant={'text'}
                >
                  <BookmarkOutlineIcon aria-hidden height={24} width={24} />
                </Button>
              </div>
              <div className={'mb-[7px] '}>
                <div className={'mb-[5px] flex items-center gap-3'}>
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
            </div>
            <div className={'flex items-center gap-6 px-[24px] py-[12px]'}>
              <Input
                className={'ring-transparent'}
                inputProps={{ className: 'ring-transparent' }}
                label={'Оставить комментарий'}
                labelProps={{ className: 'sr-only' }}
                placeholder={'Add a Comment...'}
                type={'text'}
              />
              <Button variant={'link'}>Publish</Button>
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
