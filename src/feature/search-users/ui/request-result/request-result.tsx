import { RequestListProps } from '@/feature/search-users/model'
import { RequestEmpty, RequestList } from '@/feature/search-users/ui'
import { ReturnComponent } from '@/shared'

export const RequestResult = ({ items }: RequestListProps): ReturnComponent => {
  return <> {items.length ? <RequestList items={items} /> : <RequestEmpty />} </>
}
