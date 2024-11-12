import { forwardRef, memo } from 'react'

type IconProps = {
  color?: string
}

const ClosingCross = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => {
    return (
      <svg fill={'none'} height={12} ref={ref} width={12} xmlns={'http://www.w3.org/2000/svg'}>
        <rect fill={'#171717'} height={12} opacity={0.8} rx={2} width={12} />
        <path
          d={
            'm6.705 6 2.15-2.145a.502.502 0 1 0-.71-.71L6 5.295l-2.145-2.15a.502.502 0 0 0-.71.71L5.295 6l-2.15 2.145a.5.5 0 0 0 .163.82.5.5 0 0 0 .547-.11L6 6.705l2.145 2.15a.5.5 0 0 0 .82-.163.5.5 0 0 0-.11-.547L6.705 6Z'
          }
          fill={'#fff'}
        />
      </svg>
    )
  })
)
const ForwardRef = forwardRef(ClosingCross)
const Memo = memo(ForwardRef)

export default Memo
