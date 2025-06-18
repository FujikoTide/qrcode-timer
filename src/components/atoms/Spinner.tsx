import { cva, type VariantProps } from 'class-variance-authority'
import { type SVGProps } from 'react'

const spinnerStyles = cva('animate-spin', {
  variants: {
    size: {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
    },
    color: {
      primary: 'text-green-600',
      secondary: 'text-blue-600',
      danger: 'text-red-600',
      warning: 'text-orange-600',
      ghost: 'text-gray-400',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'ghost',
  },
})

export interface SpinnerProps
  extends Omit<SVGProps<SVGSVGElement>, 'color'>,
    VariantProps<typeof spinnerStyles> {}

export default function Spinner({ size, color, ...props }: SpinnerProps) {
  return (
    <svg
      className={`${spinnerStyles({ size, color })}`}
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M8,1V2.8A5.2,5.2,0,1,1,2.8,8H1A7,7,0,1,0,8,1Z" />
      </g>
    </svg>
  )
}
