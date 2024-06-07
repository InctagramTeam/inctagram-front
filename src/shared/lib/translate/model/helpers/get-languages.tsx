import { useTranslation } from '@/shared/lib/hooks/use-translation'

export type Language = {
  textValue: string
  value: string
}

export const getLanguages = (): Language[] => {
  const { t } = useTranslation()

  return [
    {
      textValue: t.lang.en,
      value: 'en',
    },
    {
      textValue: t.lang.ru,
      value: 'ru',
    },
  ]
}
