import { Ref, SVGProps, forwardRef, memo } from 'react'

const ChevronIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'none'}
    height={'24'}
    ref={ref}
    stroke={'currentColor'}
    strokeLinecap={'round'}
    strokeLinejoin={'round'}
    strokeWidth={'2'}
    viewBox={'0 0 24 24'}
    width={'24'}
  >
    <path d={'m6 9 6 6 6-6'} />
  </svg>
)
const ForwardRef = forwardRef(ChevronIcon)
const Memo = memo(ForwardRef)

export default Memo
