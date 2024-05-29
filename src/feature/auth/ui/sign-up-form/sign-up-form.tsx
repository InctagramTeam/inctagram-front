import { Text } from '@/shared/ui/text'
import { Flex } from '@/shared/ui/flex'
import { AppLink } from '@/shared/ui/app-link'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import GithubIcon from '@/shared/assets/icons/GithubIcon'
import { Input } from '@/shared/ui/input'
import { Checkbox } from '@/shared/ui/checkbox'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card/card'
import { ComponentPropsWithoutRef, forwardRef, Ref, useImperativeHandle } from 'react'
import { UseFormRef } from '@/shared/types/form'
import { SignUpFormValues, signUpSchema } from '../../model/utils/validators/signUpValidationSchema'
import { ReturnComponent } from '@/shared/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from '@/shared/lib/hooks/use-translation'

type Props = {
  className?: string
  disabled?: boolean
  onSubmit: (formData: SignUpFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const SignUpForm = forwardRef(
  (props: Props, ref: Ref<UseFormRef<SignUpFormValues>>): ReturnComponent => {
    const { className, disabled, onSubmit, ...rest } = props
    const { locale, t } = useTranslation()

    const {
      control,
      formState: { errors, isValid },
      getValues,
      handleSubmit,
      reset,
      setError,
      setValue,
    } = useForm<SignUpFormValues>({
      defaultValues: {
        accept: false,
        email: '',
        password: '',
        passwordConfirm: '',
        username: '',
      },
      mode: 'onTouched',
      resolver: zodResolver(signUpSchema(t)),
    })

    useImperativeHandle(ref, () => ({ reset, setError }))

    // useFormRevalidateWithLocale({ errors, locale, setValue, values: getValues() })

    return (
      <Card
        {...rest}
        className={`_Card_ shadow-shadow-Dark-30 min-h-[648px] w-[380px] rounded
        border border-Dark-300 bg-Dark-500`}
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
            <AppLink className={'m-0 w-full max-w-[36px] p-0 '} href={'https://google.com'}>
              <GoogleIcon />
            </AppLink>
            <AppLink className={`m-0 w-full max-w-[36px] p-0`} href={'https://github.com'}>
              <GithubIcon />
            </AppLink>
          </Flex>
        </div>
        <Flex
          direction={'column'}
          gap={'24'}
          items={'center'}
          justify={'center'}
          max={'330px'}
          mb={'24px'}
        >
          <Input className={`w-full max-w-[330px]`} label={'Username'} type={'text'} />
          <Input className={`w-full max-w-[330px]`} label={'Email'} type={'email'} />
          <Input className={`w-full max-w-[330px]`} label={'Password'} type={'password'} />
          <Input
            className={`w-full max-w-[330px]`}
            label={'Password confirmation'}
            type={'password'}
          />
          <div className={'mx-auto w-full max-w-[330px]'}>
            <Flex gap={'1'} items={'center'} justify={'spaceEvenly'}>
              <Checkbox className={'mr-2 inline-block'} />
              <Text variant={'small-text-12'}>I agree to the</Text>
              <Text asComponent={AppLink} href={'auth/term-of-service'} variant={'small-link_12'}>
                Terms of Service
              </Text>
              <Text variant={'small-text-12'}>and</Text>
              <Text asComponent={AppLink} href={'auth/privacy-policy'} variant={'small-link_12'}>
                Privacy Policy
              </Text>
            </Flex>
          </div>
        </Flex>

        <Flex direction={'column'} gap={'12'}>
          <Button className={'w-full max-w-[330px] py-[6px]'}>Sign Up</Button>
          <Text className={`text-Primary-300`} variant={'regular_text_16'}>
            Do you have an account?
          </Text>
          <AppLink href={'/sign-in'}>Sign In</AppLink>
        </Flex>
      </Card>
    )
  }
)
