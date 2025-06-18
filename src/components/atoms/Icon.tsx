// don't like how this works also, need to redo

import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, HTMLAttributes } from 'react'

const iconWrapperVariants = cva(
  'flex items-center justify-center aspect-square',
  {
    variants: {
      background: {
        primary: 'bg-sky-500',
        secondary: 'bg-slate-400',
        warning: 'bg-orange-400',
        danger: 'bg-red-400',
        ghost: 'bg-gray-200',
      },
      shape: {
        square: 'rounded-none',
        rounded: 'rounded-md',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      background: 'ghost',
      shape: 'circle',
    },
  },
)

const iconSvgVariants = cva('', {
  variants: {
    fillColor: {
      primary: 'fill-sky-500',
      secondary: 'fill-slate-400',
      warning: 'fill-orange-400',
      danger: 'fill-red-400',
      ghost: 'fill-gray-200',
      none: 'fill-none',
    },
    strokeColor: {
      primary: 'stroke-sky-500',
      secondary: 'stroke-slate-400',
      warning: 'stroke-orange-400',
      danger: 'stroke-red-400',
      ghost: 'stroke-gray-200',
      none: 'stroke-none',
    },
    relativeSize: {
      default: 'h-3/5 w-3/5',
      sm: 'h-1/2 w-1/2',
      lg: 'h-4/5 w-4/5',
    },
  },
  defaultVariants: {
    fillColor: 'none',
    strokeColor: 'secondary',
    relativeSize: 'default',
  },
})

export type IconSvgVariantProps = VariantProps<typeof iconSvgVariants>

export interface IconProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconWrapperVariants>,
    IconSvgVariantProps {
  as: ElementType
}

export default function Icon({
  as: IconComponent,
  className,
  background,
  shape,
  fillColor,
  strokeColor,
  relativeSize,
  ...props
}: IconProps) {
  return (
    <div
      className={iconWrapperVariants({ background, shape, className })}
      {...props}
    >
      <IconComponent
        className={iconSvgVariants({ fillColor, strokeColor, relativeSize })}
      />
    </div>
  )
}
