import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { decodeAndDecompressUrlSafe } from '@/compression'
import Typography from '@/components/atoms/Typography'
import MainContainer from '@/components/organisms/MainContainer'
import Title from '@/components/molecules/Title'
import LocationDisplayMap from '@/components/molecules/LocationDisplayMap'
import ContentColumn from '@/components/molecules/ContentColumn'
import { type Base64String } from '@/base64'
import CountdownDisplay from '@/components/molecules/CountdownDisplay'

interface DecodedData {
  l?: string
  m?: string
  d?: string
}

interface Coordinates {
  lat: number
  lng: number
}

type ShowDataParams = {
  id: Base64String
}

export default function ShowData() {
  const { id } = useParams<ShowDataParams>()
  const [decodedData, setDecodedData] = useState<DecodedData | null>(null)
  const [locationCoords, setLocationCoords] = useState<Coordinates | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loadingAddress, setLoadingAddress] = useState(false)

  const reverseGeocode = useCallback(async (lat: number, lng: number) => {
    if (!window.google || !window.google.maps.Geocoder) {
      console.error('Geocoder not available')
      return
    }
    setLoadingAddress(true)
    const geocoder = new google.maps.Geocoder()
    try {
      const response = await geocoder.geocode({ location: { lat, lng } })
      if (response.results[0]) {
        setAddress(response.results[0].formatted_address)
      } else {
        setAddress('No address found for this location.')
      }
    } catch (e) {
      setAddress(`Could not retrieve address, error: ${e}`)
    } finally {
      setLoadingAddress(false)
    }
  }, [])

  useEffect(() => {
    if (!id) {
      setError('No data provided in the URL.')
      return
    }

    try {
      const decodedObject = decodeAndDecompressUrlSafe(id) as DecodedData
      setDecodedData(decodedObject)

      if (decodedObject.l) {
        const parts = decodedObject.l.split(',')
        if (parts.length === 2) {
          const lat = parseFloat(parts[0])
          const lng = parseFloat(parts[1])

          if (!isNaN(lat) && !isNaN(lng)) {
            const coords = { lat, lng }
            setLocationCoords({ lat, lng })
            reverseGeocode(coords.lat, coords.lng)
          }
        }
      }
    } catch (e) {
      setError(`Failed to decode the data. The link may be corrupted: ${e}`)
    }
  }, [id, reverseGeocode])

  const renderContent = () => {
    if (error) {
      return <Typography>{error}</Typography>
    }
    if (!decodedData) {
      return <Typography>Loading and decoding data...</Typography>
    }

    return (
      <>
        {locationCoords && <LocationDisplayMap coordinates={locationCoords} />}
        <ContentColumn className="gap-6 border-1 border-orange-400 py-4">
          {decodedData.d && <CountdownDisplay targetDate={decodedData.d} />}
          {decodedData.d && (
            <Typography textSize="xl" align="left" className="pl-4">
              <strong>Date:</strong> {new Date(decodedData.d).toUTCString()}
            </Typography>
          )}
          {locationCoords && (address || loadingAddress) && (
            <Typography textSize="xl" align="left" className="pl-4">
              <strong>Address:</strong>{' '}
              {loadingAddress ? 'Loading Address...' : address}
            </Typography>
          )}
          {decodedData.m && (
            <Typography textSize="xl" align="left" className="pl-4">
              <strong>Message:</strong> {decodedData.m}
            </Typography>
          )}
          {decodedData.l && !locationCoords && (
            <Typography>
              Location data is present but seems to be in an invalid format.
            </Typography>
          )}
        </ContentColumn>
      </>
    )
  }

  return (
    <>
      <MainContainer>
        <Title>Meeting Information</Title>
        {renderContent()}
      </MainContainer>
    </>
  )
}
