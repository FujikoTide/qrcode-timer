import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface QRCodeLinkType {
  URI: string
}

function truncateString(str, maxLength) {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
}

export default function QRCodeLink({ URI }: QRCodeLinkType) {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    setBaseURL(window.location.origin)
  }, [])

  const displayURI = truncateString(URI, 20)

  const fullURL = `${baseURL}/${displayURI}`

  return (
    URI && (
      <div className="flex justify-center">
        <Link
          className="text-base text-orange-400 text-shadow-md text-shadow-neutral-800"
          to={URI}
        >
          {URI ? (baseURL ? fullURL : `/${displayURI}`) : ''}
        </Link>
      </div>
    )
  )
}
