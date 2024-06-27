import React, { FunctionComponent, memo, ReactNode, SVGProps } from 'react'
import { clsx } from 'clsx'

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
  className?: string
  Svg: FunctionComponent<React.SVGAttributes<SVGElement>>
}

/** Для некликабельных иконок */
interface NonClickableIconProps extends IconBaseProps {
  isClickable?: false
}

/** Для кликабельных иконок */
interface ClickableBaseProps extends IconBaseProps {
  isClickable: true
  onClick: () => void
}

type IsClickableIconProps = NonClickableIconProps | ClickableBaseProps

/** Обёртка над svg иконкой.
 * Применение (_импортируем как svg, а не как компонент_):
 * <IconWrapper onClick{onToggle} className={`text-gold-600`} Svg={ArrowIcon} isClickable />
 * */
export const IconWrapper = memo((props: IsClickableIconProps) => {
  const { className, Svg, width = 32, height = 32, isClickable, ...rest } = props

  const icon = (
    <Svg
      {...rest}
      className={clsx(`_Icon_ fill-primary text-Primary-500`, className)}
      width={width}
      height={height}
      onClick={undefined}
    />
  )

  if (isClickable) {
    return (
      <button
        type="button"
        className={`m-0 cursor-pointer border-none bg-none p-0 outline-none ring-0`}
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    )
  }

  return icon
})
