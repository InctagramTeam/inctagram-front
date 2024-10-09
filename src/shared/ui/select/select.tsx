'use client'

import * as React from 'react'
import { ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { useQueryDataWithPagination } from '@/feature/profile/model/utils/hooks/use-query-data-with-pagination'
import { ButtonSpinner, ReturnComponent, SelectItem, Text, cn, useTranslation } from '@/shared'
import { ChevronIcon } from '@/shared/assets/icons'
import * as SelectRadix from '@radix-ui/react-select'
import { useQueryClient } from '@tanstack/react-query'

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
  countryIds?: string
  direction?: SelectContentMenuDirection
  disabled?: boolean
  label?: string
  name?: string
  options?: SelectOptionsProps<T>[]
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  required?: boolean
  setCountryId?: (id: string) => void
  typeRequest: 'cities' | 'countries'
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
    typeRequest,
    setCountryId,
    countryIds,
    variant = 'primary',
    ...rest
  } = props

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

  const { inView, ref } = useInView()
  const { locale, t } = useTranslation()

  const queryClient = useQueryClient()

  const { data, fetchNextPage, status, isFetchingNextPage, hasNextPage } =
    useQueryDataWithPagination({
      key: typeRequest,
      locale,
      countryIds,
    })

  //TODO - реализовать получение id выбранного SelectItem
  const setCountryIdHandler = (event: any) => {}

  const content = data?.pages.map((page, index) => (
    <React.Fragment key={index}>
      {page.data.map((el, index) => {
        if (page.data.length === index + 1) {
          return (
            <SelectItem className={classes.item} key={el.name} ref={ref} value={el.name}>
              <span className={classes.text} onClick={setCountryIdHandler}>
                {el.name}
              </span>
            </SelectItem>
          )
        }

        return (
          <SelectItem className={classes.item} key={el.name} value={el.name}>
            <span className={classes.text} onClick={setCountryIdHandler}>
              {el.name}
            </span>
          </SelectItem>
        )
      })}
    </React.Fragment>
  ))

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['cities', 'countries'] })
  }, [queryClient, locale])

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

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
        <SelectContent className={classes.content} position={position}>
          {content}
          {isFetchingNextPage && <ButtonSpinner className={'w-full'} height={20} width={20} />}
        </SelectContent>
      </Select>
    </div>
  )
}

export { Select, SelectBox, SelectGroup, SelectValue }
