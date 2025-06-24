import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import QRCode from '@/components/atoms/QRCode'
import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'
import TrueMarqueeBorder from './TrueMarqueeBorder'

interface QRCodeDisplayProps {
  URI: string
}

function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
}

export default function QRCodeDisplay({ URI }: QRCodeDisplayProps) {
  const [baseURL, setBaseURL] = useState('')
  const qrCodeRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setBaseURL(window.location.origin)
  }, [])

  const fullURL = `${baseURL}/${URI}`
  const displayURL = truncateString(fullURL, 40)

  const handleDownload = () => {
    const canvas = qrCodeRef.current
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream')

      const downloadLink = document.createElement('a')
      downloadLink.href = pngUrl
      downloadLink.download = 'qrcode.png'
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    }
  }

  if (!URI) {
    return null
  }

  return (
    <div className="text-center">
      <TrueMarqueeBorder speed="normal" borderSize="md" variant="hover">
        <Link
          to={URI}
          className="block text-center transition-transform duration-200"
        >
          <QRCode ref={qrCodeRef} value={fullURL} />
          <Typography textSize="md" align="center" className="mt-2">
            {baseURL ? displayURL : 'Generating Link...'}
          </Typography>
        </Link>
      </TrueMarqueeBorder>
      <div className="mt-4">
        <Button
          onClick={handleDownload}
          intent="warning"
          size="sm"
          width="fullWidth"
        >
          Download QR Code
        </Button>
      </div>
    </div>
  )
}
