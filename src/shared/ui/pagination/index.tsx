import { KeyboardArrowLeft, KeyboardArrowRight } from '@/shared/assets/icons'
import { ReturnComponent } from '@/shared/types'
import { clsx } from 'clsx'

import { SelectBox } from '../select/select'
import { usePagination } from './usePagination'

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: number | string) => void
  page: number
  perPage?: null | number
  perPageOptions?: number[]
  siblings?: number
}

const classNames = {
  container: 'flex gap-[12px]',
  dots: '',
  icon: '',
  item: 'min-w-[24px] h-[24px] rounded-sm focus:ring focus:ring-Primary-500 hover:bg-Dark-500 outline-none',
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && 'bg-Light-100 text-Dark-900 hover:bg-Light-100')
  },
  root: 'flex items-center',
  select: 'mx-[6px]',
  selectBox: 'flex items-center gap-[6px]',
}

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = {
  page: number
  selected: boolean
} & NavigationButtonProps

const Dots = (): ReturnComponent => {
  return <span className={classNames.dots}>&#8230;</span>
}
const PageButton = ({ disabled, onClick, page, selected }: PageButtonProps) => {
  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
    >
      {page}
    </button>
  )
}
const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <KeyboardArrowLeft className={classNames.icon} />
    </button>
  )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <KeyboardArrowRight className={classNames.icon} />
    </button>
  )
}

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: number[]
}

const MainPaginationButtons = ({
  currentPage,
  onClick,
  paginationRange,
}: MainPaginationButtonsProps) => {
  return (
    <>
      {paginationRange.map((page: number, index) => {
        const isSelected = page === currentPage

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: number | string) => void
  perPage: number
  perPageOptions: number[]
}

export const PerPageSelect = ({ onPerPageChange, perPage, perPageOptions }: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value: value,
  }))

  return (
    <div className={classNames.selectBox}>
      Show
      <SelectBox
        onChange={onPerPageChange}
        options={selectOptions}
        value={perPage}
        variant={'pagination'}
      />
      on page
    </div>
  )
}

export const Pagination = ({
  count,
  onChange,
  onPerPageChange,
  page,
  perPage = null,
  perPageOptions,
  siblings,
}: PaginationProps): ReturnComponent => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange as number[]}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            onPerPageChange,
            perPage,
            perPageOptions,
          }}
        />
      )}
    </div>
  )
}
