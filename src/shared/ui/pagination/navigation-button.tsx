import { ChevronIcon } from '@/shared/assets/icons'
import { ReturnComponent } from '@/shared/types'
import { clsx } from 'clsx'

export type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
  type: 'next' | 'prev'
}
export const NavigationButton = ({
  disabled,
  onClick,
  type,
}: NavigationButtonProps): ReturnComponent => {
  const classes = {
    icon: 'w-[1rem] h-[1rem]',
    item: 'min-w-[24px] h-[24px] rounded-sm focus:ring focus:ring-Primary-500 hover:bg-Dark-500 outline-none',
  }

  return (
    <button
      aria-label={type}
      className={classes.item}
      disabled={disabled}
      onClick={onClick}
      type={'button'}
    >
      <ChevronIcon
        aria-hidden
        className={clsx(classes.icon, type === 'next' ? '-rotate-90' : 'rotate-90')}
      />
    </button>
  )
}
