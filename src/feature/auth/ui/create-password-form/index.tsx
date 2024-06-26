import React, { ComponentPropsWithoutRef, Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import { CreateNewPasswordFormValues, createPasswordSchema } from '@/feature'
import {
  Button,
  Card,
  ControlledInput,
  EMPTY_STRING,
  Flex,
  ReturnComponent,
  Text,
  UseFormRef,
  useFormRevalidateWithLocale,
  useResponsive,
  useTranslation,
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

type Props = {
  className?: string
  disabled?: boolean
  onSubmit: (formData: CreateNewPasswordFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>
export const CreatePasswordForm = forwardRef(
  (
    props: Props,
    methodsRef: Ref<UseFormRef<CreateNewPasswordFormValues> | null>
  ): ReturnComponent => {
    const { className, disabled, onSubmit, ...rest } = props
    const { locale, t } = useTranslation()
    const { xs } = useResponsive()

    const classes = {
      form: clsx(
        'max-w-[380px] w-full p-[1.5rem] pb-[2rem] self-start',
        xs && 'max-w-full px-0 py-0 bg-transparent border-none rounded-0',
        className
      ),
    }

    const {
      control,
      formState: { errors },
      getValues,
      handleSubmit,
      reset,
      setError,
      setValue,
    } = useForm<CreateNewPasswordFormValues>({
      defaultValues: {
        password: EMPTY_STRING,
        passwordConfirm: EMPTY_STRING,
      },
      mode: 'onChange',
      resolver: zodResolver(createPasswordSchema(t)),
    })

    useImperativeHandle(methodsRef, () => ({ reset, setError }))

    useFormRevalidateWithLocale({ currentFormValues: getValues(), errors, locale, setValue })

    return (
      <Card
        asComponent={'form'}
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}
      >
        <Text asComponent={'h1'} mb={'37px'} textAlign={'center'} variant={'H1'}>
          {t.pages.createPassword.title}
        </Text>
        <Flex direction={'column'} gap={'24'} mb={'7px'}>
          <ControlledInput
            aria-describedby={'create-new-password-email-instructions'}
            aria-invalid={errors.password ? 'true' : 'false'}
            autoComplete={'new-password'}
            control={control}
            disabled={disabled}
            errorMessage={errors.password?.message}
            label={t.label.password}
            name={'password'}
            placeholder={t.placeholders.password}
            rules={{ required: true }}
            type={'password'}
          />
          <ControlledInput
            aria-invalid={errors.passwordConfirm ? 'true' : 'false'}
            autoComplete={'new-password'}
            control={control}
            disabled={disabled}
            errorMessage={errors.passwordConfirm?.message}
            label={t.label.confirmPassword}
            name={'passwordConfirm'}
            placeholder={t.placeholders.passwordConfirm}
            rules={{ required: true }}
            type={'password'}
          />
        </Flex>
        <Text
          asComponent={'p'}
          className={'text-Light-900'}
          id={'create-new-password-email-instructions'}
          mb={'41px'}
          variant={'regular-text-14'}
        >
          {t.pages.createPassword.hint}
        </Text>
        <Button
          className={'px-[24px] py-[6px]'}
          disabled={!!Object.keys(errors).length || disabled}
          fullWidth
          type={'submit'}
        >
          {t.button.createNewPassword}
        </Button>
      </Card>
    )
  }
)

CreatePasswordForm.displayName = 'CreatePasswordForm'
