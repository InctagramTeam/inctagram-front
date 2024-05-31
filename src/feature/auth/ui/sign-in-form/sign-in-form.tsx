import GithubIcon from '@/shared/assets/icons/GithubIcon'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import { AuthRoutes } from '@/shared/constants/routes'
import { AppLink } from '@/shared/ui/app-link'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Flex } from '@/shared/ui/flex'
import { Input } from '@/shared/ui/input'
import { Text } from '@/shared/ui/text'
import Link from 'next/link'

export const SignInForm = () => {
  const classes = {
    appItems: `flex gap-[60px] justify-center mb-[1.5rem]`,
    appLink: `py-[6px]`,
    button: `py-[6px] px-[24px] mb-[1.2rem]`,
    forgotLink: `py-[0] ml-auto h-auto text-Light-900 mb-[1.5rem] text-right text-regular-text-14 bg-transparent`,
    form: `max-w-[380px] w-full p-[1.5rem]`,
    title: `mb-[0.8rem]`,
  }

  return (
    <Card asComponent={'form'} className={classes.form}>
      <Text asComponent={'h1'} className={classes.title} textAlign={'center'} variant={'H1'}>
        Sign In
      </Text>
      <ul className={classes.appItems}>
        <li>
          <AppLink className={'w-[36px]'} href={'#'}>
            <GoogleIcon />
          </AppLink>
        </li>
        <li>
          <AppLink className={`w-[36px]`} href={'#'}>
            <GithubIcon />
          </AppLink>
        </li>
      </ul>
      <Flex direction={'column'} gap={'24'} items={'center'} justify={'center'} mb={'24px'}>
        <Input label={'Email'} placeholder={'Epam@epam.com'} required type={'email'} />
        <Input label={'Password'} placeholder={'**********'} required type={'password'} />
      </Flex>
      <Flex direction={'column'}>
        <Button
          asComponent={Link}
          className={classes.forgotLink}
          href={AuthRoutes.FORGOT_PASSWORD}
          variant={'text'}
        >
          Forgot Password
        </Button>
        <Button className={classes.button} fullWidth>
          Sign In
        </Button>
        <Text className={`mb-[6px] text-Light-100`} variant={'regular_text_16'}>
          Don’t have an account?
        </Text>
        <AppLink className={classes.appLink} href={AuthRoutes.SIGN_UP}>
          Sign Up
        </AppLink>
      </Flex>
    </Card>
  )
}

SignInForm.displayName = 'SignInForm'
