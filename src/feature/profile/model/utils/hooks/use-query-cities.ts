import geoDbCitiesApi from '@/feature/profile/api/geo-db-cities-api'
import { useInfiniteQuery } from '@tanstack/react-query'

type Props = {
  countryIds: string
  key: 'cities'
  locale?: string
  namePrefix: string
}

export function useQueryCities({ key, locale = 'en', countryIds, namePrefix }: Props) {
  const fetchFunction = async ({ pageParam = 1 }) => {
    return await geoDbCitiesApi.getCities({ pageParam, locale, countryIds, namePrefix })
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
    enabled: !!countryIds,
  })

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, error, status }
}
