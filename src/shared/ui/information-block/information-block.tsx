import { ReactNode } from 'react'

import { Flex, FlexCol } from '@/shared/ui/flex'
import { Text } from '@/shared/ui/text'
import { clsx } from 'clsx'

type Props = {
  action?: ReactNode
  containerClassName?: string
  illustration?: ReactNode
  isMobile: boolean
  text?: ReactNode
  textClassName?: string
  title?: string
  titleClassName?: string
}
export const InformationBlock = ({
  action,
  containerClassName,
  illustration,
  isMobile,
  text,
  textClassName,
  title,
  titleClassName,
}: Props) => {
  return (
    <FlexCol justify={'center'}>
      <FlexCol className={clsx('w-full', !isMobile && 'max-w-[294px]', containerClassName)}>
        {title && (
          <Text
            asComponent={'h1'}
            className={titleClassName}
            mb={'15px'}
            textAlign={'center'}
            variant={'H1'}
          >
            {title}
          </Text>
        )}

        {text && (
          <Text
            asComponent={'p'}
            className={textClassName}
            mb={'54px'}
            textAlign={'center'}
            variant={'regular_text_16'}
          >
            {text}
          </Text>
        )}
      </FlexCol>
      {action && action}
      {illustration && illustration}
    </FlexCol>
  )
}
