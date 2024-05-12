import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const ArrowIosBackIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#arrow-ios-back_svg__a)">
      <path
        fill="currentColor"
        d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"
      />
    </g>
    <defs>
      <clipPath id="arrow-ios-back_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(ArrowIosBackIcon)
const Memo = memo(ForwardRef)
export default Memo
