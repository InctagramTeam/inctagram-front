const ButtonKey = ['1', '4:5', '16:9', 'base'] as const

export type ButtonKeyValue = (typeof ButtonKey)[number]

export type ButtonVariant = {
  aspect: number
  key: ButtonKeyValue
  text: string
}
