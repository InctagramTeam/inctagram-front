import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'
import { Text } from '@/components/ui/text'
import GoogleIcon from '@/assets/icons/GoogleIcon'
import GithubIcon from '@/assets/icons/GithubIcon'
import { Flex } from '@/components/ui/flex/flex'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button_'

type Props = {}

const SignUp = ({}: Props) => {
  return (
    <PageWrapper title={'SignUp | Instagram'}>
      <div
        className={`_Card_ w-[380px] min-h-[648px] bg-Dark-500 rounded
        border border-Dark-300 shadow-shadow-Dark-30`}
      >
        <div className={`_Wrapper-text-icons_ w-full flex flex-col items-center justify-center`}>
          <Text
            asComponent={'h1'}
            className={'mt-[23px]'}
            mt={'26px'}
            mb={'13px'}
            variant={'H1'}
            textAlign={'center'}
          >
            Sign Up
          </Text>
          <Flex mb={'24px'} justify={'center'} gap={'60'}>
            <Button
              className={'w-full max-w-[36px] p-0 m-0 '}
              asComponent={Link}
              href={'https://google.com'}
              type="button"
              variant={'link'}
            >
              <GoogleIcon />
            </Button>
            <Button
              className={`w-full max-w-[36px] p-0 m-0`}
              asComponent={Link}
              href={'https://github.com'}
              type="button"
              variant={'link'}
            >
              <GithubIcon />
            </Button>
          </Flex>
        </div>
        <Flex
          direction={'column'}
          gap={'24'}
          mb={'24px'}
          max={'330px'}
          justify={'center'}
          items={'center'}
        >
          <Input className={`w-full max-w-[330px]`} label={'Username'} type={'text'} />
          <Input className={`w-full max-w-[330px]`} label={'Email'} type={'email'} />
          <Input className={`w-full max-w-[330px]`} label={'Password'} type={'password'} />
          <Input
            className={`w-full max-w-[330px]`}
            label={'Password confirmation'}
            type={'password'}
          />
          <div className={'w-full max-w-[330px] mx-auto'}>
            <Flex justify={'spaceEvenly'} items={'center'} gap={'1'}>
              <Checkbox className={'mr-2 inline-block'} />
              <Text variant={'small-text-12'}>I agree to the</Text>
              <Text asComponent={Link} href={'auth/term-of-service'} variant={'small-link_12'}>
                Terms of Service
              </Text>
              <Text variant={'small-text-12'}>and</Text>
              <Text asComponent={Link} href={'auth/privacy-policy'} variant={'small-link_12'}>
                Privacy Policy
              </Text>
            </Flex>
          </div>
        </Flex>

        <Flex direction={'column'} gap={'12'}>
          <Button className={'w-full max-w-[330px]'}>Sign Up</Button>
          <Text className={`text-Primary-300`} variant={'regular_text_16'}>
            Do you have an account?
          </Text>
          <Button asComponent={Link} href={'auth/sign-in'} variant={'link'}>
            Sign In
          </Button>
        </Flex>
      </div>
    </PageWrapper>
  )
}

SignUp.getLayout = getLayout
export default SignUp
