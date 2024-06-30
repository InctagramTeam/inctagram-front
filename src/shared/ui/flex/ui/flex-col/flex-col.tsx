import { Flex, FlexProps } from 'src/shared/ui/flex/ui/flex'

type FlexColProps = { className?: string } & Omit<FlexProps, 'direction'>

/** Конкретная имплементация Flex - чтобы не писать <Flex direction='flex-col'/> , просто пишем FlexCol и применяем все пропсы из Flex */
export const FlexCol = (props: FlexColProps) => {
  const { items = 'center' } = props

  return <Flex className={props.className} {...props} direction={'column'} items={items} />
}
