'use client'

import * as React from 'react'
import { ReactNode, useEffect, useRef } from 'react'

import { ReturnComponent, Text, cn } from '@/shared'
import { ChevronIcon } from '@/shared/assets/icons'
import * as SelectRadix from '@radix-ui/react-select'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

import { SelectContent, SelectItem, SelectTrigger } from './'

const Select: typeof SelectRadix.Root = SelectRadix.Root
const SelectGroup: typeof SelectRadix.Group = SelectRadix.Group
const SelectValue: typeof SelectRadix.Value = SelectRadix.Value

type ChangeValueProps<T extends number | string> = {
  onChange?: (value: T) => void
  value?: T
}

export type SelectOptionsProps<T extends number | string> = {
  disabled?: boolean
  icon?: ReactNode
  label?: number | string
  name?: ReactNode
  value: T
}

type OwnProps<T extends number | string> = {
  className?: string
  direction?: SelectContentMenuDirection
  disabled?: boolean
  label?: string
  name?: string
  options?: SelectOptionsProps<T>[]
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  required?: boolean
  variant?: 'pagination' | 'primary'
}

export type SelectContentMenuDirection =
  | 'bottom left'
  | 'bottom right'
  | 'default'
  | 'top left'
  | 'top right'

interface City {
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

interface Link {
  href: string
  rel: string
}

interface APIResponse {
  data: City[]
  links: Link[]
  metadata: {
    currentOffset: number
    totalCount: number
  }
}

interface QueryParams {
  pageParam?: string // Для хранения URL следующей страницы
}

// mapping classes
export const mapDirectionClass: Record<SelectContentMenuDirection, string> = {
  'bottom left': `top-[100%] right-0`,
  'bottom right': `top-[100%] left-0`,
  default: ``,
  'top left': `bottom-[100%] right-0`,
  'top right': `bottom-[100%] left-0`,
}

export type SelectProps = ChangeValueProps<number | string> & OwnProps<number | string>

const SelectBox = (props: SelectProps): ReturnComponent => {
  const {
    className,
    direction,
    disabled,
    label,
    name,
    onChange,
    options,
    placeholder,
    position,
    required,
    value,
    variant = 'primary',
    ...rest
  } = props

  const contentRef = useRef<HTMLDivElement | null>(null)

  const optionalClasses = [mapDirectionClass[direction ?? 'default']]

  const classes = {
    chevron: cn(variant === 'pagination' && '[h-16px] w-[16px]'),
    className,
    content: cn(
      variant === 'pagination' ? 'w-[50px]' : 'w-full',
      direction === 'top left' && `bottom-[100%]`
    ),
    item: cn(variant === 'pagination' ? 'w-[50px]' : 'w-full'),
    label: cn(
      `_Label_ mb-[1px] text-Dark-100 text-regular-text-14 text-Light-900`,
      { [`text-Dark-100`]: disabled },
      disabled && `text-Dark-300 active:not:disabled:text-Light-100 disabled:cursor-not-allowed`
    ),
    optionalClasses,
    text: cn(
      `flex items-center gap-[12px] text-regular-text-14`,
      variant === 'pagination' && `leading-3`
    ),
    trigger: cn(
      variant === 'pagination'
        ? 'w-[50px] justify-center gap-[1px] py-0 pl-[6px] pr-[1px]'
        : 'w-full'
    ),
  }

  const fetchCities = async ({
    pageParam = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=0&limit=10&countryIds=Q159&types=CITY',
  }: QueryParams): Promise<{ cities: City[]; nextPage: null | string }> => {
    const response = await axios.get<APIResponse>(pageParam, {
      headers: {
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        'X-RapidAPI-Key': 'be85c08e71msh53680970446a6c9p1be9ecjsne9e26c037875',
      },
    })

    // Возвращаем данные и ссылку на следующую страницу (или null, если ее нет)
    return {
      cities: response.data.data,
      nextPage: response.data.links.find(link => link.rel === 'next')?.href ?? 'null',
    }
  }

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    initialPageParam:
      'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=0&limit=10&countryIds=Q159&types=CITY',
    queryFn: fetchCities,
    queryKey: ['cities'],
  })

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight

    if (bottom && hasNextPage && !isFetchingNextPage) {
      debugger
      fetchNextPage()
    }
  }

  useEffect(() => {
    const contentElement = contentRef.current

    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll as any)
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll as any)
      }
    }
  }, [hasNextPage, isFetchingNextPage])

  if (status === 'pending') {
    return <p>Loading...</p>
  }
  if (status === 'error') {
    return <p>Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
  }

  return (
    <div className={classes.className}>
      <Select
        {...rest}
        disabled={disabled}
        name={name}
        onValueChange={onChange}
        required={required}
        value={value as string}
      >
        {label && (
          <Text
            asComponent={'label'}
            className={classes.label}
            htmlFor={name}
            variant={'regular_text_16'}
          >
            {label}
          </Text>
        )}
        <SelectTrigger className={classes.trigger} id={name}>
          <SelectValue placeholder={placeholder} />
          <ChevronIcon className={cn('chevron-up rotate-180', classes.chevron)} />
          <ChevronIcon className={cn('chevron-down', classes.chevron)} />
        </SelectTrigger>
        <SelectContent
          className={classes.content}
          onScroll={handleScroll}
          position={position}
          ref={contentRef}
        >
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.cities.map(city => (
                <SelectItem className={classes.item} key={city.name} value={city.name}>
                  <span className={classes.text}>
                    {/*{option.label}*/}
                    {/*{option.icon}*/}
                    {city.name}
                  </span>
                </SelectItem>
              ))}
            </React.Fragment>
          ))}
          {isFetchingNextPage && (
            <SelectItem disabled value={'loading'}>
              Loading more...
            </SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  )
}

export { Select, SelectBox, SelectGroup, SelectValue }
