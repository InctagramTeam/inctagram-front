import { ComponentPropsWithoutRef } from "react";

import { Button, ReturnComponent } from "@/shared";
import { clsx } from "clsx";

type ErrorPageProps = {
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export const Error = ({ className }: ErrorPageProps): ReturnComponent => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div
      className={clsx(
        `flex h-[100dvh] w-full flex-col items-center justify-center`,
        className,
      )}
    >
      <p>An unexpected error occurred</p>
      <Button onClick={reloadPage} variant={"destructive"}>
        Try refreshing the page
      </Button>
    </div>
  );
};
