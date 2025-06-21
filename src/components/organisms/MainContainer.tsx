import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'

const mainContainerProps = cva(
  'mx-auto my-0 rounded-none md:rounded-2xl md:my-5 lg:my-10 h-fit bg-gray-700 px-10 py-3 md:py-5 md:shadow-[-10px_0_15px_-4px_rgba(0,0,0,0.2),_10px_0_15px_-4px_rgba(0,0,0,0.2)]',
  {
    variants: {
      width: {
        single: 'max-w-2xl',
        double: 'max-w-7xl',
      },
    },
    defaultVariants: {
      width: 'single',
    },
  },
)

export interface MainContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mainContainerProps> {
  children: ReactNode
}

export default function MainContainer({
  children,
  className,
  width,
  ...props
}: MainContainerProps) {
  return (
    <main className={mainContainerProps({ width, className })} {...props}>
      {children}
    </main>
  )
}
