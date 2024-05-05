import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const CheckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={18}
    viewBox={'0 0 18 18'}
    width={18}
    {...props}
    ref={ref}
    fill-current
  >
    <path
      d={
        'M16 0H2a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2zM7 14L2 9l1.41-1.41L7 11.17l7.59-7.59L16 5l-9 9z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(CheckIcon)
const Memo = memo(ForwardRef)
export default Memo
