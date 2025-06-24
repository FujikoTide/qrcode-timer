import { useState, useRef, useEffect, type ReactNode } from 'react'

interface collapsibleProps {
  isOpen: boolean
  children: ReactNode
}

export default function Collapsible({ isOpen, children }: collapsibleProps) {
  const [height, setHeight] = useState<number | undefined>(
    isOpen ? undefined : 0,
  )
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div
      ref={ref}
      style={{ height }}
      className="w-full overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div className="flex justify-center pb-1">{children}</div>
    </div>
  )
}
