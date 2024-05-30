import { useTranslation } from '@/shared/lib/hooks/use-translation'
import { useLangSwitcher } from '@/feature/use-lang-switcher/use-lang-switcher'
import { Select, SelectContent, SelectTrigger } from '@/shared/ui/select/select'
import { EMPTY_STRING } from '@/shared/constants/base'
import { LanguageSelectionList } from '@/widgets/header/ui/language-selection-list'
import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import ChevronDownIcon from '@/shared/assets/icons/ChevronDownIcon'
import { cn } from '@/shared/lib/utils'
import { useResponsive } from '@/shared/lib/hooks'
import { MD_BREAKPOINT } from '@/shared/constants'

export const LangSelectSwitcher = ({ ...rest }) => {
  const { changeLocale, defaultLocale, locale } = useLangSwitcher()
  const { t } = useTranslation()

  const LANGUAGES = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_10348_20024" transform="scale(0.0138889)" />
            </pattern>
            <image
              id="image0_10348_20024"
              width="72"
              height="72"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC91BMVEUAAACjpKQPK2mBKSR0GRICIF6oqKgWN3WTk5N5GRCOLSZmHRi/v8CAKiR4JB3KyspnFhFmGhR1JyNnGBLLy8vFxcVnHBfKysq7u7vOzs7Nzc3Dw8PMzMzLy8tmGxV2JyHNzc3ExMRnGhRpHxlrHxpsIBvIyMh4JyFsHBa9vb1zJSBrHhhrGBPAwMBvIx6+vr5uIhzCwsK9vb29vb3MzMzLy8t0JyK/v79zJiHBwcFfEw5mGxVoHhhoHRdrIBq5ubloHhlnHRitra3Nzc21tbVSXHqzs7NNYYgRM3MaNnK+vr5fFQ8mV7P4+PgYSKbYSj/U1NQENI/19fUBMI38/Pz6+vokVLEhUq8cTKoURKIQQZ4NPpvm5ubW1tbj4+Pc3Nza2toFNZEKO5gHOJUBMIrY2NjR0tISQJbXST7w8PDs7Ozg4OAgUK3q6uoKOpWxJBnu7u7e3t7+/v4dT6vKPDHy8vLo6OjVSD7VRjvQQje1KB6zJhvOQDXENCrCMie/MSa9LiO6LiO4LCGuJRuCHxjPz88GNpPNPTLGNiucMSmjIRkALIHSRTrJOS69MyiIHBPGxsbDw8MAJmsgVrakpKQWO4C6KyC3KR/fSjzXRzy+OS/GOS61NizJyckdUbDTQziyKR+3t7faSj/RSD6VMCl/lcHLRTyKLSYfQpbEQjjKQTbYQjSxOzKoLCKoJBo7ZrgUSqodPo+wNzi8PzemNy+jLyiPKCC8KBuZIhm4JRd3HBVuFxHy9frKy846VKQzSZASNIovM3WsS1mFLUCtMzHSPS+qLy2xLybd5PDD0emluNt7mNGyucppicZWesBqhrwxW7Bcc60MPZ1OU5gjOYfITEuiKR+QHxfl6/XQ2eq7yeOcstxOdcC0tbZhfLVqgbFVb61EYaYSOZBuUoVwTHtNPHaOUHBhQG58RmsHJmuQRF5NKlmlPEaWKTGMpNOLosybpcCNm7wcQ5t/hZZWT45bT4oTO4ETOH6XTWhgMFdkKU25RkpnHyscYpVQAAAATHRSTlMABgcFB62ko62tow/+/v0L9Mad4W5iVSP+9Lunl0gm5N+Cei4iGhPz6uDUt6yRiHZsQyvz78zHxrKwnp1gR0E7Owzo2retpKOjo58ySfbLYwAABUZJREFUWMNiGAWjYBQMWsDIyMjPz8hIgQn8auL2sqKKMtLSlpbSXrqKoobiaoykmiEuKyIjZepsIjl379y5cydMmMjDwyNhrGmuKyvOSJIZCpJpAbGpCQnxQJCQGhuQ1toKNA8IeDT1YSYx2hvxYw8MhBmp8dkxuVlAkFsWExNXGA80CmRWWkDAXgk3uEFsTi76hkZqjEgmqBkZisLNiAOakVkaBASlmQVZZTFx2VCDQJIBEmxwgzim3AV5V1pXUV9UVFRERFFaylTBRLI1LRbAPp3rJBBFYQBOTIyND+ALGS10wgRnhvV6Z1iMbPFKwhsMjQ2YWEJiQUJH7CG07FuFG4udjUssbD3nzoVBhILeP9BQfPz/gaHQ44IbxxiQLIjR0By6XYR2cW4Wk8nkchXTdPgpI4ggYQcqReI+Qhg/UzjsoOw3lDXDGAcELnoaJb5UPMKr2IiiKFDp/CKewiNR3IZft9TIhA+RYFFCfKBwZj5JEcFK4kgUr7QGCoWEY9URfZR5Tk4Usc2GTqP+pWl8k4DAme+yCBGohNvw2hYU+gOFOcQ4lLLuwyGO2EEIj4QQSKsgUShKrGGikA1dwgveeG9rHMN/OGXrIEL4pdGxC12KKOXh/UPjvd0d9Sf98bjw0TKZj+6thJYLzZTysN5otp9KvaTkHhiBtO50BoPBl+q00HpehDIAwfOIy+yfDB00avXHZqd0pOW1fCzpkiS3x2sEdBkop6wnitWDGbS1/7Xrp+CIZRGAgIFfa8FQjyCqFluCEmdn34dbM2j79a7/2apQItrAk1mDY7zBFDWPBmYtdLNjQ9dXsLc4nYy6BUy3U+qpSZfLlRTIBhB8Jut6OhAwjMHA43ZLoMQ0Td0ckmVgEobX60FG+od+2qe3lzTjOI7jgd5skpiBlwamFBXR1YgOoy7HxmQMdr+rnouBFwl5PjwKavNwIejUsAcV0w6SlYcKSvN0O8jZH7Ba0eFmbGOni31/v+eZPFsG824Xvq+88cX38zw8HehvyOsNh+c3n35MpNOFQgGkZy/bhcDwPnl7cPz59OLy+nqrXK1mbkql71fF+tzcl3+EvMg4OH7/4ehdlAisrVUqLrvBaMrldiGqWjovPmJ9tK+ft4LCYa/3BW3I30CRgGpZbVO69AaTz6fRKhRav8ngjgk5DMQd+XlVLOAPjYE2ofn5VwefTr/SRiQSkcsjcgJDIQT5MaQxu5cc95vQPU8qdVP6dlas19PpRCJxeHh2fnF59CMeYIzf0RfZm5DiFrSo2M3lcmStXN6CgspKZQ1SBQKEnBWxoFrW2Vx2vREgcFpBFq3GT/pMRoPebne5lDadTq1eViGpTUhBQyYDSCGAbAy0QBBsyKnWKdFLM2PIcvdFzEkM5ATpNhRCEKnBENUCojSkz4wgPbMNQ/gigg6WYUjvNpF+SquwWCwU2RIiATLibRhSO5GEBVQ0Go2vJoPBpVptYyO1iEpZWkCwjQVhyQkSY8Tj8eT29vr6TsaRzWatKI/Hc5Jv1KqxPyF4SBrSbEaQPhSiISQhI5lEhCMWW+nu5vMHB3uhQYFAsL+/Z81mV1iQNZ+CvWhbE1KuopLojB0wgBjoezAuHB0TPewXi6XS/plpkWSip1fA57M+kX3rSR4GUxTc5Ha7g3RL62VEgNE3ND46NSPlceEv7Dg8sUg41IQ4kl4BHAmL843GBpTJZBxoCH2GUCLql3G77kwmbf7kiqcmegSA7e1ZcXxooG9oWDg2LeZxutqJI3sskkyODPeghifxo5Dx2iLYGneWh5rldHXq1Ok/7Rfvm1X3ZVjwTgAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      ),
      textValue: t.lang.en,
      value: 'en',
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_10348_20025" transform="scale(0.0138889)" />
            </pattern>
            <image
              id="image0_10348_20025"
              width="72"
              height="72"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      textValue: t.lang.ru,
      value: 'ru',
    },
  ]

  const [value] = useState(LANGUAGES[0].value)

  const { width } = useResponsive()
  const isDesktop = width && width > MD_BREAKPOINT
  const isMobile = !isDesktop

  const classes = {
    content: cn(
      'bg-Dark-500 border border-Light-100',
      !isMobile && 'w-[164px] border-t-0 rounded-b-[2px]',
      isMobile && 'min-w-0 rounded-[2px]'
    ),
    flag: 'w-[20px] h-[20px] object-contain',
    icon: 'basis-[24px] shrink-0 h-[24px] icon transition-rotate duration-300',
    trigger: cn(
      `[&_.icon]:data-[state=open]:rotate-180 focus:border-Dark-100
    focus-visible:text-Light-900 focus-visible:ring-2 focus-visible:ring-offset-Primary-500 focus-visible:border-transparent`,
      !isMobile &&
        `w-[164px] gap-[12px] rounded-[2px] transition-colors duration-300 px-[12px] data-[state=open]:border-Light-100 data-[state=open]:bg-Dark-500
    hover:text-Light-900 hover:border-Light-900 justify-between`,
      isMobile && `gap-[2px] border-none justify-normal min-w-max ring-0 p-0 `
    ),
    triggerInner: cn(
      !isMobile && `flex items-center gap-[12px]`,
      isMobile && `basis-[20px] shrink-0 h-[20px]`
    ),
  }

  const selectedItem = LANGUAGES.find(item => item.value === value)
  const currentValue = selectedItem?.value ?? EMPTY_STRING
  const currentTextValue = selectedItem?.textValue ?? EMPTY_STRING

  return (
    <Select onValueChange={changeLocale} value={locale || defaultLocale} {...rest}>
      <SelectTrigger className={classes.trigger}>
        <div className={classes.triggerInner}>
          <Image
            alt={selectedItem?.textValue ?? ''}
            aria-hidden
            className={classes.flag}
            height={24}
            src={`/flags/${currentValue}.png`}
            width={24}
          />
          {!isMobile && currentTextValue}
        </div>
        <ChevronDownIcon aria-hidden className={classes.icon} />
      </SelectTrigger>
      <SelectContent className={classes.content}>
        <LanguageSelectionList isMobile={isMobile} items={LANGUAGES} />
      </SelectContent>
    </Select>
  )
}
