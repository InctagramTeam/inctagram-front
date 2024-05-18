import { Flex } from '@/components/ui/flex/flex'
import { DesktopMenu } from '@/components/ui/header/desktop-menu/desktop-menu'
import { Logo } from '@/components/ui/logo/logo'

export const Header = () => {
  return (
    <header
      className={`fixed flex items-center justify-between inset-0 border-b-[1px] shadow-sm shadow-Dark-300
      border-Dark-100 w-full h-header-height py-[15px] px-[15px] z-10`}
    >
      <Flex gap={'20'} justifyContent={'spaceBetween'} max>
        <Logo />
        <DesktopMenu />
      </Flex>
    </header>
  )
}
