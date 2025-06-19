import { cva, type VariantProps } from 'class-variance-authority'
import type { InputHTMLAttributes } from 'react'

const formDatePickerVariants = cva(
  'outline-0 appearance-none border-2 border-orange-400 rounded-md px-4 py-1 font-xl bg-gray-700 cursor-pointer',
  {
    variants: {
      textColor: {
        primary: 'text-green-400',
        secondary: 'text-blue-400',
        danger: 'text-red-400',
        warning: 'text-orange-400',
        ghost: 'text-gray-400',
      },
    },
    defaultVariants: {
      textColor: 'warning',
    },
  },
)

export interface FormDatePickerProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof formDatePickerVariants> {}

export default function FormDatePicker({
  className,
  textColor,
  onChange,
  ...props
}: FormDatePickerProps) {
  return (
    <input
      type="date"
      onChange={onChange}
      className={formDatePickerVariants({ className, textColor })}
      {...props}
    />
  )
}
