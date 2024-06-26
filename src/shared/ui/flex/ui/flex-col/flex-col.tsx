import { Flex, FlexProps } from 'src/shared/ui/flex/ui/flex'

type FlexColProps = Omit<FlexProps, 'direction'> & { className?: string }

/** Конкретная имплементация Flex - чтобы не писать <Flex direction='flex-col'/> , просто пишем FlexCol и применяем все пропсы из Flex */
export const FlexCol = (props: FlexColProps) => {
  const { items = 'start' } = props
  return <Flex className={props.className} {...props} direction="column" items={items} />
}
