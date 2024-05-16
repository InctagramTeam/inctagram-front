import GithubIcon from '@/assets/icons/GithubIcon'
import GoogleIcon from '@/assets/icons/GoogleIcon'
import { getLayout } from '@/components/Layout/Layout'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { PageWrapper } from 'src/components/ui/page-wrapper'
import { Text } from 'src/components/ui/text/text'
import { ReturnComponent } from '@/common/types'
import { Flex } from '@/components/ui/flex'

type Props = {}

const SignUp = ({}: Props): ReturnComponent => {
  return (
    <PageWrapper title={'SignUp | Instagram'}>
      {/* todo: Card component instead of div (_Card_) */}
      <div
        className={`_Card_ w-[380px] min-h-[648px] bg-Dark-500 rounded
        border border-Dark-300 shadow-shadow-Dark-30`}
      >
        <div className={`_Wrapper-text-icons_ w-full flex flex-col items-center justify-center`}>
          <Text
            asComponent={'h1'}
            className={'mt-[23px]'}
            mb={'13px'}
            mt={'26px'}
            textAlign={'center'}
            variant={'H1'}
          >
            Sign Up
          </Text>
          <Flex gap={'60'} justify={'center'} mb={'24px'}>
            <Button
              asComponent={Link}
              className={'w-full max-w-[36px] p-0 m-0 '}
              href={'https://google.com'}
              type={'button'}
              variant={'link'}
            >
              <GoogleIcon />
            </Button>
            <Button
              asComponent={Link}
              className={`w-full max-w-[36px] p-0 m-0`}
              href={'https://github.com'}
              type={'button'}
              variant={'link'}
            >
              <GithubIcon />
            </Button>
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
          <div className={'w-full max-w-[330px] mx-auto'}>
            <Flex gap={'1'} items={'center'} justify={'spaceEvenly'}>
              <Checkbox checked className={'mr-2 inline-block'} />
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
