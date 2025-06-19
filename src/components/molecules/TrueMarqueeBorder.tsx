import { cva, type VariantProps } from 'class-variance-authority'
import { type Size } from '@/styles/types'
import type { ReactNode } from 'react'

export type BorderSizeMapType = Record<Size, { h: string; w: string }>

export interface BorderVariantProps {
  positionClasses: string
  backgroundClass: 'bg-marquee-h' | 'bg-marquee-v'
  animationDirection: 'march-right' | 'march-left' | 'march-down' | 'march-up'
}

export interface TrueMarqueeBorderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof topBorderVariants> {
  children: ReactNode
  borderSize?: keyof BorderSizeMapType
}

const borderSizeMap: BorderSizeMapType = {
  sm: { h: 'h-[1px]', w: 'w-[1px]' },
  md: { h: 'h-[2px]', w: 'w-[2px]' },
  lg: { h: 'h-[4px]', w: 'w-[4px]' },
}

const baseBorderStyles = 'pointer-events-none absolute z-10 transition-opacity'

const topBorderVariants = cva(`${baseBorderStyles} top-0 right-0 left-0`, {
  variants: {
    variant: {
      static: `opacity-100 bg-marquee-h`,
      animated: `opacity-0 group-hover:opacity-100 group-hover:bg-marquee-h`,
    },
    speed: {
      slow: 'group-hover:animate-march-right-slow',
      normal: 'group-hover:animate-march-right-normal',
      fast: 'group-hover:animate-march-right-fast',
    },
  },
  defaultVariants: {
    variant: 'animated',
    speed: 'normal',
  },
})

const bottomBorderVariants = cva(
  `${baseBorderStyles} right-0 bottom-0 left-0`,
  {
    variants: {
      variant: {
        static: `opacity-100 bg-marquee-h`,
        animated: `opacity-0 group-hover:opacity-100 group-hover:bg-marquee-h`,
      },
      speed: {
        slow: 'group-hover:animate-march-left-slow',
        normal: 'group-hover:animate-march-left-normal',
        fast: 'group-hover:animate-march-left-fast',
      },
    },
    defaultVariants: {
      variant: 'animated',
      speed: 'normal',
    },
  },
)

const leftBorderVariants = cva(`${baseBorderStyles} top-0 bottom-0 left-0`, {
  variants: {
    variant: {
      static: `opacity-100 bg-marquee-v`,
      animated: `opacity-0 group-hover:opacity-100 group-hover:bg-marquee-v`,
    },
    speed: {
      slow: 'group-hover:animate-march-up-slow',
      normal: 'group-hover:animate-march-up-normal',
      fast: 'group-hover:animate-march-up-fast',
    },
  },
  defaultVariants: {
    variant: 'animated',
    speed: 'normal',
  },
})

const rightBorderVariants = cva(`${baseBorderStyles} top-0 right-0 bottom-0`, {
  variants: {
    variant: {
      static: `opacity-100 bg-marquee-v`,
      animated: `opacity-0 group-hover:opacity-100 group-hover:bg-marquee-v`,
    },
    speed: {
      slow: 'group-hover:animate-march-down-slow',
      normal: 'group-hover:animate-march-down-normal',
      fast: 'group-hover:animate-march-down-fast',
    },
  },
  defaultVariants: {
    variant: 'animated',
    speed: 'normal',
  },
})

export default function TrueMarqueeBorder({
  children,
  variant,
  speed,
  borderSize = 'md',
}: TrueMarqueeBorderProps) {
  const borderWidthClasses = borderSizeMap[borderSize]

  // --- THE DEBUGGING CODE ---
  // const topBorderClasses = topBorderVariants({
  //   variant,
  //   speed,
  //   className: borderWidthClasses.h,
  // })

  // console.log('--- TrueMarqueeBorder Render ---')
  // console.log('Props received:', { variant, speed, borderSize })
  // console.log('Generated Top Border Classes:', topBorderClasses)
  // --- END DEBUGGING CODE ---

  return (
    <div className="group relative">
      <div
        className={topBorderVariants({
          variant,
          speed,
          className: borderWidthClasses.h,
        })}
      />
      <div
        className={bottomBorderVariants({
          variant,
          speed,
          className: borderWidthClasses.h,
        })}
      />
      <div
        className={leftBorderVariants({
          variant,
          speed,
          className: borderWidthClasses.w,
        })}
      />
      <div
        className={rightBorderVariants({
          variant,
          speed,
          className: borderWidthClasses.w,
        })}
      />
      <div className="relative bg-gray-700 p-4">{children}</div>
    </div>
  )
}
