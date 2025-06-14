import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'

const printToPageVariants = cva(
  'pt-5 text-4xl text-orange-400 text-shadow-md text-shadow-neutral-800',
  {
    variants: {
      size: {
        sm: 'pt-5 text-4xl',
        md: 'pt-5 text-4xl',
        lg: 'pt-5 text-4xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface PrintToPageProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof printToPageVariants> {}

export default function PrintToPage({
  className,
  size,
  ...props
}: PrintToPageProps) {
  return <div className={printToPageVariants({ size, className })} {...props} />
}
