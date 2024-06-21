import { ReturnComponent } from '@/shared'
import { RequestListProps } from '@/feature/search-users/model'
import { RequestList, RequestEmpty } from '@/feature/search-users/ui'

export const RequestResult = ({ items }: RequestListProps): ReturnComponent => {
  return <> {items.length ? <RequestList items={items} /> : <RequestEmpty />} </>
}
