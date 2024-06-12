import React, { ComponentPropsWithoutRef, forwardRef, Ref, useImperativeHandle } from 'react'

import {
  CreatePasswordFormValues,
  createPasswordSchema,
} from '@/feature/auth/model/utils/validators'
import { useFormRevalidateWithLocale, useResponsive, useTranslation } from '@/shared/lib/hooks'
import { Card } from '@/shared/ui/card'
import { clsx } from 'clsx'
import { ReturnComponent, UseFormRef } from '@/shared/types'
import { useForm } from 'react-hook-form'
import { EMPTY_STRING, SM_BREAKPOINT } from '@/shared/constants'
import { Text } from '@/shared/ui/text'
import { Flex } from '@/shared/ui/flex'
import { ControlledInput } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
  className?: string
  disabled?: boolean
  onSubmit: (formData: CreatePasswordFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>
export const CreatePasswordForm = forwardRef(
  (props: Props, methodsRef: Ref<UseFormRef<CreatePasswordFormValues> | null>): ReturnComponent => {
    const { className, disabled, onSubmit, ...rest } = props
    const { t, locale } = useTranslation()
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
      handleSubmit,
      formState: { errors },
      getValues,
      setValue,
      reset,
      setError,
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
        className={classes.form}
        asComponent={'form'}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}
      >
        <Text asComponent={'h1'} mb={'37px'} textAlign={'center'} variant={'H1'}>
          {t.pages.createPassword.title}
        </Text>
        <Flex direction={'column'} gap={'24'} mb={'7px'}>
          <ControlledInput
            aria-invalid={errors.password ? 'true' : 'false'}
            autoComplete={'new-password'}
            control={control}
            name={'password'}
            placeholder={t.placeholders.password}
            label={t.label.password}
            type={'password'}
            rules={{ required: true }}
            disabled={disabled}
            errorMessage={errors.password?.message}
          />
          <ControlledInput
            aria-invalid={errors.passwordConfirm ? 'true' : 'false'}
            autoComplete={'new-password'}
            control={control}
            name={'passwordConfirm'}
            placeholder={t.placeholders.passwordConfirm}
            label={t.label.confirmPassword}
            type={'password'}
            rules={{ required: true }}
            disabled={disabled}
            errorMessage={errors.passwordConfirm?.message}
          />
        </Flex>
        <Text
          className={'text-Light-900'}
          asComponent={'p'}
          mb={'41px'}
          variant={'regular-text-14'}
        >
          {t.pages.createPassword.hint}
        </Text>
        <Button
          className={'px-[24px] py-[6px]'}
          type={'submit'}
          disabled={!!Object.keys(errors).length || disabled}
          fullWidth
        >
          {t.button.createNewPassword}
        </Button>
      </Card>
    )
  }
)

CreatePasswordForm.displayName = 'CreatePasswordForm'
