import { useState } from 'react'
import Title from '@/components/molecules/Title'
import { compressAndEncodeUrlSafe } from '@/compression'
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

// interface QRCodeProps {
//   l: string | undefined
//   m: string | undefined
//   d: string | undefined
// }

interface PreparePayloadProps {
  location?: string
  message?: string
  date?: string
}

const keyMap = {
  location: 'l',
  message: 'm',
  date: 'd',
} as const

function App() {
  const [dataForQrCode, setDataForQrCode] = useState<PreparePayloadProps>({})
  const [qrCodeValue, setQrCodeValue] = useState('')
  const [generatedLink, setGeneratedLink] = useState('')
  const [title, setTitle] = useState('QR Code Timer')
  const [activeSection, setActiveSection] = useState<string | null>(null)

  function preparePayload({ location, message, date }: PreparePayloadProps) {
    return {
      [keyMap.location]: location,
      [keyMap.message]: message,
      [keyMap.date]: date,
    }
  }

  const handleQrCodeData = <K extends keyof PreparePayloadProps>(
    key: K,
    value: PreparePayloadProps[K],
  ) => {
    setDataForQrCode((prev) => ({ ...prev, [key]: value }))
  }

  function handleGenerateQRCode() {
    console.log(generatedLink)
    const payload = preparePayload(dataForQrCode)
    const payloadString = compressAndEncodeUrlSafe(payload)

    toggleSection('generatedLink', 'QR Code Timer')

    setGeneratedLink(payloadString)
    setQrCodeValue(payloadString)
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
        {!generatedLink ? 'some instructions'! : null}
        <Collapsible isOpen={activeSection === 'generatedLink'}>
          <TrueMarqueeBorder speed="normal" borderSize="md" variant="animated">
            <QRCodeDisplay URI={qrCodeValue} />
          </TrueMarqueeBorder>
        </Collapsible>
        <Collapsible isOpen={activeSection === 'message'}>
          <InputMessage
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleQrCodeData('message', e.target.value)
            }}
          />
        </Collapsible>
        <Collapsible isOpen={activeSection === 'date'}>
          <InputDate
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleQrCodeData('date', e.target.value)
            }}
          />
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
