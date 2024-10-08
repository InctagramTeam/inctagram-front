import geoDbCitiesApi from '@/feature/profile/api/geo-db-cities-api'
import { useInfiniteQuery } from '@tanstack/react-query'

export type ResponseData<T> = {
  data: T[]
  nextOffset: number
}

type Props = {
  countryIds?: string
  key: 'cities' | 'countries'
  locale?: string
}

export function useDataSelectorWithPagination({ key, locale = 'en', countryIds }: Props) {
  const fetchFunction = async ({ pageParam = 1 }) => {
    let func

    if (countryIds) {
      func = () => geoDbCitiesApi.getCities({ pageParam, locale, countryIds })
    } else {
      func = () => geoDbCitiesApi.getCountries({ pageParam, locale })
    }

    return func()
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
    queryKey: [key, { locale }],
    queryFn: fetchFunction,
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextOffset + 10,
  })

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, error, status }
}
