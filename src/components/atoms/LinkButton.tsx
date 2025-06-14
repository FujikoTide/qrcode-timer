import { Link } from 'react-router-dom'
import { buttonVariants, type ButtonVariantProps } from './atoms/Button'

interface LinkButtonProps extends ButtonVariantProps {
  label: string
  to: string
}

export default function Button({
  label,
  to,
  intent,
  size,
  width,
}: LinkButtonProps) {
  return (
    <Link to={to} className={buttonVariants({ intent, size, width })}>
      {label}
    </Link>
  )
}
