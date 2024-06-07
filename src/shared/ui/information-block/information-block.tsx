import { Text } from '@/shared/ui/text'
import { Flex } from '@/shared/ui/flex'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

type Props = {
  title?: string
  titleClassName?: string
  text?: ReactNode
  textClassName?: string
  containerClassName?: string
  illustration?: ReactNode
  action?: ReactNode
  isMobile: boolean
}
export const InformationBlock = ({
  title,
  text,
  illustration,
  titleClassName,
  textClassName,
  containerClassName,
  action,
  isMobile,
}: Props) => {
  return (
    <Flex direction={'column'} justify={'center'}>
      <Flex
        className={clsx('w-full', !isMobile && 'max-w-[294px]', containerClassName)}
        direction={'column'}
      >
        {title && (
          <Text
            className={titleClassName}
            asComponent={'h1'}
            variant={'H1'}
            textAlign={'center'}
            mb={'15px'}
          >
            {title}
          </Text>
        )}

        {text && (
          <Text
            className={textClassName}
            asComponent={'p'}
            variant={'regular_text_16'}
            textAlign={'center'}
            mb={'54px'}
          >
            {text}
          </Text>
        )}
      </Flex>
      {action && action}
      {illustration && illustration}
    </Flex>
  )
}
