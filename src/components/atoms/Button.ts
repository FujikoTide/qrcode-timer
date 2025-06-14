import { cva, type VariantProps } from 'class-variance-authority'
import type { Intent, Size, Width } from '../../styles/types'

export const buttonVariants = cva(
  'rounded-2xl font-bold text-white shadow-md shadow-neutral-800 text-shadow-md text-shadow-neutral-800',
  {
    variants: {
      intent: {
        primary: 'bg-green-600',
        secondary: 'bg-blue-600',
        danger: 'bg-red-600',
        warning: 'bg-orange-600',
        ghost: 'bg-gray-400',
      } satisfies Record<Intent, string>,
      size: {
        sm: 'p-4 text-lg',
        md: 'p-5 text-xl',
        lg: 'p-5 text-2xl',
      } satisfies Record<Size, string>,
      width: {
        fit: 'w-fit',
        halfWidth: 'w-1/2',
        fullWidth: 'w-full',
      } satisfies Record<Width, string>,
    },

    defaultVariants: {
      intent: 'primary',
      size: 'md',
      width: 'fit',
    },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
