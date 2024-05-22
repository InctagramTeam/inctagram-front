import { Button } from '@/shared/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/assets/icons'

type Props = {
  isCollapsed?: boolean
  onToggleIsCollapsedClick: (isCollapsed: boolean) => void
}

export const ToggleCollapsedButtons = ({ onToggleIsCollapsedClick, isCollapsed }: Props) => {
  return (
    <>
      {isCollapsed ? (
        <Button
          onClick={() => onToggleIsCollapsedClick?.(!isCollapsed)}
          className={'fixed z-10 left-[30px] top-1/5 rounded-full !w-8 !h-8 !bg-Dark-100/25 '}
          variant={'text'}
        >
          <ChevronRightIcon className={'!fill-Light-100/70'} />
        </Button>
      ) : (
        <Button
          onClick={() => onToggleIsCollapsedClick?.(!isCollapsed)}
          className={'fixed z-10 left-[200px] top-1/5 rounded-full !w-8 !h-8 !bg-Dark-100/25 '}
          variant={'text'}
        >
          <ChevronLeftIcon className={'!fill-Light-100/70'} />
        </Button>
      )}
    </>
  )
}
