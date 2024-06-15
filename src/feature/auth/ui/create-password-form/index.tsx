import React, { ComponentPropsWithoutRef, Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import {
  CreatePasswordFormValues,
  createPasswordSchema,
} from '@/feature/auth/model/utils/validators'
import { EMPTY_STRING, SM_BREAKPOINT } from '@/shared/constants'
import { useFormRevalidateWithLocale, useResponsive, useTranslation } from '@/shared/lib'
import { ReturnComponent, UseFormRef } from '@/shared/types'
import { Button, Card, ControlledInput, Flex, Text } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

type Props = {
  className?: string
  disabled?: boolean
  onSubmit: (formData: CreatePasswordFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>
export const CreatePasswordForm = forwardRef(
  (props: Props, methodsRef: Ref<UseFormRef<CreatePasswordFormValues> | null>): ReturnComponent => {
    const { className, disabled, onSubmit, ...rest } = props
    const { locale, t } = useTranslation()
    const { width } = useResponsive()

    const isMobile = width && width < SM_BREAKPOINT

    const classes = {
      form: clsx(
        'max-w-[380px] w-full p-[1.5rem] pb-[2rem] self-start',
        isMobile && 'max-w-full px-0 py-0 bg-transparent border-none rounded-0',
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
    } = useForm<CreatePasswordFormValues>({
      defaultValues: {
        password: EMPTY_STRING,
        passwordConfirm: EMPTY_STRING,
      },
      mode: 'onChange',
      resolver: zodResolver(createPasswordSchema(t)),
    })

    useImperativeHandle(methodsRef, () => ({ reset, setError }))

    useFormRevalidateWithLocale({ currentFormValues: getValues(), errors, locale, setValue })

    console.log(errors)

    if (width === null) {
      return null
    }

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
            aria-describedby={'create-password-email-instructions'}
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
          id={'create-password-email-instructions'}
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
