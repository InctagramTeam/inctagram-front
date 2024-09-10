import React, { ComponentPropsWithoutRef, Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import {
  Button,
  Card,
  cn,
  ControlledInput,
  ControlledTextarea,
  DatePicker,
  EMPTY_STRING,
  ReturnComponent,
  SelectBox,
  UseFormRef,
  useFormRevalidateWithLocale,
  useResponsive,
  useTranslation,
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { ProfileSettingsFormValues, profileSettingsSchema } from '../../model'

//TODO - получить с бека
const options = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
]

type Props = {
  className?: string
  disabled?: boolean
  isSent?: boolean
  onSubmit: (formData: ProfileSettingsFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const ProfileSettingsForm = forwardRef(
  (
    props: Props,
    methodsRef: Ref<UseFormRef<ProfileSettingsFormValues> | null>
  ): ReturnComponent => {
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
    } = useForm<ProfileSettingsFormValues>({
      defaultValues: { userName: EMPTY_STRING, firstName: EMPTY_STRING },
      mode: 'onChange',
      resolver: zodResolver(profileSettingsSchema(t)),
    })

    useImperativeHandle(methodsRef, () => ({ clearErrors, reset, setError, setValue }))
    useFormRevalidateWithLocale({ currentFormValues: getValues(), errors, locale, setValue })

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} {...rest}>
          <ControlledInput
            aria-invalid={errors.userName ? 'true' : 'false'}
            autoComplete={'username'}
            control={control}
            disabled={disabled}
            errorMessage={errors.userName?.message}
            label={t.label.userName}
            name={'userName'}
            placeholder={t.placeholders.username}
            type={'text'}
            rules={{ required: true }}
          />
          <ControlledInput
            aria-invalid={errors.firstName ? 'true' : 'false'}
            control={control}
            disabled={disabled}
            errorMessage={errors.firstName?.message}
            label={t.label.firstName}
            name={'firstName'}
            placeholder={t.placeholders.firstName}
            type={'text'}
            rules={{ required: true }}
          />
          <ControlledInput
            aria-invalid={errors.lastName ? 'true' : 'false'}
            control={control}
            disabled={disabled}
            errorMessage={errors.lastName?.message}
            label={t.label.lastName}
            name={'lastName'}
            placeholder={t.placeholders.lastName}
            type={'text'}
            rules={{ required: true }}
          />
          <DatePicker
            name={'dateOfBirth'}
            label={t.label.dateOfBirth}
            textTrigger="00.00.0000"
            errorMessage={errors.dateOfBirth?.message}
            disabled={disabled}
          />
          <div className="flex justify-between gap-6">
            <SelectBox
              label="Select your country"
              placeholder="Country"
              name="country"
              options={options}
              className="w-full"
            />
            <SelectBox
              label="Select your city"
              placeholder="City"
              name="city"
              options={options}
              className="w-full"
            />
          </div>
          <ControlledTextarea
            aria-invalid={errors.aboutMe ? 'true' : 'false'}
            control={control}
            disabled={disabled}
            errorMessage={errors.aboutMe?.message}
            label={t.label.aboutMe}
            name={'aboutMe'}
            placeholder={t.placeholders.aboutMe}
            rules={{ required: true }}
          />

          <Button
            className={classes.button}
            // disabled={!!Object.keys(errors).length ?? disabled}
            type={'submit'}
          >
            {t.button.save}
          </Button>
        </form>
      </div>
    )
  }
)

ProfileSettingsForm.displayName = 'ProfileSettingsForm'
