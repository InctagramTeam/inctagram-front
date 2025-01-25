import { format } from 'date-fns'

export function formatDate(isoDate: string) {
  return format(new Date(isoDate), 'MMMM d, yyyy')
}
