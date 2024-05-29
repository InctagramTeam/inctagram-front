import { LogOutIcon, MoreIcon } from '@/shared/assets/icons'
import { getIcon } from '@/shared/lib/utils/getIcon'
import { Button } from '@/shared/ui/button'
import { Dropdown } from '@/shared/ui/dropdown-menu'
import { LINKS } from '@/widgets/header/model/constants'
import Link from 'next/link'

type Props = {
  logout?: () => void
}

export const MobileDropdown = ({ logout }: Props) => {
  const classes = {
    item: `w-full data-[highlighted]:ring-Primary-700 data-[highlighted]:ring-1 data-[highlighted]:outline-none rounded-[2px]`,
    items: `flex flex-col gap-[12px] mb-[12px]`,
    link: `bg-transparent h-auto flex gap-[12px] py-[6px] px-[12px] transition duration-300 outline-none rounded-[2px] !text-regular-text-14
    active:opacity-60 focus:ring-1 focus:ring-Primary-700 focus-visible:ring-1 focus-visible:ring-Primary-700`,
    logoutButton: `h-auto !justify-normal bg-transparent focus:bg-transparent hover:translate-y-0 active:bg-transparent active:!text-Light-100`,
    menu: `before:hidden z-20 p-[1px] pt-[12px] pb-[12px]`,
    triggerButton: `w-[1.5rem] !h-[1.5rem] py-0 data-[state=open]:text-Primary-500 hover:translate-y-0`,
  }

  const trigger = (
    <Button aria-label={'menu'} className={classes.triggerButton} variant={'text'}>
      <MoreIcon aria-hidden />
    </Button>
  )

  return (
    <Dropdown.Menu className={classes.menu} trigger={trigger}>
      <div>
        <ul className={classes.items}>
          {LINKS.map((link, index) => {
            return (
              <Dropdown.Item className={classes.item} key={index}>
                <li>
                  <Button
                    asComponent={Link}
                    className={classes.link}
                    href={link.href}
                    startIcon={getIcon(link.href, false)}
                    variant={'text'}
                  >
                    {link.name}
                  </Button>
                </li>
              </Dropdown.Item>
            )
          })}
        </ul>
        <Dropdown.Item className={classes.item}>
          <Button
            className={`${classes.link} ${classes.logoutButton}`}
            onClick={logout}
            startIcon={<LogOutIcon />}
            variant={'text'}
          >
            Log Out
          </Button>
        </Dropdown.Item>
      </div>
    </Dropdown.Menu>
  )
}
