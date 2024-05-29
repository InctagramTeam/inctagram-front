import { Ref, SVGProps, forwardRef, memo } from 'react'

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    ref={ref}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
)
const ForwardRef = forwardRef(ChevronUpIcon)
const Memo = memo(ForwardRef)

export default Memo
