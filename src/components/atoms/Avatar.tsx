import { cva, type VariantProps } from 'class-variance-authority'
import {
  useState,
  useEffect,
  type ImgHTMLAttributes,
  type ReactNode,
} from 'react'

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
      xl: 'h-20 w-20',
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
  src?: string
  alt: string
  fallback?: ReactNode
}

export default function Avatar({
  className,
  border,
  size,
  src,
  alt,
  fallback,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)
  }, [src])

  const classes = avatarVariants({ border, size, className })

  return hasError || !src ? (
    <div className={`${classes} flex items-center justify-center bg-slate-700`}>
      {fallback}
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={classes}
      onError={() => setHasError(true)}
      {...props}
    />
  )
}
