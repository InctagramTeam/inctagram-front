import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'
import { Text } from '@/components/ui/text'
import GoogleIcon from 'src/assets/icons/GoogleRepoIcon'
import GithubIcon from '@/assets/icons/GithubRepoIcon'
import { Flex } from '@/components/ui/flex/flex'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

type Props = {}

const SignUp = ({}: Props) => {
  return (
    <PageWrapper title={'SignUp | Instagram'}>
      <div
        className={`Card w-[380px] min-h-[648px] bg-Dark-500 rounded
        border border-Dark-300 shadow-shadow-Dark-30`}
      >
        <div className={`wrapper-text-icons w-full flex flex-col items-center justify-center`}>
          <Text className={'mt-[23px]'} mt={'26px'} mb={'13px'} variant={'H1'} align={'center'}>
            Sign Up
          </Text>
          <Flex mb={'24px'} justify={'center'} gap={'60'}>
            <Button className={'w-full max-w-[36px] p-0 m-0 '} variant={'link'}>
              <GoogleIcon />
            </Button>
            <Button className={'w-full max-w-[36px] p-0 m-0 '} variant={'link'}>
              <GithubIcon />
            </Button>
          </Flex>
        </div>

        <Flex
          direction={'column'}
          gap={'24'}
          mb={'24px'}
          maxWidth_X={'330px'}
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
              <Checkbox className={'mr-2 inline-block '} />
              <Text variant={'small-text-12'}>I agree to the</Text>
              <Text
                className={`text-Primary-300 cursor pointer`}
                as={Link}
                href={'auth/term-of-service'}
                variant={'small-link_12'}
              >
                Terms of Service
              </Text>
              <Text variant={'small-text-12'}>and</Text>
              <Text
                className={`text-Primary-300 cursor pointer`}
                as={Link}
                href={'auth/privacy-policy'}
                variant={'small-link_12'}
              >
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
          <Button className={'text-Primary-300 '} variant={'link'}>
            Sign In
          </Button>
        </Flex>
      </div>
    </PageWrapper>
  )
}

SignUp.getLayout = getLayout
export default SignUp
