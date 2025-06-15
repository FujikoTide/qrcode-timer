import { cva, type VariantProps } from 'class-variance-authority'
import type { ImgHTMLAttributes } from 'react'

const avatarVariants = cva('object-cover', {
  variants: {
    border: {
      square: 'rounded-none',
      rounded: 'rounded-2xl',
      circle: 'rounded-full',
    },
    size: {
      sm: 'h-8 w-8',
      md: 'h-12 w-12',
      lg: 'h-16 w-16',
    },
  },
  defaultVariants: {
    border: 'circle',
    size: 'md',
  },
})

export interface AvatarProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof avatarVariants> {
  src: string
  alt: string
}

export default function Avatar({
  className,
  border,
  size,
  src,
  alt,
  ...props
}: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={avatarVariants({ border, size, className })}
      {...props}
    />
  )
}
