import { BellIcon, BellOutlineIcon } from '@/shared/assets/icons'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import { NotificationProps } from '@/widgets/header'

type Props = {
  countNotifications?: number
  openDropdown?: boolean
  onToggleDropdownClick?: () => void
}

export const NotificationButtonMode = ({
  countNotifications,
  openDropdown,
  onToggleDropdownClick,
}: Props) => {
  const classes = {
    countNotifications: cn(
      `bg-Danger-500 text-Light-100 rounded-full w-[13px] h-[13px] flex items-center justify-center`,
      `absolute top-0 right-0 text-[0.6rem] leading-[0.5rem]`
    ),
    dropdownTrigger: cn(
      `w-[24px] !h-[24px] justify-center hover:translate-y-0 !p-0 relative`,
      `hover:bg-Primary-500 active:opacity-50 duration-300 transition-opacity`
    ),
  }

  return (
    <Button
      aria-label={openDropdown ? 'close notifications' : 'open notifications'}
      className={classes.dropdownTrigger}
      onClick={onToggleDropdownClick}
      variant={'text'}
    >
      <>
        {openDropdown ? (
          <BellIcon aria-hidden className={'fill-Primary-500'} />
        ) : (
          <BellOutlineIcon aria-hidden className={'fill-Light-100'} />
        )}
        {countNotifications && (
          <span className={classes.countNotifications}>
            {countNotifications < 100 ? countNotifications : '...'}
          </span>
        )}
      </>
    </Button>
  )
}
