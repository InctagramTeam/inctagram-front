import { Ref, SVGProps, forwardRef, memo } from 'react'

const ImageOutlineIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={36}
    ref={ref}
    width={36}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M30 0H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6ZM6 4h24a2 2 0 0 1 2 2v16.72l-6.4-5.46a5.54 5.54 0 0 0-7.04 0L4 29.4V6a2 2 0 0 1 2-2Zm24 28H7.12l14-11.68a1.56 1.56 0 0 1 1.86 0L32 28v2a2 2 0 0 1-2 2Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(ImageOutlineIcon)
const Memo = memo(ForwardRef)

export default Memo
