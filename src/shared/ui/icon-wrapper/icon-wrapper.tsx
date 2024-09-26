import React, { FunctionComponent, memo, SVGProps } from 'react'

import { clsx } from 'clsx'

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
  Svg: FunctionComponent<React.SVGAttributes<SVGElement>>
  className?: string
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

type IsClickableIconProps = ClickableBaseProps | NonClickableIconProps

/** Обёртка над svg иконкой.
 * Применение (_импортируем как svg, а не как компонент_):
 * <IconWrapper onClick{onToggle} className={`text-gold-600`} Svg={ArrowIcon} isClickable />
 * */
export const IconWrapper = memo((props: IsClickableIconProps) => {
  const { Svg, className, height = 32, isClickable, width = 32, ...rest } = props

  const icon = (
    <Svg
      {...rest}
      className={clsx(`_Icon_ fill-primary text-Primary-500`, className)}
      height={height}
      onClick={undefined}
      width={width}
    />
  )

  if (isClickable) {
    return (
      <button
        className={`m-0 cursor-pointer border-none bg-none p-0 outline-none ring-0`}
        onClick={props.onClick}
        style={{ height, width }}
        type={'button'}
      >
        {icon}
      </button>
    )
  }

  return icon
})
