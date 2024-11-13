import { SVGProps, forwardRef } from 'react'

type IconProps = {
  color?: string
}

const Magnifier = forwardRef<SVGSVGElement, IconProps & SVGProps<SVGSVGElement>>(
  ({ color, ...props }, ref) => {
    return (
      <svg
        {...props}
        fill={'none'}
        height={36}
        ref={ref}
        width={36}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <rect fill={'#171717'} height={36} opacity={0.8} rx={2} width={36} />
        <g clipPath={'url(#a)'} fill={color}>
          <path
            d={
              'm26.71 25.29-3.4-3.39a7.92 7.92 0 0 0 .34-9.34A8 8 0 1 0 21.9 23.3l3.39 3.4a1 1 0 1 0 1.42-1.42ZM11 17a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z'
            }
          />
          <path
            d={
              'M19 16h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z'
            }
          />
        </g>
        <defs>
          <clipPath id={'a'}>
            <path d={'M6 6h24v24H6z'} fill={color} />
          </clipPath>
        </defs>
      </svg>
    )
  }
)

export default Magnifier
