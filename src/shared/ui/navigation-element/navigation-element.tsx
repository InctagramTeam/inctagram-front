import { ComponentPropsWithoutRef, ElementRef, ElementType, forwardRef, ReactNode } from 'react'
import { cn, getIcon } from '@/shared/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip/tooltip'
import { usePathname } from 'next/navigation'
import { PolymorphComponentPropsWithRef, ReturnComponent } from '@/shared/types'
import { Button, CustomButtonProps } from '@/shared/ui/button'

type CustomProps = {
  onlyIcon?: boolean
  name: string
} & CustomButtonProps

type Props<T extends ElementType> = PolymorphComponentPropsWithRef<T, CustomProps>

type NavigationElementComponent = <T extends ElementType = 'button'>(props: Props<T>) => ReactNode
export const NavigationElement: NavigationElementComponent = forwardRef(
  <T extends ElementType = 'button'>(
    props: Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & Props<T>,
    ref: ElementRef<T>
  ): ReturnComponent => {
    const { onlyIcon, asComponent, name, startIcon, disabled, className, ...rest } = props

    const pathname = usePathname()
    const isActive = props.href && pathname!.startsWith(props.href)

    const classes = {
      content:
        'rounded-1/2 flex h-8 w-full max-w-[100px] items-center gap-4 bg-Dark-500 !text-Light-100',
      icon: 'h-[24px] basis-[24px]',
      link: cn(
        `relative h-auto flex !items-start gap-[12px] py-[0]
      !text-medium-text-14 text-Light-100 !whitespace-normal !text-left 
      transition ease-in-out hover:text-Primary-100
      before:absolute before:right-[-20%] before:content-[''] before:h-2 before:w-2 before:bg-Primary-900 before:rounded
      before:opacity-0 before:transition-opacity before:duration-300`,
        disabled && '!cursor-default !text-Dark-100',
        isActive && `text-Primary-500 before:opacity-1`,
        className
      ),
    }

    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            {/*@ts-expect-error TS2322*/}
            <Button
              aria-label={onlyIcon ? name : ''}
              asComponent={asComponent || 'button'}
              className={classes.link}
              disabled={disabled}
              ref={ref}
              startIcon={
                (props.href || startIcon) && (
                  <span aria-hidden className={classes.icon}>
                    {props.href ? getIcon(props.href, isActive) : startIcon}
                  </span>
                )
              }
              variant={'text'}
              {...rest}
            >
              {onlyIcon ? (
                <TooltipContent className={classes.content} side={'right'}>
                  {name}
                </TooltipContent>
              ) : (
                name
              )}
            </Button>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    )
  }
)
