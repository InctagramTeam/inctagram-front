import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <circle cx={12} cy={12} r={10} fill="#CC1439" stroke="#0D0D0D" strokeWidth={4} />
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="m12.94 12 2.867-2.86a.67.67 0 1 0-.947-.947L12 11.06 9.14 8.193a.67.67 0 0 0-.947.947L11.06 12l-2.867 2.86a.667.667 0 0 0 .217 1.092.668.668 0 0 0 .73-.146L12 12.94l2.86 2.867a.668.668 0 1 0 .947-.947L12.94 12Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M4 4h16v16H4z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const DeleteAvatarIcon = memo(ForwardRef)
