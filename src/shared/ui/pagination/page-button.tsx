import { ReturnComponent } from '@/shared/types'
import { clsx } from 'clsx'

import { NavigationButtonProps } from './navigation-button'

type Props = {
  page: number
  selected: boolean
} & Omit<NavigationButtonProps, 'type'>

export const PageButton = ({ disabled, onClick, page, selected }: Props): ReturnComponent => {
  const classes = {
    item: 'min-w-[24px] h-[24px] rounded-sm focus:ring focus:ring-Primary-500 hover:bg-Dark-500 outline-none',
    pageButton(selected?: boolean) {
      return clsx(this.item, selected && 'bg-Light-100 text-Dark-900 hover:bg-Light-100')
    },
  }

  return (
    <button
      className={classes.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
      type={'button'}
    >
      {page}
    </button>
  )
}
