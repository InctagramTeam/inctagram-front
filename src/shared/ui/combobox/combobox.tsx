import * as React from 'react'
import { useEffect } from 'react'

import { City, Country } from '@/feature/profile/model/types'
import { EMPTY_STRING, Text, cn, useTranslation } from '@/shared'
import { useDebounce } from '@/shared/lib/hooks/use-debounce'
import { FetchNextPageOptions, UseInfiniteQueryResult, useQueryClient } from '@tanstack/react-query'

import { Command, CommandInput, LocationsList } from './command'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

type ComboboxItem = {
  label: string
  value: string
}

export type ComboboxProps = {
  className?: string
  debounceInputValue: string
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>
  isFetchingNextPage: boolean
  label?: string
  locations: City[] | Country[]
  name?: string
  onChange?: (value: string) => void
  options?: ComboboxItem[]
  placeholder?: string
  setDebounceInputValue: (value: string) => void
  status: 'error' | 'pending' | 'success'
  value?: string
}

export function Combobox({
  value,
  onChange,
  locations,
  fetchNextPage,
  className,
  label,
  name,
  debounceInputValue,
  setDebounceInputValue,
  status,
  isFetchingNextPage,
  ...rest
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [valueInput, setValueInput] = React.useState<string>(EMPTY_STRING)

  const queryClient = useQueryClient()

  const { locale, t } = useTranslation()

  const debounceOnChange = useDebounce<string>(value => {
    setDebounceInputValue(value)
  }, 1000)

  const inputHandler = (value: string) => {
    setValueInput(value)
    debounceOnChange(value)
  }

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['cities', 'countries'] })
  }, [queryClient, locale])

  const classes = {
    className,
    label: cn(`_Label_ mb-[1px] text-Dark-100 text-regular-text-14 text-Light-900`),
    trigger: cn(
      `h-[36px] w-full flex items-center justify-between  
  bg-Dark-700 px-2 py-2 text-base font-normal outline-none rounded-sm ring-1 
  data-[state=closed]:ring-Dark-100  
  data-[state=open]:ring-Light-100 data-[state=open]:text-Light-100 
  hover:cursor-pointer shadow-sm 
  focus:text-Light-900 focus:ring-Primary-500 focus:ring-2 
  focus:rounded-sm disabled:cursor-not-allowed disabled:text-Dark-100/60 

  [&_.chevron-up]:hidden [&_.chevron-up]:data-[state=open]:block 
  [&_.chevron-up]:data-[state=open]:-translate-y-[2px] 
  [&_.chevron-down]:block [&_.chevron-down]:data-[state=open]:hidden`,
      className
    ),
  }

  return (
    <div className={cn('relative', classes.className)}>
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
      <Popover onOpenChange={setOpen} open={open} {...rest}>
        <PopoverTrigger className={classes.trigger}>
          {value
            ? value
            : name === 'country'
              ? `${t.pages.profile.settings.combobox.country.placeholder}...`
              : `${t.pages.profile.settings.combobox.city.placeholder}...`}
        </PopoverTrigger>
        <PopoverContent className={'p-0'}>
          <Command shouldFilter={false} value={value}>
            <CommandInput
              onValueChange={inputHandler}
              placeholder={
                name === 'country'
                  ? `${t.pages.profile.settings.combobox.country.search}...`
                  : `${t.pages.profile.settings.combobox.city.search}...`
              }
              value={valueInput}
            />
            <LocationsList
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              locations={locations}
              onChange={onChange}
              setOpen={setOpen}
              status={status}
            />
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
