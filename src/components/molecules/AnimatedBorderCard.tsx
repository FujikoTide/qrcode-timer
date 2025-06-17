// src/components/molecules/AnimatedBorderCard.tsx

import type { ReactNode } from 'react'

interface AnimatedBorderCardProps {
  children: ReactNode
}

export default function AnimatedBorderCard({
  children,
}: AnimatedBorderCardProps) {
  return (
    // The Parent Div: This is the "picture frame".
    // We need to add the hover: classes here!
    <div className="group hover:bg-dashed-border hover:animate-marching-ants rounded-lg bg-transparent p-1 transition-all">
      {/* The Child Div: This is the "picture" inside the frame. */}
      <div className="rounded-md bg-gray-700 p-4">{children}</div>
    </div>
  )
}
