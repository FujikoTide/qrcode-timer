import type { ReactNode } from 'react'
import Typography from '@/components/atoms/Typography'

interface TitleProps {
  children: ReactNode
}

// how to pass class names down to here?
export default function Title({ children }: TitleProps) {
  return (
    <Typography
      as="h1"
      textSize="3xl"
      textWeight="bold"
      align="center"
      textCase="capitalize"
      className="pb-5"
    >
      {children}
    </Typography>
  )
}
