import geoDbCitiesApi from '@/feature/profile/api/geo-db-cities-api'
import { useInfiniteQuery } from '@tanstack/react-query'

type Props = {
  key: 'countries'
  locale?: string
  namePrefix: string
}

export function useQueryCountries({ key, locale = 'en', namePrefix }: Props) {
  const fetchFunction = async ({ pageParam = 1 }) => {
    return await geoDbCitiesApi.getCountries({ pageParam, locale, namePrefix })
  }

  const {
    data,
    error,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    status,
  } = useInfiniteQuery({
    queryKey: [key, { locale, namePrefix }],
    queryFn: fetchFunction,
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextOffset + 10,
  })

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, error, status }
}
