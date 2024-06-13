import { useFormRevalidateWithLocale, useResponsive, useTranslation } from '@/shared/lib/hooks'
import { ReturnComponent, UseFormRef } from '@/shared/types'
import { AuthRoutes, EMPTY_STRING, SM_BREAKPOINT } from '@/shared/constants'
import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  Ref,
  RefObject,
  useImperativeHandle,
} from 'react'
import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from '@/feature/auth/model/utils/validators'
import { Card } from '@/shared/ui/card'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Text } from '@/shared/ui/text'
import { ControlledInput } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Recaptcha } from '@/shared/ui/recaptcha/recaptcha'
import { clsx } from 'clsx'
import Link from 'next/link'
import ReCAPTCHA from 'react-google-recaptcha'

type Props = {
  disabled?: boolean
  className?: string
  onSubmit: (formData: ForgotPasswordFormValues) => void
  recaptchaRef: RefObject<ReCAPTCHA>
  recaptchaChangeHandler: (value: string | null) => void
  isSent?: boolean
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const ForgotPasswordForm = forwardRef(
  (props: Props, methodsRef: Ref<UseFormRef<ForgotPasswordFormValues> | null>): ReturnComponent => {
    const {
      className,
      disabled,
      isSent = false,
      recaptchaRef,
      recaptchaChangeHandler,
      onSubmit,
      ...rest
    } = props
    const { t, locale } = useTranslation()
    const { width } = useResponsive()
    const isMobile = width && width < SM_BREAKPOINT

    const classes = {
      form: clsx(
        'max-w-[380px] w-full p-[1.5rem] pb-[20px] self-start',
        isMobile && 'max-w-full px-0 py-0 bg-transparent border-none rounded-0',
        className
      ),
      hint: clsx('text-Light-900', isSent ? 'mb-[24px]' : 'mb-[17px]'),
      button: 'mb-[30px] px-[24px] py-[6px]',
      link: 'mx-auto mb-[22px] !flex w-max',
    }

    const {
      control,
      formState: { errors },
      setError,
      setValue,
      getValues,
      handleSubmit,
      reset,
      clearErrors,
    } = useForm<ForgotPasswordFormValues>({
      defaultValues: { email: EMPTY_STRING },
      mode: 'onChange',
      resolver: zodResolver(forgotPasswordSchema(t)),
    })

    useImperativeHandle(methodsRef, () => ({ reset, setError, clearErrors, setValue }))
    useFormRevalidateWithLocale({ currentFormValues: getValues(), errors, locale, setValue })

    return (
      <Card
        asComponent={'form'}
        className={classes.form}
        {...rest}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text asComponent={'h1'} mb={'37px'} textAlign={'center'} variant={'H1'}>
          {t.pages.forgotPassword.title}
        </Text>
        <ControlledInput
          className={'mb-[7px]'}
          aria-describedby={'forgot-password-email-instructions'}
          aria-invalid={errors.email ? 'true' : 'false'}
          control={control}
          name={'email'}
          type={'email'}
          label={t.label.email}
          placeholder={t.placeholders.email}
          rules={{ required: true }}
          errorMessage={errors.email?.message}
          disabled={disabled}
          autoComplete={'email'}
        />
        <Text
          id={'forgot-password-email-instructions'}
          asComponent={'p'}
          className={classes.hint}
          variant={'regular-text-14'}
        >
          {t.pages.forgotPassword.hint}
        </Text>

        {isSent && (
          <Text
            id={'forgot-password-email-instructions'}
            asComponent={'p'}
            mb={'18px'}
            variant={'regular-text-14'}
          >
            {t.pages.forgotPassword.sent}
          </Text>
        )}

        <Button
          className={classes.button}
          disabled={!!Object.keys(errors).length || disabled}
          fullWidth
          type={'submit'}
        >
          {isSent ? t.button.sendLinkAgain : t.button.sendLink}
        </Button>
        <Button
          asComponent={Link}
          className={classes.link}
          href={AuthRoutes.SIGN_IN}
          variant={'link'}
        >
          {t.button.backToSignIn}
        </Button>
        <Recaptcha
          ref={recaptchaRef}
          errorMessage={errors?.recaptcha?.message}
          onChange={recaptchaChangeHandler}
          wrapperClassName={'mx-auto'}
        />
      </Card>
    )
  }
)

ForgotPasswordForm.displayName = 'ForgotPasswordForm'
