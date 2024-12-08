import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { City, Country } from '@/feature/profile/model/types'
import { ButtonSpinner, cn, isCountry, useTranslation } from '@/shared'
import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandLoading,
} from '@/shared/ui/combobox/command/command'
import { FetchNextPageOptions, UseInfiniteQueryResult } from '@tanstack/react-query'

type Props = {
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>
  isFetchingNextPage: boolean
  locations: City[] | Country[]
  onChange?: (value: string) => void
  setOpen: (value: boolean) => void
  status: 'error' | 'pending' | 'success'
}

export const LocationsList = ({
  locations,
  setOpen,
  onChange,
  fetchNextPage,
  status,
  isFetchingNextPage,
}: Props) => {
  const classes = {
    item: cn('w-full'),
    text: cn(`w-full text-regular-text-14`),
  }
  const { t } = useTranslation()
  const { inView, ref } = useInView({
    threshold: 1.0,
    trackVisibility: true,
    delay: 1000,
  })

  const selectHandler = (value: string) => {
    setOpen(false)

    onChange && onChange(value)
  }

  const content = locations.map((location, index) => {
    if (locations.length === index + 1) {
      return (
        <CommandItem
          className={classes.item}
          key={isCountry(location) ? location.wikiDataId : location.id}
          onSelect={currentValue => selectHandler(currentValue)}
          ref={ref}
          value={location.name}
        >
          <span className={classes.text}>{location.name}</span>
        </CommandItem>
      )
    }

    return (
      <CommandItem
        className={classes.item}
        key={isCountry(location) ? location.wikiDataId : location.id}
        onSelect={currentValue => selectHandler(currentValue)}
        value={location.name}
      >
        <span className={classes.text}>{location.name}</span>
      </CommandItem>
    )
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <CommandList>
      {status === 'pending' && (
        <CommandLoading>{t.pages.profile.settings.combobox.loading}</CommandLoading>
      )}
      {status !== 'pending' && (
        <CommandEmpty>{t.pages.profile.settings.combobox.empty}</CommandEmpty>
      )}
      <CommandGroup>
        {content}
        {isFetchingNextPage && <ButtonSpinner className={'w-full'} height={20} width={20} />}
      </CommandGroup>
    </CommandList>
  )
}
