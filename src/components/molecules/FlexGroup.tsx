import Flex, { type FlexProps } from '../primitives/Flex'

export type FlexGroupProps = FlexProps

export default function FlexGroup({
  children,
  className,
  ...props
}: FlexGroupProps) {
  return (
    <Flex {...props} className={`flex-wrap ${className || ''}`}>
      {children}
    </Flex>
  )
}
