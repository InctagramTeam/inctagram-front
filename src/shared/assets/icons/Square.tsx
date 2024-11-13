import { Ref, SVGProps, forwardRef, memo } from 'react'

type IconProps = {
  color?: string
} & SVGProps<SVGSVGElement>

const Square = (props: IconProps, ref: Ref<SVGSVGElement>) => {
  const { color, ...rest } = props

  return (
    <svg
      fill={'none'}
      height={24}
      ref={ref}
      width={21}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <rect height={16} rx={2} stroke={color} strokeWidth={2} width={16} x={1} y={1} />
    </svg>
  )
}

const ForwardRef = forwardRef(Square)

const Memo = memo(ForwardRef)

export default Memo
