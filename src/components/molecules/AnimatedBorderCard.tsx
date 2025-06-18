import type { ReactNode } from 'react'

interface AnimatedBorderCardProps {
  children: ReactNode
}

export default function AnimatedBorderCard({
  children,
}: AnimatedBorderCardProps) {
  return (
    <div className="group hover:bg-dashed-border hover:animate-marching-ants rounded-lg bg-transparent p-1 transition-all">
      <div className="rounded-md bg-gray-700 p-4">{children}</div>
    </div>
  )
}
