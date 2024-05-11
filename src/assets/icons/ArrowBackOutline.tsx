import { forwardRef, memo, Ref, SVGProps } from 'react'

const SvgArrowBackOutline = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref: Ref<SVGSVGElement>) => (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#arrow-back-outline_svg__a)">
        <path
          fill="currentColor"
          d="M19 11H7.14l3.63-4.36a1.001 1.001 0 0 0-1.54-1.28l-5 6a1 1 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13q.039.078.09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .77-1.64L7.14 13H19a1 1 0 0 0 0-2"
        />
      </g>
      <defs>
        <clipPath id="arrow-back-outline_svg__a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
)

const MemoSvgArrowBackOutline = memo(SvgArrowBackOutline)

export default MemoSvgArrowBackOutline
