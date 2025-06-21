import { useCountdown, type CountdownResult } from '@/hooks/useCountdown'
import Typography from '@/components/atoms/Typography'
import ContentColumn from './ContentColumn'

interface CountdownDisplayProps {
  targetDate: string
}

function formatCountdown(countdown: CountdownResult): string {
  const parts = [
    countdown.years > 0 && `${countdown.years}y`,
    countdown.months > 0 && `${countdown.months}m`,
    countdown.days > 0 && `${countdown.days}d`,
    countdown.hours > 0 && `${countdown.hours}h`,
    countdown.minutes > 0 && `${countdown.minutes}min`,
    `${countdown.seconds}s`,
  ]
    .filter(Boolean)
    .join(' ')

  return parts
}

export default function CountdownDisplay({
  targetDate,
}: CountdownDisplayProps) {
  const countdown = useCountdown(targetDate)

  if (!countdown) {
    return <Typography>The provided date is invalid.</Typography>
  }

  if (countdown.isFinished) {
    return (
      <Typography
        align="left"
        textSize="2xl"
        textWeight="bold"
        className="pl-4"
      >
        The event has started!
      </Typography>
    )
  }

  return (
    <ContentColumn>
      <Typography textSize="2xl" align="left" className="pl-4">
        <strong>Time Remaining:</strong> {formatCountdown(countdown)}
      </Typography>
    </ContentColumn>
  )
}
