import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'

const containerVariants = cva('flex w-full my-4', {
  variants: {
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    justify: 'center',
  },
})

export interface ButtonContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: ReactNode
}

export default function ButtonContainer({
  className,
  justify,
  children,
  ...props
}: ButtonContainerProps) {
  return (
    <div className={containerVariants({ justify, className })} {...props}>
      {children}
    </div>
  )
}
