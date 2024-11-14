import { Ref, SVGProps, forwardRef, memo } from 'react'

type IconProps = {
  color?: string
} & SVGProps<SVGSVGElement>

const InvertedRectangle = (props: IconProps, ref: Ref<SVGSVGElement>) => {
  const { color, ...rest } = props

  return (
    <svg
      fill={'none'}
      height={20}
      ref={ref}
      width={27}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <rect
        height={24}
        rx={2}
        stroke={color} // `stroke` будет пустым, если `color` не передан
        strokeWidth={2}
        transform={'rotate(90 25 1)'}
        width={18}
        x={25}
        y={1}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(InvertedRectangle)
const Memo = memo(ForwardRef)

export default Memo
