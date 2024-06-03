'use client'

import { ComponentPropsWithoutRef, Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import { SignInFormValues, signInSchema } from '@/feature/auth/model/utils/validators'
import { AuthRoutes } from '@/shared/constants/routes'
import { useFormRevalidateWithLocale, useTranslation } from '@/shared/lib/hooks'
import { ReturnComponent, UseFormRef } from '@/shared/types'
import { AppList } from '@/shared/ui/app-list'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Flex } from '@/shared/ui/flex'
import { ControlledInput } from '@/shared/ui/input'
import { Text } from '@/shared/ui/text'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import Link from 'next/link'

type Props = {
  className?: string
  disabled?: boolean
  hrefGithub: string
  hrefGoogle: string
  onSubmit: (formData: SignInFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const SignInForm = forwardRef(
  (props: Props, methodsRef: Ref<UseFormRef<SignInFormValues> | null>): ReturnComponent => {
    const { className, disabled, hrefGithub, hrefGoogle, onSubmit, ...rest } = props
    const classes = {
      button: `py-[6px] px-[24px] mb-[1.2rem]`,
      forgotLink: `py-[0] ml-auto h-auto text-Light-900 mb-[1.5rem] text-right !text-regular-text-14 bg-transparent`,
      form: clsx(`max-w-[380px] w-full p-[1.5rem]`, className),
    }

    const { locale, t } = useTranslation()

    const {
      control,
      formState: { errors, isValid },
      getValues,
      handleSubmit,
      reset,
      setError,
      setValue,
    } = useForm<SignInFormValues>({
      defaultValues: {
        email: '',
        password: '',
      },
      resolver: zodResolver(signInSchema(t)),
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
        <Text asComponent={'h1'} mb={'13px'} textAlign={'center'} variant={'H1'}>
          Sign In
          {/*{ t.pages.signIn.title }*/}
        </Text>
        <AppList
          items={[
            { 'aria-label': 'Sign in with github', href: hrefGithub },
            { 'aria-label': 'Sign in with github', href: hrefGoogle },
          ]}
        />
        <Flex direction={'column'} gap={'24'} items={'center'} justify={'center'} mb={'24px'}>
          <ControlledInput
            autoComplete={'email'}
            control={control}
            disabled={disabled}
            errorMessage={errors.email?.message}
            label={t.label.email}
            name={'email'}
            placeholder={t.placeholders.email}
            rules={{ required: true }}
            type={'email'}
          />
          <ControlledInput
            autoComplete={'current-password'}
            control={control}
            disabled={disabled}
            errorMessage={errors.password?.message}
            label={t.label.password}
            name={'password'}
            placeholder={t.placeholders.password}
            rules={{ required: true }}
            type={'password'}
          />
        </Flex>
        <Flex direction={'column'}>
          <Button
            asComponent={Link}
            className={classes.forgotLink}
            disabled={isValid || disabled}
            href={AuthRoutes.FORGOT_PASSWORD}
            variant={'text'}
          >
            Forgot Password
          </Button>
          <Button className={classes.button} fullWidth>
            {t.button.signIn}
          </Button>
          <Text className={`mb-[12px] text-Light-100`} variant={'regular_text_16'}>
            Don’t have an account?
          </Text>
          <Button
            asComponent={Link}
            className={`m-[0] text-balance`}
            href={AuthRoutes.SIGN_UP}
            variant={'link'}
          >
            {t.button.signUp}
          </Button>
        </Flex>
      </Card>
    )
  }
)

SignInForm.displayName = 'SignInForm'
