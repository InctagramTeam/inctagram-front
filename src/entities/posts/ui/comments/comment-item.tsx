import React, { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage, Button, Text, cn, useTranslation } from '@/shared'
import { HeartIcon, HeartIconOutline } from '@/shared/assets/icons'
import { Separator } from '@/shared/ui/separator/separator'
import { formatDistanceToNow } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'

type Props = {
  createdAt: string
  likes: number
}

const CommentItem = ({ createdAt, likes }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLike, setIsLike] = useState(false)
  const { locale: localeFromUseTranslation } = useTranslation()

  const locale = localeFromUseTranslation === 'ru' ? ru : enUS

  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale })

  const classes = {
    wrapper: cn(
      isExpanded ? 'max-h-none' : 'max-h-[72px]',
      'overflow-hidden text-ellipsis whitespace-pre-wrap'
    ),
  }

  return (
    <div className={'flex gap-[12px]'}>
      <Avatar>
        <AvatarImage height={36} size={36} src={''} width={36} />
        <AvatarFallback className={'bg-Light-900'}>{'U'}</AvatarFallback>
      </Avatar>
      <div>
        <div
          className={classes.wrapper}
          style={{
            display: '-webkit-box',
            WebkitLineClamp: isExpanded ? 'none' : 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          <Text mr={'10px'} variant={'bold_text_14'}>
            User
          </Text>
          <Text variant={'regular-text-14'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsum libero
            voluptatum! Accusamus, architecto assumenda commodi consectetur eos expedita fuga, fugit
            id molestias recusandae sed sequi sint tempore, veniam voluptates.
          </Text>
        </div>
        <div className={'flex gap-3'}>
          <Text textColor={'lightDark'} variant={'small-text-12'}>
            {timeAgo}
          </Text>
          <Text textColor={'dark'} variant={'semi-bold_small_text_12'}>
            Like: {likes}
          </Text>
          <Text textColor={'dark'} variant={'semi-bold_small_text_12'}>
            Answer
          </Text>
          <Button asChild onClick={() => setIsExpanded(!isExpanded)}>
            <Text
              className={'bg-transparent text-blue-500 hover:bg-transparent hover:underline'}
              variant={'small-text-12'}
            >
              {isExpanded ? 'Свернуть' : 'Читать дальше'}
            </Text>
          </Button>
        </div>
        <div className={'flex items-center gap-1'}>
          <Separator className={'max-w-[24px]'} />
          <Text textColor={'dark'} variant={'semi-bold_small_text_12'}>
            Hide answers
          </Text>
        </div>
      </div>
      <div className={'flex-shrink-0 pt-[15px]'}>
        {/*Todo: добавить логику */}
        {isLike ? (
          <HeartIcon height={16} width={16} />
        ) : (
          <HeartIconOutline height={16} width={16} />
        )}
      </div>
    </div>
  )
}

export default CommentItem
