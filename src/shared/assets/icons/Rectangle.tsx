import { SVGProps, forwardRef, memo } from 'react'

type IconProps = {
  color?: string
} & SVGProps<SVGSVGElement>
const Rectangle = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { color, ...rest } = props

    return (
      <svg
        fill={'none'}
        height={26}
        ref={ref}
        width={21}
        xmlns={'http://www.w3.org/2000/svg'}
        {...props}
      >
        <rect height={24} rx={2} stroke={color} strokeWidth={2} width={16} x={1} y={1} />
      </svg>
    )
  })
)
const ForwardRef = forwardRef(Rectangle)
const Memo = memo(ForwardRef)

export default Memo
