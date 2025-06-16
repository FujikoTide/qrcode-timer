import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType, ReactNode } from 'react'

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

export type TypographyVariantProps = VariantProps<typeof typographyVariants>

type PolyMorphicProps<E extends ElementType> = {
  as?: E
  children: ReactNode
} & React.ComponentPropsWithoutRef<E> &
  TypographyVariantProps

const defaultElement = 'p'

export default function Typography<
  E extends ElementType = typeof defaultElement,
>({
  as,
  children,
  size,
  align,
  weight,
  textCase,
  className,
  ...props
}: PolyMorphicProps<E>) {
  const Component = as || defaultElement

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
    >
      {children}
    </Component>
  )
}
