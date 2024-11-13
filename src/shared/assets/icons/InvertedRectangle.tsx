import { SVGProps, forwardRef } from 'react'

type IconProps = {
  color?: string
} & SVGProps<SVGSVGElement>
const InvertedRectangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, ...rest } = props

  return (
    <svg
      fill={'none'}
      height={20}
      ref={ref}
      width={27}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <rect
        height={24}
        rx={2}
        stroke={color}
        strokeWidth={2}
        transform={'rotate(90 25 1)'}
        width={18}
        x={25}
        y={1}
      />
    </svg>
  )
})

export default InvertedRectangle
