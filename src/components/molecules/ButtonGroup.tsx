import Flex, { type FlexProps } from '@/components/primitives/Flex'
import Grid, { type GridProps } from '@/components/primitives/Grid'
import type { ReactNode } from 'react'

interface ButtonGroupBaseProps {
  children: ReactNode
  className?: string
}

interface FlexLayoutProps extends Omit<FlexProps, 'children' | 'className'> {
  layout?: 'flex'
}

interface GridLayoutProps extends Omit<GridProps, 'children' | 'className'> {
  layout: 'grid'
}

export type ButtonGroupProps = ButtonGroupBaseProps &
  (FlexLayoutProps | GridLayoutProps)

export default function ButtonGroup(props: ButtonGroupProps) {
  const { children, className } = props

  if (props.layout === 'grid') {
    return (
      <Grid {...props} className={className}>
        {children}
      </Grid>
    )
  }

  return (
    <Flex {...props} className={`flex-wrap ${className || ''}`}>
      {children}
    </Flex>
  )
}
