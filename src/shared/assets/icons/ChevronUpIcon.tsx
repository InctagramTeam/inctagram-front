import { Ref, SVGProps, forwardRef, memo } from 'react'

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d={'m18 15-6-6-6 6'} />
  </svg>
)
const ForwardRef = forwardRef(ChevronUpIcon)
const Memo = memo(ForwardRef)

export default Memo
