import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'

const contentColumnVariants = cva('w-full mx-auto', {
  variants: {
    maxWidth: {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
    },
  },
  defaultVariants: {
    maxWidth: 'xs',
  },
})

export interface ContentColumnProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentColumnVariants> {
  children: ReactNode
}

export default function ContentColumn({
  className,
  maxWidth,
  children,
  ...props
}: ContentColumnProps) {
  return (
    <div className={contentColumnVariants({ maxWidth, className })} {...props}>
      {children}
    </div>
  )
}
