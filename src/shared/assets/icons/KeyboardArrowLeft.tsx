import { Ref, SVGProps, forwardRef, memo } from 'react'

const KeyboardArrowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox={'0 0 16 16'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    ref={ref}
    {...props}
  >
    <path
      d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.4417 3.31909 9.61722 3.37353 9.75336 3.48669C9.88951 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(KeyboardArrowLeft)
const Memo = memo(ForwardRef)

export default Memo
