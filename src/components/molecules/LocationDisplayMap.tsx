// src/components/molecules/LocationDisplayMap.tsx
import { Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import ContentColumn from './ContentColumn'

interface Coordinates {
  lat: number
  lng: number
}

interface LocationDisplayMapProps {
  coordinates: Coordinates
}

export default function LocationDisplayMap({
  coordinates,
}: LocationDisplayMapProps) {
  return (
    <ContentColumn className="h-[300px] w-full lg:h-[400px]">
      <Map
        center={coordinates}
        defaultZoom={14} // Zoom in a bit closer for a specific location
        mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
        // Make the map read-only
        gestureHandling={'cooperative'}
        zoomControl={true}
        disableDefaultUI={true}
      >
        <AdvancedMarker position={coordinates} />
      </Map>
    </ContentColumn>
  )
}
