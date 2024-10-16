export interface City {
  country: string
  countryCode: string
  id: number
  latitude: number
  longitude: number
  name: string
  region: string
  regionCode: number
  type: string
  wikiDataId: string
}

export interface Country {
  code: string
  currencyCodes: string[]
  name: string
  wikiDataId: string
}

interface Link {
  href: string
  rel: string
}

export interface APIResponse<T> {
  data: T[]
  links: Link[]
  metadata: {
    currentOffset: number
    totalCount: number
  }
}

export type TypeRequests = 'cities' | 'countries'
