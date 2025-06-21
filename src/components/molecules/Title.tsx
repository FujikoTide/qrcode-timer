import type { ReactNode } from 'react'
import Typography, {
  type TypographyVariantProps,
} from '@/components/atoms/Typography'

interface TitleProps extends TypographyVariantProps {
  children: ReactNode
  className?: string
}

export default function Title({ children, className, ...props }: TitleProps) {
  return (
    <Typography
      as="h1"
      textSize="3xl"
      textWeight="bold"
      align="center"
      textCase="capitalize"
      className={`pb-5 ${className || ''}`}
      {...props}
    >
      {children}
    </Typography>
  )
}
