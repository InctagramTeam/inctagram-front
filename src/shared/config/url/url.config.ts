import { EMPTY_STRING } from '@/shared/constants'

export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getGenreUrl = (slug: string) => `/genre/${slug}`
export const getActorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl(EMPTY_STRING).slice(0, -1)
