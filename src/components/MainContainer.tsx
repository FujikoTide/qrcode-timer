import type { ReactNode } from 'react'

interface MainContainerType {
  children: ReactNode
}

export default function MainContainer({ children }: MainContainerType) {
  return (
    <div className="mx-auto my-10 h-fit max-w-2xl rounded-2xl px-10 py-5 shadow-[-10px_0_15px_-4px_rgba(0,0,0,0.2),_10px_0_15px_-4px_rgba(0,0,0,0.2)]">
      {children}
    </div>
  )
}
