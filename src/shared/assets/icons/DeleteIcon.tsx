import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <circle cx={12} cy={12} fill={'#CC1439'} r={10} stroke={'#0D0D0D'} strokeWidth={4} />
    <g clipPath={'url(#a)'}>
      <path
        d={
          'm12.94 12 2.867-2.86a.67.67 0 1 0-.947-.947L12 11.06 9.14 8.193a.67.67 0 0 0-.947.947L11.06 12l-2.867 2.86a.667.667 0 0 0 .217 1.092.668.668 0 0 0 .73-.146L12 12.94l2.86 2.867a.668.668 0 1 0 .947-.947L12.94 12Z'
        }
        fill={'#fff'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M4 4h16v16H4z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const DeleteAvatarIcon = memo(ForwardRef)
