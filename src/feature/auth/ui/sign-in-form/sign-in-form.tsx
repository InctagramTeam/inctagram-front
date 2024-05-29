import { Card } from '@/shared/ui/card'
import { Text } from '@/shared/ui/text'
import { Flex } from '@/shared/ui/flex'
import { AppLink } from '@/shared/ui/app-link'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import GithubIcon from '@/shared/assets/icons/GithubIcon'
import { Button } from '@/shared/ui/button'
import { AuthRoutes } from '@/shared/constants/routes'
import Link from 'next/link'
import { Input } from '@/shared/ui/input'

export const SignInForm = () => {
  const classes = {
    form: `max-w-[380px] w-full p-[1.5rem]`,
    title: `mb-[0.8rem]`,
    appItems: `flex gap-[60px] justify-center mb-[1.5rem]`,
    button: `py-[6px] px-[24px] mb-[1.2rem]`,
    forgotLink: `py-[0] ml-auto h-auto text-Light-900 mb-[1.5rem] text-right text-regular-text-14 bg-transparent`,
    appLink: `py-[6px]`,
  }

  return (
    <Card asComponent={'form'} className={classes.form}>
      <Text className={classes.title} asComponent={'h1'} textAlign={'center'} variant={'H1'}>
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
        <Input type={'email'} placeholder={'Epam@epam.com'} label={'Email'} required />
        <Input type={'password'} placeholder={'**********'} label={'Password'} required />
      </Flex>
      <Flex direction={'column'}>
        <Button
          asComponent={Link}
          variant={'text'}
          className={classes.forgotLink}
          href={AuthRoutes.FORGOT_PASSWORD}
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
