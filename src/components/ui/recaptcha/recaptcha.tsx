import React from 'react'
import { Recaptchalogo1 } from '@/assets/icons'

const Box = () => {
  return <div className={'w-[20px] h-[20px] border rounded-sm border-[#B7B7B7] bg-[#FFFFFF]'}></div>
}
const Privacy = () => {
  return (
    <div className={'flex justify-center items-center w-[42px] h-[7px] text-[6px] font-medium'}>
      Privacy-Terms
    </div>
  )
}

const Recaptcha = () => {
  return (
    <div
      className={
        'flex justify-around items-center w-[300px] h-[79px] border rounded-sm border-[#333333] bg-[#171717]'
      }
    >
      <div className={'flex justify-between items-center w-[111px] h-[20px]'}>
        <Box />
        {/*<div className={'w-[20px] h-[20px] border rounded-sm border-[#B7B7B7] bg-[#FFFFFF]'}></div>*/}
        <div className={'text-xs font-medium text-[#FFFFFF]'}>I’m not a robot</div>
      </div>
      <div className={'flex flex-col items-center w-[44px] h-[64px]'}>
        <Recaptchalogo1 className={'w-[44px] h-[48px]'} />
        <Privacy />
      </div>
    </div>
  )
}

export default Recaptcha
