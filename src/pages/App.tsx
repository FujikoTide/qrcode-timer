import { useState } from 'react'
import Title from '@/components/molecules/Title'
import { compressAndEncodeUrlSafe } from '@/compression'
import { Link } from 'react-router-dom'
import ButtonGroup from '@/components/molecules/ButtonGroup'
import ContentColumn from '@/components/molecules/ContentColumn'
import MainContainer from '@/components/organisms/MainContainer'
import Collapsible from '@/components/molecules/Collapsible'
import Button from '@/components/atoms/Button'
import QRCodeDisplay from '@/components/molecules/QRDisplay'
import TrueMarqueeBorder from '@/components/molecules/TrueMarqueeBorder'
import InputMessage from '@/components/InputMessage'
import InputDate from '@/components/InputDate'
import InputLocation from '@/components/InputLocation'

interface QRCodePayload {
  msg: string
  s: { [key: string]: SliderPayload }
  t: number
}

const keyMap = {
  label: 'l',
  min: 'n',
  max: 'x',
  value: 'v',
  message: 'msg',
  timestamp: 't',
} as const

function App() {
  const [qrCodeValue, setQrCodeValue] = useState('')
  const [generatedLink, setGeneratedLink] = useState('')
  const [title, setTitle] = useState('QR Code Timer')
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // function preparePayload(
  //   currentValues: SliderValues,
  //   message: string,
  // ): QRCodePayload {
  //   const slidersObject = sliderConfigs.reduce(
  //     (acc, sliderConfig) => {
  //       const sliderKey = keyMap[sliderConfig.key]
  //       const sliderData: SliderPayload = {
  //         [keyMap.label]: sliderConfig.config.label,
  //         [keyMap.min]: sliderConfig.config.min,
  //         [keyMap.max]: sliderConfig.config.max,
  //         [keyMap.value]: currentValues[sliderConfig.key],
  //       }
  //       acc[sliderKey] = sliderData
  //       return acc
  //     },
  //     {} as { [key: string]: SliderPayload },
  //   )

  //   return {
  //     [keyMap.message]: message,
  //     [keyMap.sliders]: slidersObject,
  //     [keyMap.timestamp]: Date.now(),
  //   }
  // }

  function handleGenerateQRCode() {
    // const payload = preparePayload(sliderValues, message)
    // const payloadString = compressAndEncodeUrlSafe(payload)

    toggleSection('generatedLink', 'QR Code Timer')

    // if (generatedLink) {
    //   setGeneratedLink('')
    // } else {
    //   setGeneratedLink(payloadString)
    //   setQrCodeValue(payloadString)
    // }
  }

  const toggleSection = (section: string, title: string) => {
    setActiveSection((prev) => {
      const isClosing = prev === section
      setTitle(isClosing ? 'QR Code Timer' : title)
      return isClosing ? null : section
    })
  }

  return (
    <>
      <MainContainer width="single">
        <Title>{title}</Title>
        <Collapsible isOpen={activeSection === 'generatedLink'}>
          <TrueMarqueeBorder speed="normal" borderSize="md" variant="animated">
            <QRCodeDisplay URI={qrCodeValue} />
          </TrueMarqueeBorder>
        </Collapsible>
        <Collapsible isOpen={activeSection === 'message'}>
          <InputMessage />
        </Collapsible>
        <Collapsible isOpen={activeSection === 'date'}>
          <InputDate />
        </Collapsible>
        <Collapsible isOpen={activeSection === 'location'}>
          <InputLocation />
        </Collapsible>
        <ContentColumn maxWidth="xl" className="my-4">
          <ButtonGroup direction="col" align="center" gap="md">
            <Button
              onClick={() =>
                toggleSection('message', 'QR Code Timer - Input Message')
              }
              intent="danger"
              width="fullWidth"
            >
              {activeSection === 'message' ? 'Hide Message' : 'Input Message'}
            </Button>
            <Button
              onClick={() =>
                toggleSection('date', 'QR Code Timer - Input Date')
              }
              intent="primary"
              width="fullWidth"
            >
              {activeSection === 'date' ? 'Hide Date' : 'Input Date'}
            </Button>
            <Button
              onClick={() =>
                toggleSection('location', 'QR Code Timer - Input Location')
              }
              intent="secondary"
              width="fullWidth"
            >
              {activeSection === 'location'
                ? 'Hide Location'
                : 'Input Location'}
            </Button>
            <Button
              onClick={handleGenerateQRCode}
              intent="warning"
              width="fullWidth"
            >
              {activeSection === 'generatedLink'
                ? 'Hide QR Code'
                : 'Generate QR Code'}
            </Button>
          </ButtonGroup>
        </ContentColumn>
      </MainContainer>
    </>
  )
}

export default App
