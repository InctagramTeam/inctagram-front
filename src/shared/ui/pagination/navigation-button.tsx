import { ReturnComponent } from '@/shared/types'
import { ChevronIcon } from '@/shared/assets/icons'
import { clsx } from 'clsx'

export type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
  type: 'prev' | 'next'
}
export const NavigationButton = ({
  type,
  disabled,
  onClick,
}: NavigationButtonProps): ReturnComponent => {
  const classes = {
    item: 'min-w-[24px] h-[24px] rounded-sm focus:ring focus:ring-Primary-500 hover:bg-Dark-500 outline-none',
    icon: 'w-[1rem] h-[1rem]',
  }

  return (
    <button className={classes.item} disabled={disabled} onClick={onClick} aria-label={type}>
      <ChevronIcon
        aria-hidden
        className={clsx(classes.icon, type === 'next' ? '-rotate-90' : 'rotate-90')}
      />
    </button>
  )
}
