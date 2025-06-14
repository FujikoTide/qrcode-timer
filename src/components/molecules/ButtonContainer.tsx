import Flex, { type FlexProps } from '../primitives/Flex'

export type ButtonContainerProps = FlexProps

export default function ButtonContainer({
  className,
  children,
  ...props
}: ButtonContainerProps) {
  return (
    <Flex {...props} className={`my-4 w-full ${className || ''}`}>
      {children}
    </Flex>
  )
}
