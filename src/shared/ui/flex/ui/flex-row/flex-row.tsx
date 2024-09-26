import { forwardRef } from 'react'

import { Flex, FlexProps } from 'src/shared/ui/flex/ui/flex'

type FlexRowProps = { className?: string } & Omit<FlexProps, 'direction'>

/** Конкретная имплементация Flex - чтобы не писать <Flex direction='row' />, просто пишем FlexRow и применяем все пропсы из Flex */
export const FlexRow = forwardRef<HTMLDivElement, FlexRowProps>((props, ref) => {
  const { children, className, justify = 'start', ...rest } = props

  return (
    <Flex className={className} {...rest} direction={'row'} justify={justify} ref={ref}>
      {children}
    </Flex>
  )
})
