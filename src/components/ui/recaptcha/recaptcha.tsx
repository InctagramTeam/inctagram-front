import React from 'react'
import { Recaptchalogo1 } from '@/assets/icons'

const Recaptcha = () => {
  return (
    <div
      className={
        'relative flex justify-between pl-5 pr-5 items-center w-[300px] h-[79px] border rounded-sm border-[#333333] bg-[#171717]'
      }
    >
      <Expired />
      <Error />
      <div className={'flex justify-between items-center w-[111px] h-[20px]'}>
        <BoxDefault />
        {/*<BoxChecked />*/}
        {/*<BoxLoading />*/}
        <div className={'text-xs font-medium text-[#FFFFFF]'}>I’m not a robot</div>
      </div>
      <div className={'flex flex-col items-center w-[44px] h-[64px]'}>
        <Recaptchalogo1 className={'w-[44px] h-[48px]'} />
        <Privacy />
      </div>
    </div>
  )
}
const BoxDefault = () => {
  return (
    <div className={'w-[20px] h-[20px] border rounded-[1px] border-[#B7B7B7] bg-[#FFFFFF]'}></div>
  )
}
const BoxChecked = () => {
  return (
    <div className={'flex justify-center items-center w-[24px] h-[18px]'}>
      <svg
        width="25"
        height="19"
        viewBox="0 0 25 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0355 0.749512C22.8113 1.49441 23.5691 2.25975 24.3387 3.01177V3.01272C19.0046 8.34204 13.671 13.6728 8.3341 19.0002C5.56224 16.2222 2.78041 13.436 0.0147363 10.6642L0 10.6656V10.6509C0.0656004 10.6651 0.0646496 10.5411 0.126922 10.5221C0.841871 9.80664 1.55159 9.08551 2.26701 8.37009C4.29112 10.3904 6.31237 12.414 8.33457 14.4362C12.9033 9.87557 17.4716 5.31492 22.0355 0.749512Z"
          fill="#19983B"
          fillOpacity="0.901702"
        />
      </svg>
    </div>
  )
}
const BoxLoading = () => {
  return (
    <div className={'flex justify-center items-center w-[13px] h-[13px]'}>
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 2C6.69126 2.20312 15.159 5.0875 15.5 15"
          stroke="#4D8DF4"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
const Privacy = () => {
  return (
    <div
      className={
        'flex justify-center items-center w-[42px] h-[7px] text-[6px] font-medium leading-[7px]'
      }
    >
      Privacy-Terms
    </div>
  )
}
const Expired = () => {
  return (
    <div
      className={
        'absolute left-4 top-0.5 w-[175px] h-[24px] text-[10px] text-[#FF0000] leading-[12px]'
      }
    >
      Verification expired. Check the checkbox again.
    </div>
  )
}
const Error = () => {
  return (
    <div className={'absolute -left-2 -top-2 w-[314px] h-[124px] border border-[#FF0000] '}>
      <div
        className={
          'absolute left-2 top-11 w-[183px] h-[12px] text-[10px] text-[#FF0000] leading-[12]'
        }
      >
        Please verify that you are not a robot
      </div>
    </div>
  )
}

export default Recaptcha
