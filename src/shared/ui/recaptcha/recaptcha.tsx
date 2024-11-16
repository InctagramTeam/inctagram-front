import { forwardRef } from 'react'
import { default as ReCAPTCHA } from 'react-google-recaptcha'

import { Flex, ReturnComponent, Text } from '@/shared'
import { clsx } from 'clsx'

type Props = {
  badge?: 'bottomleft' | 'bottomright' | 'inline'
  errorMessage?: string
  onChange: (value: null | string) => void
  onErrored?: () => void
  onExpired?: () => void
  size?: 'compact' | 'invisible' | 'normal'
  theme?: 'dark' | 'light'
  wrapperClassName?: string
}

export const Recaptcha = forwardRef<ReCAPTCHA, Props>(
  ({ errorMessage, theme = 'dark', wrapperClassName, ...rest }, ref): ReturnComponent => {
    const classes = {
      errorMessage: 'text-[10px] !text-Danger-500',
      wrapper: clsx(
        'w-max pt-[8px] px-[7px] pb-[12px] duration-300 transition-border border-[1px] border-transparent',
        errorMessage && '!border-Danger-500',
        wrapperClassName
      ),
    }

    return (
      <Flex className={classes.wrapper} direction={'column'} gap={'12'} items={'start'}>
        <ReCAPTCHA
          className={'g-recaptcha'}
          ref={ref}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!}
          theme={theme}
          {...rest}
        />
        {errorMessage && <Text className={classes.errorMessage}>{errorMessage}</Text>}
      </Flex>
    )
  }
)
