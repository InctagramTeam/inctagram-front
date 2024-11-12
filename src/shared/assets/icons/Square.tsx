import { SVGProps, forwardRef, memo } from 'react'

type IconProps = {
  color?: string
} & SVGProps<SVGSVGElement>
export const Square = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { color, ...rest } = props

    return (
      <svg fill={'none'} height={24} ref={ref} width={21} xmlns={'http://www.w3.org/2000/svg'}>
        <rect height={16} rx={2} stroke={color} strokeWidth={2} width={16} x={1} y={1} />
      </svg>
    )
  })
)
const ForwardRef = forwardRef(Square)
const Memo = memo(ForwardRef)

export default Memo
