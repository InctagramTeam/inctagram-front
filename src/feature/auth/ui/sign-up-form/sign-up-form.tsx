'use client'
import { ComponentPropsWithoutRef, Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import { SignUpFormValues, signUpSchema } from '@/feature/auth/model/utils/validators'
import { AuthRoutes, GeneralRoutes } from '@/shared/constants'
import { useFormRevalidateWithLocale, useTranslation } from '@/shared/lib/hooks'
import { ReturnComponent } from '@/shared/types'
import { UseFormRef } from '@/shared/types/form'
import { AppList } from '@/shared/ui/app-list'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { ControlledCheckbox } from '@/shared/ui/checkbox'
import { Flex } from '@/shared/ui/flex'
import { ControlledInput } from '@/shared/ui/input'
import { Text } from '@/shared/ui/text'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import Link from 'next/link'
import { Translate } from 'src/shared/lib/translate'

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
        email: '',
        password: '',
        passwordConfirm: '',
        username: '',
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

    return (
      <Card
        {...rest}
        asComponent={'form'}
        className={clsx('w-full max-w-[380px] p-[1.5rem]', className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text asComponent={'h1'} mb={'13px'} textAlign={'center'} variant={'H1'}>
          {t.pages.signUp.title}
        </Text>
        <AppList
          items={[
            { 'aria-label': 'Sign up with github', href: hrefGithub },
            { 'aria-label': 'Sign up with google', href: hrefGoogle },
          ]}
        />
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
              <Text
                className={`ml-4 inline-block w-full text-balance text-left`}
                variant={'small-text-12'}
              >
                <Translate
                  tags={{
                    '1': () => (
                      <Text
                        asComponent={Link}
                        href={{ pathname: GeneralRoutes.TERMS, query: { sender: 'signup' } }}
                        variant={'small-link_12'}
                      >
                        {t.pages.signUp.agreement.terms}
                      </Text>
                    ),
                    '2': () => (
                      <Text
                        asComponent={Link}
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
          <Button
            className={'mb-[18px] text-balance p-[6px]'}
            disabled={!!Object.keys(errors).length || disabled}
            fullWidth
          >
            {t.button.signUp}
          </Button>
          <Text className={`mb-[12px] text-balance text-Light-100`} variant={'regular_text_16'}>
            {t.pages.signUp.question}
          </Text>
          <Button
            asComponent={Link}
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
