// text input component
import { cva, type VariantProps } from 'class-variance-authority'
import type { InputHTMLAttributes } from 'react'

const formTextInputVariants = cva(
  'my-4 w-full p-5 outline-0 text-shadow-md text-shadow-neutral-800',
  {
    variants: {
      rounded: {
        none: 'rounded-none',
        rounded: 'rounded-2xl',
        circular: 'rounded-full',
      },
      border: {
        none: 'border-0',
        sm: 'border-1',
        md: 'border-2',
        lg: 'border-4',
      },
      borderColor: {
        primary: 'border-green-400',
        secondary: 'border-blue-400',
        danger: 'border-red-400',
        warning: 'border-orange-400',
        ghost: 'border-gray-400',
      },
      textSize: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      textWeight: {
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
      textColor: {
        primary: 'text-green-400',
        secondary: 'text-blue-400',
        danger: 'text-red-400',
        warning: 'text-orange-400',
        ghost: 'text-gray-400',
      },
      placeholderColor: {
        primary: 'placeholder:text-green-400/70',
        secondary: 'placeholder:text-blue-400/70',
        danger: 'placeholder:text-red-400/70',
        warning: 'placeholder:text-orange-400/70',
        ghost: 'placeholder:text-gray-400/70',
      },
      backgroundColor: {
        default: 'bg-gray-700',
        primary: 'bg-green-700',
        secondary: 'bg-blue-700',
        danger: 'bg-red-700',
        warning: 'bg-orange-700',
        ghost: 'bg-gray-800',
      },
      shadow: {
        none: '',
        enabled: 'shadow-md shadow-neutral-800',
      },
    },
    defaultVariants: {
      rounded: 'rounded',
      border: 'sm',
      borderColor: 'warning',
      textSize: 'lg',
      textCase: 'capitalize',
      textWeight: 'normal',
      textColor: 'warning',
      placeholderColor: 'warning',
      backgroundColor: 'default',
      shadow: 'enabled',
    },
  },
)

export interface FormTextInputVariantProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof formTextInputVariants> {}

export default function FormTextInput({
  className,
  rounded,
  border,
  borderColor,
  textSize,
  textCase,
  textWeight,
  textColor,
  placeholderColor,
  backgroundColor,
  shadow,
  onChange,
  ...props
}: FormTextInputVariantProps) {
  return (
    <input
      type="text"
      onChange={onChange}
      className={formTextInputVariants({
        className,
        rounded,
        border,
        borderColor,
        textSize,
        textCase,
        textWeight,
        textColor,
        placeholderColor,
        backgroundColor,
        shadow,
      })}
      {...props}
    />
  )
}
