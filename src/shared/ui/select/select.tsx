'use client'

import * as React from 'react'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import { ReturnComponent, SelectItem, Text, cn } from '@/shared'
import { ChevronIcon } from '@/shared/assets/icons'
import * as SelectRadix from '@radix-ui/react-select'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

import { SelectContent, SelectTrigger } from './'

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

  const { inView, ref } = useInView()

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
    offsetParam = 0,
  }): Promise<{ cities: City[]; nextOffset: number }> => {
    const response = await axios.get<APIResponse>(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=${offsetParam}&limit=10&countryIds=Q159&types=CITY`,
      {
        headers: {
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
          'X-RapidAPI-Key': 'be85c08e71msh53680970446a6c9p1be9ecjsne9e26c037875',
        },
      }
    )

    return { cities: response.data.data, nextOffset: offsetParam }
  }

  // const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
  //   queryKey: ['cities'],
  //   queryFn: pageParam => fetchCities(pageParam),
  //   initialPageParam: 0,
  //   getNextPageParam: lastPage => {
  //     console.log(lastPage)
  //   },
  // })

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['cities'],
    queryFn: async ({
      pageParam,
    }): Promise<{
      data: City[]
      nextOffset: number
    }> => {
      const response = await axios
        .get<APIResponse>(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=${pageParam}&limit=10&countryIds=Q159&types=CITY&languageCode=RU`,
          {
            headers: {
              'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
              'X-RapidAPI-Key': 'be85c08e71msh53680970446a6c9p1be9ecjsne9e26c037875',
            },
          }
        )
        .then(response => response.data)

      return { data: response.data, nextOffset: pageParam }
    },
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextOffset + 10,
  })

  const content = data?.pages.map((page, index) => (
    <React.Fragment key={index}>
      {page.data.map(city => (
        <SelectItem className={classes.item} key={city.name} value={city.name}>
          <span className={classes.text}>
            {/*{option.label}*/}
            {/*{option.icon}*/}
            {city.name}
          </span>
        </SelectItem>
      ))}
    </React.Fragment>
  ))

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
          // onScroll={handleScroll}
          position={position}
        >
          {content}
          <button onClick={() => fetchNextPage()} type={'button'}>
            Load more
          </button>
        </SelectContent>
      </Select>
    </div>
  )
}

export { Select, SelectBox, SelectGroup, SelectValue }
