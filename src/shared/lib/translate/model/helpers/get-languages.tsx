import { LocaleType } from 'locales'

export type Language = {
  textValue: string
  value: string
}

export const getLanguages = (t: LocaleType): Language[] => {
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
