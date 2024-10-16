'use client'

import * as React from 'react'
import { ElementRef, ReactNode, forwardRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { City, Country } from '@/feature/profile/model/types'
import {
  ButtonSpinner,
  ReturnComponent,
  SelectItem,
  Text,
  cn,
  isCountry,
  useTranslation,
} from '@/shared'
import { ChevronIcon } from '@/shared/assets/icons'
import * as SelectRadix from '@radix-ui/react-select'
import { FetchNextPageOptions, UseInfiniteQueryResult, useQueryClient } from '@tanstack/react-query'

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
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>
  isFetchingNextPage: boolean
  label?: string
  locations: City[] | Country[]
  name?: string
  options?: SelectOptionsProps<T>[]
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  required?: boolean
  setCountryId?: (id: string) => void
  variant?: 'pagination' | 'primary'
}

export type SelectContentMenuDirection =
  | 'bottom left'
  | 'bottom right'
  | 'default'
  | 'top left'
  | 'top right'

// mapping classes
export const mapDirectionClass: Record<SelectContentMenuDirection, string> = {
  'bottom left': `top-[100%] right-0`,
  'bottom right': `top-[100%] left-0`,
  default: ``,
  'top left': `bottom-[100%] right-0`,
  'top right': `bottom-[100%] left-0`,
}

export type SelectProps = ChangeValueProps<number | string> & OwnProps<number | string>

const SelectBox = forwardRef<ElementRef<typeof SelectRadix.Trigger>, SelectProps>(
  (
    {
      className,
      direction,
      disabled,
      label,
      name,
      onChange,
      options,
      placeholder,
      position,
      locations,
      fetchNextPage,
      isFetchingNextPage,
      required,
      value,
      setCountryId,
      variant = 'primary',
      ...rest
    },
    forwardRef
  ): ReturnComponent => {
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

    const queryClient = useQueryClient()
    const { locale } = useTranslation()

    const { inView, ref } = useInView({
      threshold: 1.0,
      trackVisibility: true,
      delay: 1000,
    })

    //TODO - реализовать получение id выбранного SelectItem
    const setCountryIdHandler = (event: any) => {}

    useEffect(() => {
      queryClient.invalidateQueries({ queryKey: ['cities', 'countries'] })
    }, [queryClient, locale])

    useEffect(() => {
      if (inView) {
        fetchNextPage()
      }
    }, [inView])

    const content = locations.map((location, index) => {
      if (locations.length === index + 1) {
        return (
          <SelectItem
            className={classes.item}
            key={isCountry(location) ? location.wikiDataId : location.id}
            ref={ref}
            value={location.name}
          >
            <span className={classes.text} onClick={setCountryIdHandler}>
              {location.name}
            </span>
          </SelectItem>
        )
      }

      return (
        <SelectItem
          className={classes.item}
          key={isCountry(location) ? location.wikiDataId : location.id}
          value={location.name}
        >
          <span className={classes.text} onClick={setCountryIdHandler}>
            {location.name}
          </span>
        </SelectItem>
      )
    })

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
          <SelectTrigger className={classes.trigger} id={name} ref={forwardRef}>
            <SelectValue placeholder={placeholder} />
            <ChevronIcon className={cn('chevron-up rotate-180', classes.chevron)} />
            <ChevronIcon className={cn('chevron-down', classes.chevron)} />
          </SelectTrigger>
          <SelectContent className={classes.content} position={position}>
            {content}
            {isFetchingNextPage && <ButtonSpinner className={'w-full'} height={20} width={20} />}
          </SelectContent>
        </Select>
      </div>
    )
  }
)

export { Select, SelectBox, SelectGroup, SelectValue }
