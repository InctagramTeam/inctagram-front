import * as process from 'node:process'

import { APIResponse, City } from '@/feature/profile/model/types'
import { Country } from '@/feature/profile/model/types/geo-db-cities.types'
import axios from 'axios'

export type getRequestParams = {
  countryIds?: string
  locale?: string
  pageParam?: number
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GEO_DB_URL,
  headers: {
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    'X-RapidAPI-Key': 'be85c08e71msh53680970446a6c9p1be9ecjsne9e26c037875',
    // process.env.NEXT_PUBLIC_GEO_DB_API_KEY
  },
})

export class GeoDbCitiesApi {
  async getCities({ pageParam = 0, countryIds, locale }: getRequestParams): Promise<{
    data: City[]
    nextOffset: number
  }> {
    const response = await instance
      .get<APIResponse<City>>(`cities`, {
        params: {
          offset: pageParam,
          limit: 10,
          countryIds: countryIds,
          types: 'CITY',
          languageCode: locale,
        },
      })
      .then(response => response.data)

    return { data: response.data, nextOffset: pageParam }
  }

  async getCountries({ pageParam = 0, locale }: getRequestParams): Promise<{
    data: Country[]
    nextOffset: number
  }> {
    const response = await instance
      .get<APIResponse<Country>>(`countries`, {
        params: {
          offset: pageParam,
          limit: 10,
          languageCode: locale,
        },
      })
      .then(response => response.data)

    return { data: response.data, nextOffset: pageParam }
  }
}

const geoDbCitiesApi = new GeoDbCitiesApi()

export default geoDbCitiesApi
