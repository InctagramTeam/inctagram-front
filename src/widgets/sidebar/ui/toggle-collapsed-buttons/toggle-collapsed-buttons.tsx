import { ChevronIcon } from '@/shared/assets/icons'
import { useLayoutContext } from '@/shared/layouts/context/layout-context'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'

export const ToggleCollapsedButtons = (): ReturnComponent => {
  const { isCollapsed, toggleSidebar } = useLayoutContext()

  const classes = {
    button: cn(
      `absolute top-[20px] right-[20px] w-[32px] !h-[32px] !p-[0] z-10 rounded-full !bg-Dark-100/25`
    ),
    icon: cn(`h-[16px] w-[16px]`, isCollapsed && 'rotate-90', !isCollapsed && '-rotate-90'),
  }

  return (
    <Button className={classes.button} onClick={toggleSidebar} variant={'text'} aria-hidden>
      <ChevronIcon className={classes.icon} />
    </Button>
  )
}
