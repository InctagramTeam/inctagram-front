'use client'
import { Text } from '@/shared/ui/text'
import { Flex } from '@/shared/ui/flex'
import { AppLink } from '@/shared/ui/app-link'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import GithubIcon from '@/shared/assets/icons/GithubIcon'
import { ControlledInput } from '@/shared/ui/input'
import { ControlledCheckbox } from '@/shared/ui/checkbox'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card/card'
import { ComponentPropsWithoutRef, forwardRef, Ref, useImperativeHandle } from 'react'
import { UseFormRef } from '@/shared/types/form'
import { SignUpFormValues, signUpSchema } from '../../model/utils/validators/signUpValidationSchema'
import { ReturnComponent } from '@/shared/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from '@/shared/lib/hooks/use-translation'
import { useFormRevalidateWithLocale } from '@/shared/lib/hooks/use-form-revalidate-with-locale'
import { Translate } from '@/shared/lib/translate'
import Link from 'next/link'
import { AuthRoutes, GeneralRoutes } from '@/shared/constants/routes'

type Props = {
  className?: string
  disabled?: boolean
  hrefGithub: string
  hrefGoogle: string
  onSubmit: (formData: SignUpFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const SignUpForm = forwardRef(
  (props: Props, ref: Ref<UseFormRef<SignUpFormValues>>): ReturnComponent => {
    const { className, disabled = false, hrefGithub, hrefGoogle, onSubmit, ...rest } = props

    const { locale, t } = useTranslation()

    const {
      control,
      /** Состояние формы6 errors - ошибки всех полей */
      formState: { errors, isValid },
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

    useImperativeHandle(ref, () => ({ reset, setError }))

    useFormRevalidateWithLocale({ errors, locale, setValue, values: getValues() })

    return (
      <Card
        {...rest}
        className={`_Card_ min-h-[648px] w-full max-w-[380px]`}
        asComponent={'form'}
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
            className={`w-full max-w-[330px]`}
            autoComplete={'username'}
            control={control}
            disabled={disabled}
            errorMessage={errors.username?.message}
            label={t.label.userName}
            name={'username'}
            placeholder={t.placeholders.username}
            rules={{ required: true }}
          />
          <ControlledInput
            className={`w-full max-w-[330px]`}
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
            className={`mb-[22px] w-full max-w-[330px]`}
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
          <div className={'mx-auto mb-[22px] w-full max-w-[330px]'}>
            <ControlledCheckbox
              className={'mr-2 inline-block'}
              control={control}
              disabled={disabled}
              name={'accept'}
              label={
                <Text variant={'small-text-12'} className={`ml-4 `}>
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
                          href={{ pathname: GeneralRoutes.PRIVACY, query: { sender: 'signup' } }}
                          variant="small-link_12"
                        >
                          {t.pages.signUp.agreement.privacy}
                        </Text>
                      ),
                    }}
                    text={t.pages.signUp.agreement.description}
                  />
                </Text>
              }
            />
          </div>
        </Flex>

        <Flex direction={'column'} gap={'18'}>
          <Button className={'w-full max-w-[330px] p-[6px]'} disabled={disabled || isValid}>
            {t.button.signUp}
          </Button>
          <Text className={`text-Light-100`} variant={'regular_text_16'}>
            {t.pages.signUp.question}
          </Text>
          <AppLink href={AuthRoutes.SIGN_IN}>{t.button.signIn}</AppLink>
        </Flex>
      </Card>
    )
  }
)
