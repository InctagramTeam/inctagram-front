import { Ref, SVGProps, forwardRef, memo } from 'react'

const Rectangle = (
  props: { color?: string } & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const { color = 'black', ...rest } = props // Дефолтный цвет — черный

  return (
    <svg
      fill={'none'}
      height={26}
      ref={ref}
      width={21}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <rect height={24} rx={2} stroke={color} strokeWidth={2} width={16} x={1} y={1} />
    </svg>
  )
}

const ForwardRef = forwardRef(Rectangle)

const Memo = memo(ForwardRef)

export default Memo
