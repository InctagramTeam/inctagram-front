import { SVGProps } from 'react'

export function PaperPlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={'24px'}
      viewBox={'0 0 24 24'}
      width={'24px'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={'m22 2l-7 20l-4-9l-9-4zm0 0L11 13'}
        fill={'none'}
        stroke={'currentColor'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'2'}
      ></path>
    </svg>
  )
}
