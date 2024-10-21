import { Ref, SVGProps, forwardRef, memo } from "react";

const CheckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    {...props}
    fill={"none"}
    height={"14"}
    viewBox={"0 0 14 14"}
    width={"14"}
    xmlns={"http://www.w3.org/2000/svg"}
  >
    <path
      d={
        "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
      }
      fill={"currentColor"}
    />
  </svg>
);
const ForwardRef = forwardRef(CheckIcon);
const Memo = memo(ForwardRef);

export default Memo;
