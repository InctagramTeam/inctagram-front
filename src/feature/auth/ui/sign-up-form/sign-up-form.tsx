'use client'
import { ComponentPropsWithoutRef, Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import GithubIcon from '@/shared/assets/icons/GithubIcon'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import { AuthRoutes, GeneralRoutes } from '@/shared/constants/routes'
import { useFormRevalidateWithLocale } from '@/shared/lib/hooks/use-form-revalidate-with-locale'
import { useTranslation } from '@/shared/lib/hooks/use-translation'
import { Translate } from '@/shared/lib/translate'
import { ReturnComponent } from '@/shared/types'
import { UseFormRef } from '@/shared/types/form'
import { AppLink } from '@/shared/ui/app-link'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card/card'
import { ControlledCheckbox } from '@/shared/ui/checkbox'
import { Flex } from '@/shared/ui/flex'
import { ControlledInput } from '@/shared/ui/input'
import { Text } from '@/shared/ui/text'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import { SignUpFormValues, signUpSchema } from '../../model/utils/validators/signUpValidationSchema'

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
      formState: { errors, isValid },
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
        className={`_Card_ min-h-[648px] w-full max-w-[380px]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`_Wrapper-text-icons_ flex w-full flex-col items-center justify-center`}>
          <Text
            asComponent={'h1'}
            className={'mt-[23px]'}
            mb={'13px'}
            mt={'26px'}
            textAlign={'center'}
            variant={'H1'}
          >
            {t.pages.signUp.title}
          </Text>
          <Flex gap={'60'} justify={'center'} mb={'24px'}>
            <AppLink className={'m-0 w-full max-w-[36px] p-0 '} href={hrefGoogle}>
              <GoogleIcon />
            </AppLink>
            <AppLink className={`m-0 w-full max-w-[36px] p-0`} href={hrefGithub}>
              <GithubIcon />
            </AppLink>
          </Flex>
        </div>
        <Flex direction={'column'} gap={'24'} items={'center'} justify={'center'} mb={'24px'}>
          <ControlledInput
            autoComplete={'username'}
            className={`w-full max-w-[330px]`}
            control={control}
            disabled={disabled}
            errorMessage={errors.username?.message}
            label={t.label.userName}
            name={'username'}
            placeholder={t.placeholders.username}
            rules={{ required: true }}
          />
          <ControlledInput
            autoComplete={'email'}
            className={`w-full max-w-[330px]`}
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
            autoComplete={'new-password'}
            className={`w-full max-w-[330px]`}
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
            autoComplete={'new-password'}
            className={`mb-[10px] w-full max-w-[330px]`}
            control={control}
            disabled={disabled}
            errorMessage={errors.passwordConfirm?.message}
            label={t.label.confirmPassword}
            name={'passwordConfirm'}
            placeholder={t.placeholders.passwordConfirm}
            rules={{ required: true }}
            type={'password'}
          />
          <div className={'mx-auto mb-[12px] w-full max-w-[330px]'}>
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
                          className={`text-balance`}
                          asComponent={Link}
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
          </div>
        </Flex>

        <Flex direction={'column'}>
          <Button
            className={'w-full max-w-[330px] text-balance p-[6px]'}
            disabled={disabled || isValid}
          >
            {t.button.signUp}
          </Button>
          <Text className={`mt-[18px] text-balance text-Light-100`} variant={'regular_text_16'}>
            {t.pages.signUp.question}
          </Text>
          <AppLink className={`my-6 text-balance`} href={AuthRoutes.SIGN_IN}>
            {t.button.signIn}
          </AppLink>
        </Flex>
      </Card>
    )
  }
)
