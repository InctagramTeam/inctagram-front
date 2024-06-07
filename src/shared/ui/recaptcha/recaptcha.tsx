import ReCAPTCHA from 'react-google-recaptcha'

import { ReturnComponent } from '@/shared/types'

type RecaptchaProps = {
  // Positions reCAPTCHA badge. Only for invisible reCAPTCHA
  badge?: 'bottomleft' | 'bottomright' | 'inline'

  onChange: (value: null | string) => void
  onErrored?: () => void
  onExpired?: () => void

  size?: 'compact' | 'invisible' | 'normal'
  theme: 'dark' | 'light'
}

// always gets No CAPTCHA and all verification requests pass
const TEST_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

export const Recaptcha = (props: RecaptchaProps): ReturnComponent => {
  return <ReCAPTCHA sitekey={TEST_KEY} {...props} />
}
