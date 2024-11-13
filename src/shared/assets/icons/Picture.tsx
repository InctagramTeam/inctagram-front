import { forwardRef, memo } from 'react'

type IconProps = {
  color?: string
}

const Picture = forwardRef<SVGSVGElement, IconProps>(({ color, ...props }, ref) => {
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
            'M24 9H12a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3Zm-12 2h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L11 23.7V12a1 1 0 0 1 1-1Zm12 14H12.56l7-5.84a.78.78 0 0 1 .93 0L25 23v1a1 1 0 0 1-1 1Z'
          }
        />
        <path d={'M14 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'} />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path d={'M6 6h24v24H6z'} fill={color} />
        </clipPath>
      </defs>
    </svg>
  )
})

const Memo = memo(Picture)

export default Memo
