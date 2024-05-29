import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/assets/icons'
import { useLayoutContext } from '@/shared/layouts/context/layout-context'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui/button'

export const ToggleCollapsedButtons = (): ReturnComponent => {
  const { isCollapsed, toggleSidebar } = useLayoutContext()

  return (
    <>
      {isCollapsed ? (
        <Button
          className={'top-1/5 fixed left-[30px] z-10 !h-8 !w-8 rounded-full !bg-Dark-100/25 '}
          onClick={toggleSidebar}
          variant={'text'}
        >
          <ChevronRightIcon className={'!fill-Light-100/70'} />
        </Button>
      ) : (
        <Button
          className={'top-1/5 fixed left-[200px] z-10 !h-8 !w-8 rounded-full !bg-Dark-100/25 '}
          onClick={toggleSidebar}
          variant={'text'}
        >
          <ChevronLeftIcon className={'!fill-Light-100/70'} />
        </Button>
      )}
    </>
  )
}
