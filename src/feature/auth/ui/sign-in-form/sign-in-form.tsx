'use client'

import { AuthRoutes } from '@/shared/constants/routes'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Flex } from '@/shared/ui/flex'
import { ControlledInput } from '@/shared/ui/input'
import { Text } from '@/shared/ui/text'
import Link from 'next/link'
import { useTranslation } from '@/shared/lib/hooks/use-translation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInFormValues, signInSchema } from '@/feature/auth/model/utils/validators'
import { clsx } from 'clsx'
import { ReturnComponent } from '@/shared/types'
import { ComponentPropsWithoutRef, forwardRef, Ref, useImperativeHandle } from 'react'
import { useFormRevalidateWithLocale } from '@/shared/lib/hooks/use-form-revalidate-with-locale'
import { UseFormRef } from '@/shared/types/form'
import { AppList } from '@/shared/ui/app-list'

type Props = {
  className?: string
  onSubmit: (formData: SignInFormValues) => void
  disabled?: boolean
  hrefGithub: string
  hrefGoogle: string
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const SignInForm = forwardRef(
  (props: Props, methodsRef: Ref<UseFormRef<SignInFormValues> | null>): ReturnComponent => {
    const { hrefGoogle, hrefGithub, className, disabled, onSubmit, ...rest } = props
    const classes = {
      appItems: `flex gap-[60px] justify-center mb-[1.5rem]`,
      appLink: `py-[6px]`,
      button: `py-[6px] px-[24px] mb-[1.2rem]`,
      forgotLink: `py-[0] ml-auto h-auto text-Light-900 mb-[1.5rem] text-right text-regular-text-14 bg-transparent`,
      form: clsx(`max-w-[380px] w-full p-[1.5rem]`, className),
      title: `mb-[0.8rem]`,
    }

    const { t, locale } = useTranslation()

    const {
      control,
      formState: { isValid, errors },
      handleSubmit,
      reset,
      setError,
      getValues,
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
        <Text asComponent={'h1'} className={classes.title} textAlign={'center'} variant={'H1'}>
          Sign In
          {/*{ t.pages.signIn.title }*/}
        </Text>
        <AppList items={[{ href: hrefGithub }, { href: hrefGoogle }]} />
        <Flex direction={'column'} gap={'24'} items={'center'} justify={'center'} mb={'24px'}>
          <ControlledInput
            control={control}
            name={'email'}
            placeholder={t.placeholders.email}
            rules={{ required: true }}
            autoComplete={'email'}
            label={t.label.email}
            errorMessage={errors.email?.message}
            disabled={disabled}
            type={'email'}
          />
          <ControlledInput
            control={control}
            name={'password'}
            placeholder={t.placeholders.password}
            rules={{ required: true }}
            autoComplete={'current-password'}
            label={t.label.password}
            errorMessage={errors.password?.message}
            disabled={disabled}
            type={'password'}
          />
        </Flex>
        <Flex direction={'column'}>
          <Button
            asComponent={Link}
            className={classes.forgotLink}
            href={AuthRoutes.FORGOT_PASSWORD}
            variant={'text'}
            disabled={isValid || disabled}
          >
            Forgot Password
          </Button>
          <Button className={classes.button} fullWidth>
            {t.button.signIn}
          </Button>
          <Text className={`mb-[6px] text-Light-100`} variant={'regular_text_16'}>
            Don’t have an account?
          </Text>
          <Button
            asComponent={Link}
            variant={'link'}
            className={`my-6 text-balance`}
            href={AuthRoutes.SIGN_UP}
          >
            {t.button.signUp}
          </Button>
        </Flex>
      </Card>
    )
  }
)

SignInForm.displayName = 'SignInForm'
