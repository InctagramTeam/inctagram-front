import { City } from '@/feature/profile/model/types'
import { Country } from '@/feature/profile/model/types/geo-db-cities.types'

export function isCountry(el: City | Country): el is Country {
  return 'wikiDataId' in el
}
