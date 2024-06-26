import { Flex, FlexProps } from '../flex'

type FlexRowProps = Omit<FlexProps, 'direction'> & { className?: string }

export const FlexRow = (props: FlexRowProps) => {
  return <Flex className={props.className} justify="start" {...props} />
}
