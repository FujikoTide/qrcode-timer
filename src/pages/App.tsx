import { useState, type ReactNode } from 'react'
import QRCode from '../components/QRCode'
// import Slider from '../components/Slider'
import Title from '../components/Title'
import QRCodeLink from '../components/QRCodeLink'
// import TextInput from '../components/TextInput'
import { compressAndEncodeUrlSafe } from '../compression'
import { useNavigate } from 'react-router-dom'
import ActionButton from '../components/atoms/ActionButton'
import ButtonGroup from '../components/molecules/ButtonGroup'
import ContentColumn from '../components/molecules/ContentColumn'
import MainContainer from '../components/organisms/MainContainer'
import Grid from '../components/primitives/Grid'
import Avatar from '../components/atoms/Avatar'
// import { useNavigate } from 'react-router-dom'
import person1 from '../images/person1.jpg'
import person2 from '../images/person2.jpg'
import person3 from '../images/person3.jpg'

interface SliderValues {
  minutes: number
  hours: number
  days: number
}

interface SliderPayload {
  l: string
  n: number
  x: number
  v: number
}

interface QRCodePayload {
  msg: string
  s: { [key: string]: SliderPayload }
  t: number
}

export interface SliderProps {
  label: string
  min: number
  max: number
  default: number
}

const MINUTES: SliderProps = {
  label: 'minutes',
  min: 0,
  max: 60,
  default: 0,
} as const

const HOURS: SliderProps = {
  label: 'hours',
  min: 0,
  max: 60,
  default: 0,
} as const

const DAYS: SliderProps = {
  label: 'days',
  min: 0,
  max: 365,
  default: 0,
} as const

const keyMap = {
  minutes: 'm',
  hours: 'h',
  days: 'd',
  label: 'l',
  min: 'n',
  max: 'x',
  value: 'v',
  message: 'msg',
  timestamp: 't',
  sliders: 's',
} as const

const sliderConfigs = [
  {
    key: 'minutes' as const,
    config: MINUTES,
  },
  { key: 'hours' as const, config: HOURS },
  { key: 'days' as const, config: DAYS },
]

// EXAMPLE CARD
function FeatureCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="rounded-lg bg-slate-700 p-4">
      <h3 className="text-lg font-bold text-sky-400">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{children}</p>
    </div>
  )
}
// EXAMPLE CARD

function App() {
  const [sliderValues, setSliderValues] = useState<SliderValues>({
    minutes: MINUTES.default,
    hours: HOURS.default,
    days: DAYS.default,
  })

  const [message, setMessage] = useState('')
  const [qrCodeValue, setQrCodeValue] = useState('')

  function preparePayload(
    currentValues: SliderValues,
    message: string,
  ): QRCodePayload {
    const slidersObject = sliderConfigs.reduce(
      (acc, sliderConfig) => {
        const sliderKey = keyMap[sliderConfig.key]
        const sliderData: SliderPayload = {
          [keyMap.label]: sliderConfig.config.label,
          [keyMap.min]: sliderConfig.config.min,
          [keyMap.max]: sliderConfig.config.max,
          [keyMap.value]: currentValues[sliderConfig.key],
        }
        acc[sliderKey] = sliderData
        return acc
      },
      {} as { [key: string]: SliderPayload },
    )

    return {
      [keyMap.message]: message,
      [keyMap.sliders]: slidersObject,
      [keyMap.timestamp]: Date.now(),
    }
  }

  function handleClick() {
    const payload = preparePayload(sliderValues, message)
    const payloadString = compressAndEncodeUrlSafe(payload)

    setQrCodeValue(payloadString)
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    sliderName: keyof SliderValues,
  ) {
    const newValue = parseInt(e.target.value, 10)
    setSliderValues((prevValues) => ({
      ...prevValues,
      [sliderName]: newValue,
    }))
  }

  const navigate = useNavigate()

  function handleMessageButton() {
    navigate('/message')
  }

  function handleSlidersButton() {
    navigate('/sliders')
  }

  function handleDateButton() {
    navigate('/date')
  }

  function handleLocationButton() {
    navigate('/location')
  }

  return (
    <>
      <MainContainer width="single">
        <Title />
        <QRCode value={qrCodeValue} />
        <QRCodeLink URI={qrCodeValue} />
        <ContentColumn maxWidth="xl" className="my-4">
          <ButtonGroup direction="col" align="center" gap="md">
            <ActionButton
              label="Input Message"
              onClick={handleMessageButton}
              intent="danger"
              width="fullWidth"
            />
            <ActionButton
              label="Input Due Time"
              onClick={handleSlidersButton}
              intent="ghost"
              width="halfWidth"
            />
            <ActionButton
              label="Input Due Date"
              onClick={handleDateButton}
              intent="primary"
              width="fit"
            />
            <ActionButton
              label="Input Location"
              onClick={handleLocationButton}
              intent="secondary"
              width="fullWidth"
            />
            <ActionButton
              label="Generate QR Code"
              onClick={handleClick}
              intent="warning"
              width="fullWidth"
            />
          </ButtonGroup>
        </ContentColumn>
        <div className="my-12 border-t border-slate-600 pt-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-orange-400">
            Features
          </h2>
          <Grid cols={2} gap="md">
            <div>
              <Avatar src={person1} alt="a person" size="sm" border="square" />
              <FeatureCard title="Dynamic Data">
                Create QR codes that contain rich, dynamic data including dates
                and times.
              </FeatureCard>
            </div>
            <div>
              <Avatar src={person2} alt="a person" size="md" border="circle" />
              <FeatureCard title="Secure & Private">
                All data is compressed and encoded directly in the URL. Nothing
                is stored on a server.
              </FeatureCard>
            </div>
            <div>
              <Avatar src={person3} alt="a person" size="lg" border="rounded" />
              <FeatureCard title="Easy to Use">
                A simple interface lets you generate and share complex QR codes
                in seconds.
              </FeatureCard>
            </div>
          </Grid>
        </div>
      </MainContainer>
    </>
  )
}

export default App
