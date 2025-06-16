import Flex, { type FlexProps } from '@/components/primitives/Flex'

export type ButtonGroupProps = FlexProps

export default function ButtonGroup({
  children,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <Flex {...props} className={`flex-wrap ${className || ''}`}>
      {children}
    </Flex>
  )
}
