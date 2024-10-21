import { Button, ReturnComponent, cn, useResponsive } from "@/shared";
import { ArrowIcon } from "@/shared/assets/icons";
import { useRouter } from "next/router";

type Props = {
  className?: string;
  text: string;
};
export const ReturnBack = ({ className, text }: Props): ReturnComponent => {
  const { sm } = useResponsive();
  const router = useRouter();

  const classes = {
    button: cn("p-0 h-auto", className),
    icon: "w-[24px] h-[24px]",
  };

  return (
    <Button
      aria-label={sm ? text : undefined}
      className={classes.button}
      onClick={() => router.back()}
      variant={"text"}
    >
      <ArrowIcon aria-hidden className={"classes.icon"} />
      {!sm && text}
    </Button>
  );
};
