import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import QRCode from '@/components/QRCode'
import Typography from '@/components/atoms/Typography'

interface QRCodeDisplayProps {
  URI: string
}

function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
}

export default function QRCodeDisplay({ URI }: QRCodeDisplayProps) {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    setBaseURL(window.location.origin)
  }, [])

  const fullURL = `${baseURL}/${URI}`
  const displayURL = truncateString(fullURL, 40)

  if (!URI) {
    return null
  }

  return (
    <Link
      to={URI}
      className="block text-center transition-transform duration-200"
    >
      <QRCode value={URI} />
      <Typography textSize="md" align="center" className="mt-2">
        {baseURL ? displayURL : 'Generating Link...'}
      </Typography>
    </Link>
  )
}
