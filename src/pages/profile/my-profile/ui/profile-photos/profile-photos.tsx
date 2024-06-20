import Image from 'next/image'
import { EMPTY_STRING } from '@/shared'

export const ProfilePhotos = () => {
  return (
    <>
      <li className="photo-item max-w-[234px] overflow-hidden">
        <Image
          className={`contain-content`}
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          height={228}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className="photo-item max-w-[234px] overflow-hidden">
        <Image
          className={`contain-content`}
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          height={228}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className="photo-item max-w-[234px] overflow-hidden">
        <Image
          className={`bg-cover`}
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          height={228}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className="photo-item max-w-[234px] overflow-hidden">
        <Image
          className={`bg-cover`}
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          height={228}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className="photo-item max-w-[234px] overflow-hidden">
        <Image
          className={`bg-cover`}
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          height={72}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className="photo-item max-w-[234px] overflow-hidden">
        <Image
          className={`bg-cover`}
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          height={72}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className="photo-item max-w-[234px] overflow-hidden">
        <Image
          className={`bg-cover`}
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          height={72}
          src={`/man.png`}
          width={234}
        />
      </li>
      <li className="photo-item -z-1 max-w-[234px] overflow-hidden">
        <Image
          className={`bg-cover`}
          alt={`photo` ?? EMPTY_STRING}
          aria-hidden
          height={72}
          src={`/man.png`}
          width={234}
        />
      </li>
    </>
  )
}
