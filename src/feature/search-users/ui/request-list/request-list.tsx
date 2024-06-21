import { ReturnComponent } from '@/shared'
import { RequestItem } from '@/feature/search-users/ui'
import { RequestListProps } from '@/feature/search-users/model'

export const RequestList = ({ items }: RequestListProps): ReturnComponent => {
  return (
    <ul className={'flex flex-col gap-[0.8rem]'}>
      {items.map(item => (
        <li key={item.nickname}>
          <RequestItem {...item} />
        </li>
      ))}
    </ul>
  )
}
