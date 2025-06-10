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

const MINUTES = {
  label: 'minutes',
  min: 0,
  max: 60,
  default: 0,
} as const

const HOURS = {
  label: 'hours',
  min: 0,
  max: 60,
  default: 0,
} as const

const DAYS = {
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

  return (
    <MainContainer>
      <Title />
      <QRCode value={qrCodeValue} />
      <Slider
        props={MINUTES}
        value={sliderValues.minutes}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, 'minutes')
        }
      />
      <Slider
        props={HOURS}
        value={sliderValues.hours}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, 'hours')
        }
      />
      <Slider
        props={DAYS}
        value={sliderValues.days}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, 'days')
        }
      />
      <SubmitButton onClick={handleClick} />
    </MainContainer>
  )
}

export default App
