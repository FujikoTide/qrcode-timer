import { useState } from 'react'
import MainContainer from './components/MainContainer'
import QRCode from './components/QRCode'
import Slider from './components/Slider'
import SubmitButton from './components/SubmitButton'
import Title from './components/Title'
import { stringToBase64, base64ToString } from './base64'

interface SliderValues {
  minutes: number
  hours: number
  days: number
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

function App() {
  const [sliderValues, setSliderValues] = useState<SliderValues>({
    minutes: MINUTES.default,
    hours: HOURS.default,
    days: DAYS.default,
  })

  const [qrCodeValue, setQrCodeValue] = useState('')

  function handleClick() {
    const sliderValuesString = JSON.stringify(sliderValues)
    setQrCodeValue(sliderValuesString)

    // TESTING !!!!!!!!
    const testBase64 = stringToBase64(sliderValuesString)
    const testString = base64ToString(testBase64)
    console.log(testBase64, testString)
    // TESTING !!!!!!!!
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    sliderName: keyof SliderValues
  ) {
    const newValue = parseInt(e.target.value, 10)
    setSliderValues((prevValues) => ({
      ...prevValues,
      [sliderName]: newValue,
    }))
  }

  const sliderConfigs = [
    {
      key: 'minutes' as const,
      config: MINUTES,
    },
    { key: 'hours' as const, config: HOURS },
    { key: 'days' as const, config: DAYS },
  ]

  return (
    <MainContainer>
      <Title />
      <QRCode value={qrCodeValue} />
      {sliderConfigs.map((entry) => (
        <div key={entry.key}>
          <Slider
            props={entry.config}
            value={sliderValues[entry.key]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, entry.key)
            }
          />
        </div>
      ))}
      <SubmitButton onClick={handleClick} />
    </MainContainer>
  )
}

export default App
