import { Flex, FlexProps } from 'src/shared/ui/flex/ui/flex'

type FlexRowProps = Omit<FlexProps, 'direction'> & { className?: string }

/** Конкретная имплементация Flex, пример использования в файле: followers-info-header*/
export const FlexRow = (props: FlexRowProps) => {
  return <Flex className={props.className} justify="start" {...props} />
}
