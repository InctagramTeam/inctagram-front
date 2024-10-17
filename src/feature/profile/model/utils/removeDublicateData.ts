import { City, Country } from '@/feature/profile/model/types'

type Page<T> = {
  data: T[]
  nextOffset: number
}

export const removeDublicateData = <T extends City | Country>(pages: Page<T>[]): T[] => {
  const allData = pages.flatMap(page => page.data)

  const uniqueDataMap = new Map(allData.map(item => [item.name, item]))

  return Array.from(uniqueDataMap.values())
}
