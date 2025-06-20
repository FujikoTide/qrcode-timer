// src/components/atoms/GoogleMapsComponent.tsx
import React, { useState, useCallback } from 'react'
import {
  Map,
  AdvancedMarker,
  type MapMouseEvent,
} from '@vis.gl/react-google-maps'
import Typography from '@/components/atoms/Typography'
import ContentColumn from '../molecules/ContentColumn'

const defaultCenter = {
  lat: 51.5074, // London
  lng: -0.1278,
}

interface Coordinates {
  lat: number
  lng: number
}

interface GoogleMapsComponentProps {
  initialCoordinates?: Coordinates
  onLocationChange: (location: string) => void
}

const GoogleMapsComponent: React.FC<GoogleMapsComponentProps> = ({
  initialCoordinates,
  onLocationChange,
}) => {
  const [markerPosition, setMarkerPosition] = useState<Coordinates | null>(
    initialCoordinates || null,
  )
  const [address, setAddress] = useState<string | null>(null)

  const reverseGeocode = useCallback(async (lat: number, lng: number) => {
    // Geocoding works the same way
    if (!window.google || !window.google.maps.Geocoder) return
    const geocoder = new google.maps.Geocoder()
    try {
      const response = await geocoder.geocode({ location: { lat, lng } })
      if (response.results[0]) {
        setAddress(response.results[0].formatted_address)
      } else {
        setAddress('No address found.')
      }
    } catch (error) {
      setAddress('Failed to retrieve address.')
      console.log(`Geocode Error, failed to retrieve address: ${error}`)
    }
  }, [])

  const onMapClick = useCallback(
    (e: MapMouseEvent) => {
      if (e.detail.latLng) {
        const newPosition = {
          lat: e.detail.latLng.lat,
          lng: e.detail.latLng.lng,
        }
        setMarkerPosition(newPosition)
        onLocationChange(`${newPosition.lat},${newPosition.lng}`)
        reverseGeocode(newPosition.lat, newPosition.lng)
      }
    },
    [onLocationChange, reverseGeocode],
  )

  return (
    <div className="flex flex-col items-center border-1 border-orange-400">
      <ContentColumn className="h-[400px] w-full">
        <Map
          defaultCenter={initialCoordinates || defaultCenter}
          defaultZoom={10}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
          onClick={onMapClick}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          zoomControl={true}
        >
          {markerPosition && <AdvancedMarker position={markerPosition} />}
        </Map>
      </ContentColumn>
      <ContentColumn className="w-full py-4 text-center">
        {markerPosition && (
          <>
            <Typography>
              <strong>Coordinates:</strong> {markerPosition.lat.toFixed(4)},{' '}
              {markerPosition.lng.toFixed(4)}
            </Typography>
            {address && (
              <Typography className="mt-1">
                <strong>Address:</strong> {address}
              </Typography>
            )}
          </>
        )}
      </ContentColumn>
    </div>
  )
}

export default GoogleMapsComponent
