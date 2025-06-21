import { useState, useEffect } from 'react'
import { intervalToDuration, isAfter } from 'date-fns'

export interface CountdownResult {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
  isFinished: boolean
}

/**
 * A custom hook to calculate the time remaining until a target date.
 * @param targetDate The future date to count down to (string or Date object).
 * @returns An object with the remaining time units and a finished flag.
 */
export function useCountdown(
  targetDate: string | Date,
): CountdownResult | null {
  const [target] = useState(new Date(targetDate))
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (isNaN(target.getTime())) {
    return null
  }

  const isFinished = isAfter(now, target)

  const duration = !isFinished
    ? intervalToDuration({ start: now, end: target })
    : { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    years: duration.years || 0,
    months: duration.months || 0,
    days: duration.days || 0,
    hours: duration.hours || 0,
    minutes: duration.minutes || 0,
    seconds: duration.seconds || 0,
    isFinished,
  }
}
