import { ChevronIcon } from '@/shared/assets/icons'
import { useLayoutContext } from '@/shared/layouts/context/layout-context'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui/button'

export const ToggleCollapsedButtons = (): ReturnComponent => {
  const { isCollapsed, toggleSidebar } = useLayoutContext()

  const classes = {
    button: `top-1/5 fixed z-10 !h-8 !w-8 rounded-full !bg-Dark-100/25`,
  }

  return (
    <>
      {isCollapsed ? (
        <Button
          className={`${classes.button} left-[30px]`}
          onClick={toggleSidebar}
          variant={'text'}
        >
          <ChevronIcon className={'h-[16px] w-[16px] rotate-90'} />
        </Button>
      ) : (
        <Button
          className={`${classes.button} left-[200px]`}
          onClick={toggleSidebar}
          variant={'text'}
        >
          <ChevronIcon className={'h-[16px] w-[16px] -rotate-90'} />
        </Button>
      )}
    </>
  )
}
