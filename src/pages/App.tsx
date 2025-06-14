import { useState } from 'react'
import QRCode from '../components/QRCode'
import Slider from '../components/Slider'
import Button from '../components/atoms/Button'
import Title from '../components/Title'
import QRCodeLink from '../components/QRCodeLink'
import TextInput from '../components/TextInput'
import { compressAndEncodeUrlSafe } from '../compression'
import { useNavigate } from 'react-router-dom'
import ActionButton from '../components/atoms/ActionButton'
// import { useNavigate } from 'react-router-dom'

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
      <Title />
      <QRCode value={qrCodeValue} />
      <QRCodeLink URI={qrCodeValue} />
      <div>
        <ActionButton label="Input Message" onClick={handleMessageButton} />
        <ActionButton label="Input Due Time" onClick={handleSlidersButton} />
        <ActionButton label="Input Due Date" onClick={handleDateButton} />
        <ActionButton label="Input Location" onClick={handleLocationButton} />

        <ActionButton label="Generate QR Code" onClick={handleClick} />
      </div>
    </>
  )
}

export default App
