import { useRouter } from 'next/router'
import { en, ru } from 'locales'

export const useTranslation = () => {
  const router = useRouter()

  return { locale: router.locale, t: router.locale === 'ru' ? ru : en }
}
