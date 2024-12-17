import { Ref, SVGProps, forwardRef, memo } from 'react'

const Plus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} height={30} ref={ref} width={30} xmlns={'http://www.w3.org/2000/svg'}>
    <path
      d={'M15 0a15 15 0 1 0 0 30 15 15 0 0 0 0-30Zm0 27a12 12 0 1 1 0-24 12 12 0 0 1 0 24Z'}
      fill={'currentColor'}
    />
    <path
      d={
        'M19.5 13.5h-3v-3a1.5 1.5 0 1 0-3 0v3h-3a1.5 1.5 0 1 0 0 3h3v3a1.5 1.5 0 1 0 3 0v-3h3a1.5 1.5 0 1 0 0-3Z'
      }
      fill={'currentColor'}
    />
  </svg>
)

const ForwardRef = forwardRef(Plus)

const Memo = memo(ForwardRef)

export default Memo
