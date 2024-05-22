import { Flex } from '@/shared/ui/flex'
import { MobileDropdown } from '@/widgets/header'

type Props = {
  logout?: () => void
}

export const HeaderMobile = ({ logout }: Props) => {
  return (
    <Flex className={'flex-nowrap'} gap={'24'}>
      <div>Select</div>
      <MobileDropdown logout={logout} />
    </Flex>
  )
}
