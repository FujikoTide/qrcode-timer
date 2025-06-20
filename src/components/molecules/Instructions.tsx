import Typography from '@/components/atoms/Typography'
import TrueMarqueeBorder from '@/components/molecules/TrueMarqueeBorder'

export default function Instructions() {
  return (
    <TrueMarqueeBorder variant="static">
      <Typography align="left" textSize="2xl">
        Use QR Code Timer to set a meeting up with your friends or colleagues!
      </Typography>
      <Typography align="left" textSize="2xl">
        Enter some or all of the information below Click Generate QR Code.
      </Typography>
      <Typography align="left" textSize="2xl">
        Send the QR Code to you friends or colleagues.
      </Typography>
      <Typography align="left" textSize="2xl">
        When they follow the link in the QR Code they will see your meeting
        information!
      </Typography>
    </TrueMarqueeBorder>
  )
}
