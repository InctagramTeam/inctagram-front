import { ChevronIcon } from '@/shared/assets/icons'
import { useLayoutContext } from '@/shared/layouts/context/layout-context'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'

export const ToggleCollapsedButtons = (): ReturnComponent => {
  const { isCollapsed, toggleSidebar } = useLayoutContext()

  const classes = {
    button: cn(
      `top-[80px] fixed z-10 w-[32px] h-[32px] !p-[0] rounded-full !bg-Dark-100/25`,
      isCollapsed && 'left-[30px]',
      !isCollapsed && 'left-[200px]'
    ),
    icon: cn(`h-[16px] w-[16px]`, isCollapsed && 'rotate-90', !isCollapsed && '-rotate-90'),
  }

  return (
    <Button
      className={classes.button}
      onClick={toggleSidebar}
      variant={'text'}
      aria-label={isCollapsed ? 'open menu' : 'close menu'}
    >
      <ChevronIcon className={classes.icon} aria-hidden />
    </Button>
    // <>
    //   {isCollapsed ? (
    //     <Button
    //       className={`${classes.button} left-[30px]`}
    //       onClick={toggleSidebar}
    //       variant={'text'}
    //     >
    //       <ChevronIcon className={'h-[16px] w-[16px] rotate-90'} aria-hidden/>
    //     </Button>
    //   ) : (
    //     <Button
    //       className={`${classes.button} left-[200px]`}
    //       onClick={toggleSidebar}
    //       variant={'text'}
    //     >
    //       <ChevronIcon className={'h-[16px] w-[16px] -rotate-90'} />
    //     </Button>
    //   )}
    // </>
  )
}
