import React, {
  ComponentPropsWithoutRef,
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react'
import { useForm } from 'react-hook-form'

import { ProfileSettings } from '@/feature/profile/model/types'
import { ComboboxGroup } from '@/feature/profile/ui/profile-info-form/combobox-group'
import {
  Button,
  ControlledDataPicker,
  ControlledInput,
  ControlledTextarea,
  EMPTY_STRING,
  ReturnComponent,
  Skeleton,
  UseFormRef,
  cn,
  useFormRevalidateWithLocale,
  useResponsive,
  useTranslation,
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import { ProfileInfoFormValues, profileInfoSchema } from '../../model'

export const ProfileInfoFormSkeleton = () => {
  const classes = {
    button: 'mb-[30px] px-[24px] py-[6px]',
    form: cn('flex w-full flex-col gap-6 p-[1.5rem] pb-[20px]'),
  }

  return (
    <>
      <div className={'flex flex-col gap-y-6 py-[1.5rem]'}>
        <Skeleton circle className={'h-48 w-48'} />
        <Skeleton className={'h-[60px] '} />
      </div>
      <div className={classes.form}>
        <Skeleton className={'h-[60px] '} />
        <Skeleton className={'h-[60px] '} />
        <Skeleton className={'h-[60px] '} />
        <Skeleton className={'h-[60px] '} />
        <div className={'flex gap-6'}>
          <Skeleton className={'h-[60px] w-full'} />
          <Skeleton className={'h-[60px] w-full'} />
        </div>
        <Skeleton className={'h-[108px] '} />
        <div className={'flex justify-end'}>
          <Skeleton className={'h-[36px] w-[150px]'} />
        </div>
      </div>
    </>
  )
}

ProfileInfoFormSkeleton.displayName = 'ProfileInfoFormSkeleton'
