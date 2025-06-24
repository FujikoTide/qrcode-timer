import { useState } from 'react'
import Title from '@/components/molecules/Title'
import { compressAndEncodeUrlSafe } from '@/compression'
import ButtonGroup from '@/components/molecules/ButtonGroup'
import ContentColumn from '@/components/molecules/ContentColumn'
import MainContainer from '@/components/organisms/MainContainer'
import Collapsible from '@/components/molecules/Collapsible'
import Button from '@/components/atoms/Button'
import QRCodeDisplay from '@/components/molecules/QRDisplay'
import InputMessage from '@/components/molecules/InputMessage'
import InputDate from '@/components/molecules/InputDate'
import InputLocation from '@/components/molecules/InputLocation'
import Instructions from '@/components/molecules/Instructions'
import { useMediaQuery } from '@/hooks/useMediaQuery'

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

const initialCoordinates = { lat: 51.5074, lng: -0.1278 } // London

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

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <>
      <MainContainer width="single">
        <Title>{title}</Title>

        <Collapsible
          isOpen={
            Object.entries(dataForQrCode).length === 0 &&
            generatedLink === '' &&
            activeSection === null
          }
        >
          <Instructions />
        </Collapsible>
        <Collapsible isOpen={activeSection === 'generatedLink'}>
          <QRCodeDisplay URI={qrCodeValue} />
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
          <InputLocation
            initialCoordinates={initialCoordinates}
            onLocationChange={(location) =>
              handleQrCodeData('location', location)
            }
          />
        </Collapsible>
        <ContentColumn maxWidth="xl" className="my-4">
          <ButtonGroup
            layout={isDesktop ? 'flex' : 'grid'}
            direction="col"
            cols="2"
            align="center"
            gap="sm"
          >
            <Collapsible isOpen={activeSection !== 'generatedLink'}>
              <Button
                onClick={() =>
                  toggleSection('message', 'QR Code Timer - Input Message')
                }
                intent="danger"
                width="fullWidth"
              >
                {activeSection === 'message' ? 'Hide Message' : 'Input Message'}
              </Button>
            </Collapsible>
            <Collapsible isOpen={activeSection !== 'generatedLink'}>
              <Button
                onClick={() =>
                  toggleSection('date', 'QR Code Timer - Input Date')
                }
                intent="primary"
                width="fullWidth"
              >
                {activeSection === 'date' ? 'Hide Date' : 'Input Date'}
              </Button>
            </Collapsible>
            <Collapsible isOpen={activeSection !== 'generatedLink'}>
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
            </Collapsible>
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
