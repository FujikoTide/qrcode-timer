import type { ReactNode } from 'react'

interface TrueMarqueeBorderProps {
  children: ReactNode
}

export default function TrueMarqueeBorder({
  children,
}: TrueMarqueeBorderProps) {
  const borderWidth = 'h-[2px]'
  const borderWidthY = 'w-[2px]'

  return (
    <div className="group relative rounded-2xl">
      <div
        className={`pointer-events-none absolute top-0 right-0 left-0 z-10 ${borderWidth} group-hover:bg-marquee-h group-hover:animate-march-right opacity-0 transition-opacity group-hover:opacity-100`}
      />
      <div
        className={`pointer-events-none absolute right-0 bottom-0 left-0 z-10 ${borderWidth} group-hover:bg-marquee-h group-hover:animate-march-left opacity-0 transition-opacity group-hover:opacity-100`}
      />
      <div
        className={`pointer-events-none absolute top-0 bottom-0 left-0 z-10 ${borderWidthY} group-hover:bg-marquee-v group-hover:animate-march-down opacity-0 transition-opacity group-hover:opacity-100`}
      />
      <div
        className={`pointer-events-none absolute top-0 right-0 bottom-0 z-10 ${borderWidthY} group-hover:bg-marquee-v group-hover:animate-march-up opacity-0 transition-opacity group-hover:opacity-100`}
      />
      <div className="relative rounded-lg bg-gray-700 p-4">{children}</div>
    </div>
  )
}
