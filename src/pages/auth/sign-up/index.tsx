import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'
import { Text } from '@/components/ui/text'
import GoogleRepoIcon from 'src/assets/icons/GoogleRepoIcon'
import GithubRepoIcon from '@/assets/icons/GithubRepoIcon'
import { Flex } from '@/components/ui/flex/flex'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const SignUp = () => {
  return (
    <PageWrapper title={'SignUp | Instagram'}>
      <div
        className={`Card w-full max-w-[378px] min-h-[648px] bg-Dark-500 rounded
        border border-Dark-300 shadow-shadow-Dark-30`}
      >
        <div className={`wrapper-text-icons flex flex-col items-center justify-center`}>
          <Text align={'center'} className={'mt-[23px]'} mt={'26px'} mb={'13px'}>
            Sign Up
          </Text>
          <Flex gap={'60'} mb={'24px'}>
            <GoogleRepoIcon />
            <GithubRepoIcon />
          </Flex>
          <Flex direction={'column'} gap={'24'}>
            <Input label={'Username'} type={'text'} className={`text-regular-text-14 mb-6`} />
            <Input label={'Email'} type={'email'} />
            <Input label={'Password'} type={'password'} />
            <Input label={'Password confirmation'} type={'password'} />
          </Flex>
          <Checkbox />
          <Text variant={'small-text-12'}>I agree to the</Text>
          <Text variant={'small-link_12'} className={`text-Primary-300`}>
            Terms of Service
          </Text>
          <span>and</span>
          <Text variant={'small-link_12'} className={`text-Primary-300 mb-[22px]`}>
            Privacy Policy
          </Text>
          <Button>Sign Up</Button>
          <Text variant={'small-link_12'} className={`text-Primary-300 mb-[18px]`}>
            Privacy Policy
          </Text>
        </div>
      </div>
    </PageWrapper>
  )
}

SignUp.getLayout = getLayout
export default SignUp
