import type { ReactNode } from 'react'
import Typography from '@/components/atoms/Typography'

interface TitleProps {
  children: ReactNode
}

export default function Title({ children }: TitleProps) {
  return (
    <Typography
      as="h1"
      size="3xl"
      weight="bold"
      align="center"
      textCase="capitalize"
      className="pb-5"
    >
      {children}
    </Typography>
  )
}
