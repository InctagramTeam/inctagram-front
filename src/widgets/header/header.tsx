import { Flex } from '@/components/ui/flex/flex'
import { Logo } from '@/components/ui/logo/logo'
import { HeaderDesktopMenu } from '@/widgets/header/header-desktop-menu/header-desktop-menu'

type Props = {}

export const Header = ({}: Props) => {
  return (
    <header
      className={`fixed flex items-center justify-between inset-0 border-b-[1px] shadow-sm shadow-Dark-300
      border-Dark-100 w-full h-header-height py-[15px] px-[15px] z-10`}
    >
      <Flex maxWidth justify={'spaceBetween'} gap={'20'} align={'center'}>
        <Logo />
        <HeaderDesktopMenu />
      </Flex>
    </header>
  )
}
