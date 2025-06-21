import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'

const gridVariants = cva('grid', {
  variants: {
    cols: {
      '1': 'grid-cols-1',
      '2': 'grid-cols-2',
      '3': 'grid-cols-3',
      '4': 'grid-cols-4',
      '5': 'grid-cols-5',
    },
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
  },
  defaultVariants: {
    cols: '1',
    gap: 'md',
  },
})

export interface GridProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  children: ReactNode
}

export default function Grid({
  className,
  cols,
  gap,
  children,
  ...props
}: GridProps) {
  return (
    <div className={gridVariants({ cols, gap, className })} {...props}>
      {children}
    </div>
  )
}
