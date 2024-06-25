'use client'
import { ComponentPropsWithoutRef, Ref, forwardRef, useImperativeHandle, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { SignUpFormValues, signUpSchema } from '@/feature/auth/model/utils/validators'
import {
  AppLinksList,
  AuthRoutes,
  Button,
  ButtonSpinner,
  Card,
  ControlledCheckbox,
  ControlledInput,
  EMPTY_STRING,
  Flex,
  GeneralRoutes,
  ReturnComponent,
  SM_BREAKPOINT,
  Text,
  Translate,
  UseFormRef,
  useFormRevalidateWithLocale,
  useResponsive,
  useTranslation,
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { AppLink } from '@/shared/ui/app-link/app-link'

type Props = {
  className?: string
  disabled?: boolean
  hrefGithub: string
  hrefGoogle: string
  onSubmit: (formData: SignUpFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const SignUpForm = forwardRef(
  (props: Props, methodsRef: Ref<UseFormRef<SignUpFormValues> | null>): ReturnComponent => {
    const { className, disabled = false, hrefGithub, hrefGoogle, onSubmit, ...rest } = props

    const { locale, t } = useTranslation()
    const { width } = useResponsive()

    const isMobile = width && width < SM_BREAKPOINT

    const classes = {
      agreement: 'ml-4 inline-block w-full text-balance text-left',
      button: 'mb-[18px] text-balance p-[6px]',
      form: clsx(
        'max-w-[380px] w-full p-[1.5rem] self-start',
        isMobile && 'max-w-full px-0 py-0 bg-transparent border-none rounded-0',
        className
      ),
      question: 'mb-[12px] text-balance text-Light-100',
    }

    const {
      control,
      /** Состояние формы6 errors - ошибки всех полей */
      formState: { errors },
      /** Получение значений формы */
      getValues,
      handleSubmit,
      /** Сброс полей всей формы */
      reset,
      setError,
      /** Позволяет самим задать value -> после запроса на сервер, когда данные пришли, их устанавливаем в поля формы */
      setValue,
    } = useForm<SignUpFormValues>({
      /** Значения формы по умолчанию */
      defaultValues: {
        email: EMPTY_STRING,
        password: EMPTY_STRING,
        passwordConfirm: EMPTY_STRING,
        username: EMPTY_STRING,
      },
      /** Режим срабатывания подсветки ошибок при изменении полей */
      mode: 'onChange',
      resolver: zodResolver(signUpSchema(t)),
    })

    /** Используется с неуправляемыми компонентами для прокидывания в верхний (родительский) компонент "Ref" функций управления состоянием формы.
     * Результат вызова функции поместися в "Ref" -в handleSubmitForm = () => можем сбросить состояние формы: ref?.current?.reset()
     * */
    useImperativeHandle(methodsRef, () => ({ reset, setError }))

    useFormRevalidateWithLocale({ currentFormValues: getValues(), errors, locale, setValue })

    const isSubmitting = useForm().formState.isSubmitting
    const appLinksList = useMemo(
      () => [
        { 'aria-label': t.pages.signUp.github, href: hrefGithub },
        { 'aria-label': t.pages.signUp.google, href: hrefGoogle },
      ],
      [hrefGithub, hrefGoogle]
    )

    return (
      <Card
        {...rest}
        asComponent={'form'}
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text asComponent={'h1'} mb={'13px'} textAlign={'center'} variant={'H1'}>
          {t.pages.signUp.title}
        </Text>
        <AppLinksList items={appLinksList} />
        <Flex direction={'column'} gap={'24'} items={'center'} justify={'center'} mb={'24px'}>
          <ControlledInput
            aria-invalid={errors.username ? 'true' : 'false'}
            autoComplete={'username'}
            control={control}
            disabled={disabled}
            errorMessage={errors.username?.message}
            label={t.label.userName}
            name={'username'}
            placeholder={t.placeholders.username}
            rules={{ required: true }}
            type={'text'}
          />
          <ControlledInput
            aria-invalid={errors.email ? 'true' : 'false'}
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
          <ControlledCheckbox
            className={'mr-2 inline-block'}
            control={control}
            disabled={disabled}
            label={
              <Text asComponent={'p'} className={classes.agreement} variant={'small-text-12'}>
                <Translate
                  tags={{
                    '1': () => (
                      <Text
                        asComponent={AppLink}
                        href={{ pathname: GeneralRoutes.TERMS, query: { sender: 'signup' } }}
                        variant={'small-link_12'}
                      >
                        {t.pages.signUp.agreement.terms}
                      </Text>
                    ),
                    '2': () => (
                      <Text
                        asComponent={AppLink}
                        className={`text-balance`}
                        href={{ pathname: GeneralRoutes.PRIVACY, query: { sender: 'signup' } }}
                        variant={'small-link_12'}
                      >
                        {t.pages.signUp.agreement.privacy}
                      </Text>
                    ),
                  }}
                  text={t.pages.signUp.agreement.description}
                />
              </Text>
            }
            name={'accept'}
          />
        </Flex>

        <Flex direction={'column'}>
          <Button className={classes.button} disabled={isSubmitting} fullWidth type={'submit'}>
            {isSubmitting && <ButtonSpinner className={'h-4 w-4 animate-spin'} />}
            {t.button.signUp}
          </Button>
          <Text className={classes.question} variant={'regular_text_16'}>
            {t.pages.signUp.question}
          </Text>
          <Button
            asComponent={AppLink}
            className={`m-[0] text-balance`}
            href={AuthRoutes.SIGN_IN}
            variant={'link'}
          >
            {t.button.signIn}
          </Button>
        </Flex>
      </Card>
    )
  }
)
