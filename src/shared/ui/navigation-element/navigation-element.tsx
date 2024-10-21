import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  forwardRef,
} from "react";

import { EMPTY_STRING } from "@/shared/constants";
import { cn, getIcon } from "@/shared/lib/utils";
import {
  PolymorphComponentPropsWithRef,
  ReturnComponent,
} from "@/shared/types";
import { Button, CustomButtonProps } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";

type CustomProps = {
  isButton?: boolean;
  name: string;
  onClick?: () => void;
  onlyIcon?: boolean;
} & CustomButtonProps;

type Props<T extends ElementType> = PolymorphComponentPropsWithRef<
  T,
  CustomProps
>;

type NavigationElementComponent = <T extends ElementType = "button">(
  props: Props<T>,
) => ReactNode;

/**
 * Компонент NavigationElement используется, чтобы выводить какой-то навигационный элемент (ссылку / кнопку) с иконкой
 * Например, кнопку logout с иконкой
 * В NavigationElement используется кастомный компонент Button, который является полиморфным и принимает props asComponent → и этот компонент тоже полиморфный
 */
export const NavigationElement: NavigationElementComponent = forwardRef(
  <T extends ElementType = "button">(
    props: Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & Props<T>,
    ref: ElementRef<T>,
  ): ReturnComponent => {
    const {
      asComponent,
      isButton = false,
      className,
      disabled,
      name,
      onClick,
      onlyIcon,
      startIcon,
      ...rest
    } = props;

    const pathname = usePathname();
    const isActive = props.href && pathname?.startsWith(props.href);
    const isBtnComponent = isButton ? "button" : Link;
    const classes = {
      content:
        "rounded-1/2 flex h-8 w-full max-w-[100px] items-center gap-4 bg-Dark-500 !text-Light-100",
      icon: "h-[24px] basis-[24px]",
      link: cn(
        `relative h-auto flex !items-start gap-[12px] py-[0]
      !text-medium-text-14 text-Light-100 !whitespace-normal !text-left 
      transition ease-in-out hover:text-Primary-100
      before:absolute before:right-[-20%] before:content-[''] before:h-2 before:w-2 before:bg-Primary-900 before:rounded
      before:opacity-0 before:transition-opacity before:duration-300`,
        disabled && "!cursor-default !text-Dark-100",
        isActive && `text-Primary-500 before:opacity-1`,
        className,
      ),
    };
    const handleClick = () => {
      onClick?.();
    };

    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button
              aria-label={onlyIcon ? name : EMPTY_STRING}
              asComponent={isBtnComponent}
              className={classes.link}
              disabled={disabled}
              href={""}
              onClick={handleClick}
              ref={ref}
              startIcon={
                (props.href || startIcon) && (
                  <span aria-hidden className={classes.icon}>
                    {props.href
                      ? getIcon(props.href, isActive as boolean)
                      : startIcon}
                  </span>
                )
              }
              variant={"text"}
              {...rest}
            >
              {onlyIcon ? (
                <TooltipContent className={classes.content} side={"right"}>
                  {name}
                </TooltipContent>
              ) : (
                name
              )}
            </Button>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    );
  },
);
