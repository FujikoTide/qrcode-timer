import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'

const flexVariants = cva('flex', {
  variants: {
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
    },
    direction: {
      row: 'flex-row',
      col: 'flex-col',
    },
  },
  defaultVariants: {
    direction: 'col',
    align: 'center',
  },
})

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  children: ReactNode
}

export default function Flex({
  className,
  justify,
  align,
  gap,
  direction,
  children,
  ...props
}: FlexProps) {
  return (
    <div
      className={flexVariants({ justify, align, gap, direction, className })}
      {...props}
    >
      {children}
    </div>
  )
}
