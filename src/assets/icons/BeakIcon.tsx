import { forwardRef, memo, Ref, SVGProps } from 'react'

const BeakIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="20"
    height="10"
    viewBox="0 0 20 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path d="M0 10H20L10 0L0 10Z" fill="#4C4C4C" />
    <path d="M2 9.5L18 9.5L10 1.5L2 9.5Z" fill="#171717" />
  </svg>
)

const ForwardRef = forwardRef(BeakIcon)

const Memo = memo(ForwardRef)

export default Memo
