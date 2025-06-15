import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, HTMLAttributes } from 'react'

const typographyVariants = cva(
  'text-orange-400 text-shadow-md text-shadow-neutral-800',
  {
    variants: {
      size: {
        // can use -mt-X for spacing adjustment in the variants
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        bold: 'font-bold',
      },
      textCase: {
        normal: 'normal-case',
        capitalize: 'capitalize',
        lower: 'lowercase',
        upper: 'uppercase',
      },
    },
    defaultVariants: {
      size: 'md',
      align: 'center',
      weight: 'normal',
      textCase: 'normal',
    },
  },
)

export interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: ElementType
}

export default function Typography({
  className,
  size,
  align,
  weight,
  textCase,
  as: Component = 'p',
  ...props
}: TypographyProps) {
  return (
    <Component
      {...props}
      className={typographyVariants({
        size,
        align,
        weight,
        textCase,
        className,
      })}
    />
  )
}
