'use client'

import { EMPTY_STRING } from '@/shared'
import Image from 'next/image'
import { memo } from 'react'

export const ProfilePhotos = memo(() => {
  return (
    // className={`profile-bottom-gallery_ grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] grid-rows-[repeat(auto-fit,minmax(228px,1fr))] gap-x-2`}
    <ul
      className={`profile-bottom-gallery_ grid grid-cols-[repeat(4,228px)] grid-rows-[repeat(2,234px)] gap-x-2`}
    >
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
})
