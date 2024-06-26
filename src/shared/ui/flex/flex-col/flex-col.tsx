import { Flex, FlexProps } from '../flex'

type FlexColProps = Omit<FlexProps, 'direction'> & { className?: string }

/** Конкретная имплементация Flex - чтобы не писать <Flex direction='flex-col'/>, просто пишем FlexCol, пример использования в файле: */
export const FlexCol = (props: FlexColProps) => {
  const { items = 'start' } = props
  return <Flex className={props.className} {...props} direction="column" items={items} />
}
