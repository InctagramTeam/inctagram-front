import { getRequestParams } from '@/feature/profile/api/geo-db-cities-api'
import { APIResponse, City } from '@/feature/profile/model/types'
import { Country } from '@/feature/profile/model/types/geo-db-cities'
import { useInfiniteQuery } from '@tanstack/react-query'

type ResponseData<T> = {
  data: T[]
  nextOffset: number
}

type Props = {
  countryIds?: string
  key: 'cities' | 'countries'
  locale: string
  selectorFn: ({
    countryIds,
    locale,
    pageParam,
  }: getRequestParams) => ResponseData<City> | ResponseData<Country>
}

export function useDataSelectorWithPagination({ key, locale, selectorFn, countryIds }: Props) {
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
    queryKey: [key],
    queryFn: ({ pageParam }) => selectorFn({ pageParam, locale, countryIds }),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextOffset + 10,
  })

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, error, status }
}
