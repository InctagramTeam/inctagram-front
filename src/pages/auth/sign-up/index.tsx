import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'
import { Text } from '@/components/ui/text'
import GoogleIcon from 'src/assets/icons/GoogleRepoIcon'
import GithubIcon from '@/assets/icons/GithubRepoIcon'
import { Flex } from '@/components/ui/flex/flex'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {}

const SignUp = ({}: Props) => {
  return (
    <PageWrapper title={'SignUp | Instagram'}>
      <div
        className={`Card w-[380px] min-h-[648px] bg-Dark-500 rounded
        border border-Dark-300 shadow-shadow-Dark-30`}
      >
        <div className={`wrapper-text-icons w-full flex flex-col items-center justify-center`}>
          <Text variant={'H1'} align={'center'} className={'mt-[23px]'} mt={'26px'} mb={'13px'}>
            Sign Up
          </Text>
          <Flex mb={'24px'} justify={'center'} gap={'60'}>
            <Button variant={'link'} className={'w-full max-w-[36px] p-0 m-0 '}>
              <GoogleIcon />
            </Button>
            <Button variant={'link'} className={'w-full max-w-[36px] p-0 m-0 '}>
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
          <Input label={'Username'} type={'text'} className={`text-regular-text-14 mb-6 w-full`} />
          <Input label={'Email'} type={'email'} />
          <Input label={'Password'} type={'password'} />
          <Input label={'Password confirmation'} type={'password'} />
          <div className={'w-full max-w-[330px] mx-auto'}>
            <Flex justify={'spaceEvenly'} items={'center'} gap={'1'}>
              <Checkbox className={'mr-2 inline-block '} />
              <Text variant={'small-text-12'}>I agree to the</Text>
              <Text
                as={Link}
                href={'auth/term-of-service'}
                variant={'small-link_12'}
                className={`text-Primary-300 cursor pointer`}
              >
                Terms of Service
              </Text>
              <Text variant={'small-text-12'}>and</Text>
              <Text
                as={Link}
                href={'auth/privacy-policy'}
                variant={'small-link_12'}
                className={`text-Primary-300 cursor pointer`}
              >
                Privacy Policy
              </Text>
            </Flex>
          </div>
        </Flex>

        <Flex direction={'column'} gap={'12'}>
          <Button className={'w-full max-w-[330px]'}>Sign Up</Button>
          <Text variant={'regular_text_16'} className={`text-Primary-300`}>
            Do you have an account?
          </Text>
          <Button variant={'link'} className={'text-Primary-300 '}>
            Sign In
          </Button>
        </Flex>
      </div>
    </PageWrapper>
  )
}

SignUp.getLayout = getLayout
export default SignUp
