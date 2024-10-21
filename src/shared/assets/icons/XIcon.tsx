import { Ref, SVGProps, forwardRef, memo } from "react";

const XIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    className={"lucide lucide-x"}
    fill={"none"}
    height={"24"}
    ref={ref}
    stroke={"currentColor"}
    strokeLinecap={"round"}
    strokeLinejoin={"round"}
    strokeWidth={"2"}
    viewBox={"0 0 24 24"}
    width={"24"}
    xmlns={"http://www.w3.org/2000/svg"}
  >
    <path d={"M18 6 6 18"} />
    <path d={"m6 6 12 12"} />
  </svg>
);
const ForwardRef = forwardRef(XIcon);
const Memo = memo(ForwardRef);

export default Memo;
