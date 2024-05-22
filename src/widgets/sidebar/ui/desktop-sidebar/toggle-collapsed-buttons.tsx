import { Button } from '@/shared/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/assets/icons'
import { useLayoutContext } from '@/shared/layouts/context/layout-context'
import { ReturnComponent } from '@/shared/types'

export const ToggleCollapsedButtons = (): ReturnComponent => {
  const { isCollapsed, toggleSidebar } = useLayoutContext()

  return (
    <>
      {isCollapsed ? (
        <Button
          onClick={toggleSidebar}
          className={'fixed z-10 left-[30px] top-1/5 rounded-full !w-8 !h-8 !bg-Dark-100/25 '}
          variant={'text'}
        >
          <ChevronRightIcon className={'!fill-Light-100/70'} />
        </Button>
      ) : (
        <Button
          onClick={toggleSidebar}
          className={'fixed z-10 left-[200px] top-1/5 rounded-full !w-8 !h-8 !bg-Dark-100/25 '}
          variant={'text'}
        >
          <ChevronLeftIcon className={'!fill-Light-100/70'} />
        </Button>
      )}
    </>
  )
}
