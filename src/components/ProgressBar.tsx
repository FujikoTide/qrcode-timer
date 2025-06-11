import { cn } from '../classname'

interface ProgressBarProps {
  props: {
    l: string // label
    v: number // value
    n: number // min
    x: number // max
  }
}

export default function ProgressBar({ props }: ProgressBarProps) {
  const { l: label, v: value, n: min, x: max } = props

  let percent = ((value - min) / (max - min)) * 100
  if (isNaN(percent) || max === min) {
    percent = 0
  }
  percent = Math.max(0, Math.min(100, percent))

  return (
    <div className="mt-4">
      <div className="text-2xl text-orange-400 capitalize text-shadow-md text-shadow-neutral-800">
        {label}
      </div>
      <div className="relative my-4 h-18 w-full overflow-hidden rounded-2xl border-4 border-orange-400 bg-gray-700 text-3xl font-bold text-gray-700 shadow-md shadow-neutral-800 outline-0 text-shadow-2xs text-shadow-orange-400">
        <div
          className="absolute top-0 left-0 h-full items-center bg-orange-400 transition-all duration-500 ease-in-out"
          style={{ width: `${percent}%` }}
        ></div>
        <div className="absolute inset-0 flex items-center">
          <span className="pl-4 text-3xl font-bold whitespace-nowrap text-neutral-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] filter">
            {value} / {max}
          </span>
        </div>
      </div>
    </div>
  )
}
