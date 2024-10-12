type Page<T> = {
  data: T[]
  nextOffset: number
}

//todo - типизация
export const removeDublicateData = <T extends { name: string }>(pages: Page<T>[]): T[] => {
  const allData = pages.flatMap(page => page.data)

  const uniqueDataMap = new Map(allData.map(item => [item.name, item]))

  const uniqueData = Array.from(uniqueDataMap.values())

  return uniqueData
}
