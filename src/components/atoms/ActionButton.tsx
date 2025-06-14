import { buttonVariants, type ButtonVariantProps } from './atoms/Button'
import type { MouseEventHandler } from 'react'

export interface ActionButtonProps extends ButtonVariantProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  label: string
}

export default function Button({
  onClick,
  label,
  intent,
  size,
  width,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonVariants({ intent, size, width })}
    >
      {label}
    </button>
  )
}
