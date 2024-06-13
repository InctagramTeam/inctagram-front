import ReCAPTCHA from 'react-google-recaptcha'

import { ReturnComponent } from '@/shared/types'
import { RECAPTCHA_PUBLIK_KEY } from '@/shared/constants'
import { forwardRef } from 'react'
import { Text } from '@/shared/ui/text'
import { Flex } from '@/shared/ui/flex'
import { clsx } from 'clsx'

type RecaptchaProps = {
  badge?: 'bottomleft' | 'bottomright' | 'inline'
  onChange: (value: string | null) => void
  onErrored?: () => void
  onExpired?: () => void
  size?: 'compact' | 'invisible' | 'normal'
  theme?: 'dark' | 'light'
  errorMessage?: string
  wrapperClassName?: string
}

export const Recaptcha = forwardRef<ReCAPTCHA, RecaptchaProps>(
  ({ theme = 'dark', wrapperClassName, errorMessage, ...rest }, ref): ReturnComponent => {
    const classes = {
      wrapper: clsx(
        'w-max pt-[8px] px-[7px] pb-[12px] duration-300 transition-border border-[1px] border-transparent',
        errorMessage && '!border-Danger-500',
        wrapperClassName
      ),
      errorMessage: 'text-[10px] !text-Danger-500',
    }

    return (
      <Flex className={classes.wrapper} direction={'column'} gap={'12'} items={'start'}>
        <ReCAPTCHA
          className={'g-recaptcha'}
          ref={ref}
          sitekey={RECAPTCHA_PUBLIK_KEY}
          theme={theme}
          {...rest}
        />
        {errorMessage && <Text className={classes.errorMessage}>{errorMessage}</Text>}
      </Flex>
    )
  }
)
