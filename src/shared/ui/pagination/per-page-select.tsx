import { ReturnComponent } from '@/shared/types'
import { SelectBox } from '@/shared/ui/select/select'

type Props = {
  onPerPageChange: (itemPerPage: number | string) => void
  perPage: number
  perPageOptions: number[]
}

export const PerPageSelect = ({
  onPerPageChange,
  perPage,
  perPageOptions,
}: Props): ReturnComponent => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value: value,
  }))

  return (
    <div className={'flex items-center gap-[6px]'}>
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
