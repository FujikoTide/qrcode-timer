import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'

const messageVariants = cva(
  'text-orange-400 text-shadow-md text-shadow-neutral-800',
  {
    variants: {
      size: {
        sm: 'pt-3 text-xl',
        md: 'pt-5 text-2xl',
        lg: 'pt-5 text-3xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface MessageProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof messageVariants> {}

export default function Message({ className, size, ...props }: MessageProps) {
  return <div className={messageVariants({ size, className })} {...props} />
}
