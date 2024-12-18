export const ButtonKey = ['1', '4:5', '16:9', 'base'] as const

export type ButtonVariant = {
  aspect: number
  key: (typeof ButtonKey)[number]
  text: string
}
