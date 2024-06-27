'use client'

import { memo } from 'react'

import { EMPTY_STRING } from '@/shared'
import Image from 'next/image'

export const ProfilePhotos = () => {
  return (
    <ul className={`profile-bottom-gallery_ grid max-w-[972px] gap-1 grid-cols-ideal-[234px]`}>
      <li className={'photo-item max-w-[234px] overflow-hidden'}>
        <Image
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          className={`contain-content`}
          height={228}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className={'photo-item max-w-[234px] overflow-hidden'}>
        <Image
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          className={`contain-content`}
          height={228}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className={'photo-item max-w-[234px] overflow-hidden'}>
        <Image
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          className={`bg-cover`}
          height={228}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className={'photo-item max-w-[234px] overflow-hidden'}>
        <Image
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          className={`bg-cover`}
          height={228}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className={'photo-item max-w-[234px] overflow-hidden'}>
        <Image
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          className={`bg-cover`}
          height={72}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className={'photo-item max-w-[234px] overflow-hidden'}>
        <Image
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          className={`bg-cover`}
          height={72}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className={'photo-item max-w-[234px] overflow-hidden'}>
        <Image
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          className={`bg-cover`}
          height={72}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className={'photo-item -z-1 max-w-[234px] overflow-hidden'}>
        <Image
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          className={`bg-cover`}
          height={72}
          src={`/man.png`}
          width={234}
        />
      </li>
    </ul>
  )
}
