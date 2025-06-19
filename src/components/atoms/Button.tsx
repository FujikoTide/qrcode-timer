import { cva, type VariantProps } from 'class-variance-authority'
import type { Intent, Size, Width } from '@/styles/types'
import type { ElementType, ReactNode } from 'react'

const buttonVariants = cva(
  'rounded-2xl font-bold text-white text-shadow-md text-shadow-neutral-800 hover:brightness-110 cursor-pointer',
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
      textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      shadow: {
        none: '',
        enabled: 'shadow-md shadow-neutral-800',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      width: 'fit',
      textAlign: 'center',
      shadow: 'enabled',
    },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

type PolymorphicProps<E extends ElementType> = {
  as?: E
  children: ReactNode
} & React.ComponentPropsWithoutRef<E> &
  ButtonVariantProps

const defaultElement = 'button'

export default function Button<E extends ElementType = typeof defaultElement>({
  as,
  children,
  intent,
  size,
  width,
  textAlign,
  shadow,
  className,
  ...props
}: PolymorphicProps<E>) {
  const Component = as || defaultElement

  return (
    <Component
      className={buttonVariants({
        intent,
        size,
        width,
        textAlign,
        shadow,
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  )
}
