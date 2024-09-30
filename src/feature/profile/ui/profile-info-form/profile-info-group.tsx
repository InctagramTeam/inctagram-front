import React, { ComponentPropsWithoutRef, Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import { SelectGroup } from '@/feature/profile/ui/profile-info-form/select-group'
import {
  Button,
  ControlledDataPicker,
  ControlledInput,
  ControlledTextarea,
  EMPTY_STRING,
  ReturnComponent,
  UseFormRef,
  cn,
  useFormRevalidateWithLocale,
  useResponsive,
  useTranslation,
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import { ProfileInfoFormValues, profileInfoSchema } from '../../model'

// const geonames = Geonames({
//   username: 'inctagram',
//   lan: 'en',
//   encoding: 'JSON',
// })

type Props = {
  className?: string
  disabled?: boolean
  isSent?: boolean
  onSubmit: (formData: ProfileInfoFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const ProfileInfoForm = forwardRef(
  (props: Props, methodsRef: Ref<UseFormRef<ProfileInfoFormValues> | null>): ReturnComponent => {
    // const { className, disabled, isSent = false,  } = props
    const { className, disabled, onSubmit, ...rest } = props
    const { locale, t } = useTranslation()
    const { xs } = useResponsive()

    const classes = {
      button: 'mb-[30px] px-[24px] py-[6px]',
      form: cn(
        'flex flex-col gap-6 min-w-full w-full p-[1.5rem] pb-[20px] self-start',
        xs && 'max-w-full px-0 py-0 bg-transparent border-none rounded-0',
        className
      ),
    }

    const {
      clearErrors,
      control,
      formState: { errors },
      getValues,
      handleSubmit,
      reset,
      setError,
      setValue,
    } = useForm<ProfileInfoFormValues>({
      defaultValues: { firstName: EMPTY_STRING, userName: EMPTY_STRING },
      mode: 'onChange',
      resolver: zodResolver(profileInfoSchema(t)),
    })

    useImperativeHandle(methodsRef, () => ({ clearErrors, reset, setError, setValue }))
    useFormRevalidateWithLocale({ currentFormValues: getValues(), errors, locale, setValue })

    return (
      <div className={className}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} {...rest}>
          <ControlledInput
            aria-invalid={errors.userName ? 'true' : 'false'}
            autoComplete={'username'}
            control={control}
            disabled={disabled}
            errorMessage={errors.userName?.message}
            label={t.label.userName}
            labelProps={{ className: `after:content-['*'] after:ml-0.5 after:text-red-500` }}
            name={'userName'}
            placeholder={t.placeholders.username}
            type={'text'}
          />
          <ControlledInput
            aria-invalid={errors.firstName ? 'true' : 'false'}
            control={control}
            disabled={disabled}
            errorMessage={errors.firstName?.message}
            label={t.label.firstName}
            labelProps={{ className: `after:content-['*'] after:ml-0.5 after:text-red-500` }}
            name={'firstName'}
            placeholder={t.placeholders.firstName}
            type={'text'}
          />
          <ControlledInput
            aria-invalid={errors.lastName ? 'true' : 'false'}
            control={control}
            disabled={disabled}
            errorMessage={errors.lastName?.message}
            label={t.label.lastName}
            labelProps={{ className: `after:content-['*'] after:ml-0.5 after:text-red-500` }}
            name={'lastName'}
            placeholder={t.placeholders.lastName}
            type={'text'}
          />
          <ControlledDataPicker
            control={control}
            defaultValue={t.placeholders.dateOfBirth}
            label={t.label.dateOfBirth}
            name={'dateOfBirth'}
          />
          <SelectGroup control={control} />
          <ControlledTextarea
            aria-invalid={errors.aboutMe ? 'true' : 'false'}
            control={control}
            disabled={disabled}
            errorMessage={errors.aboutMe?.message}
            label={t.label.aboutMe}
            name={'aboutMe'}
            placeholder={t.placeholders.aboutMe}
          />
          <div className={'text-right'}>
            <Button
              className={classes.button}
              // disabled={!!Object.keys(errors).length ?? disabled}
              type={'submit'}
            >
              {t.button.save}
            </Button>
          </div>
        </form>
      </div>
    )
  }
)

ProfileInfoForm.displayName = 'ProfileInfoForm'
