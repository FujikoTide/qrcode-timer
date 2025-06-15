import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, HTMLAttributes } from 'react'

const textVariants = cva(
  'pt-5 text-orange-400 text-shadow-md text-shadow-neutral-800',
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
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface TextProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: ElementType
}

export default function Text({
  className,
  size,
  as: Component = 'p',
  ...props
}: TextProps) {
  return <Component className={textVariants({ size, className })} {...props} />
}
