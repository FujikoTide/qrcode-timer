// src/components/molecules/InputLocation.tsx
import GoogleMapsComponent from '@/components/atoms/GoogleMaps'
import ContentColumn from '@/components/molecules/ContentColumn'

interface InputLocationProps {
  initialCoordinates?: { lat: number; lng: number }
  // Add the callback to the props interface
  onLocationChange: (location: string) => void
}

export default function InputLocation({
  initialCoordinates,
  onLocationChange, // Destructure the callback
}: InputLocationProps) {
  return (
    <ContentColumn className="text-center">
      <GoogleMapsComponent
        initialCoordinates={initialCoordinates}
        onLocationChange={onLocationChange} // Pass it down
      />
    </ContentColumn>
  )
}
