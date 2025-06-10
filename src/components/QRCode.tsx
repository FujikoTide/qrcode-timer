import { QRCodeSVG } from 'qrcode.react'

export default function QRCode({ value }) {
  return (
    <div className='p-2 border-4 border-orange-400 rounded-xl mx-auto w-fit shadow-md shadow-neutral-800'>
      <QRCodeSVG
        value={value}
        className='shadow-md shadow-neutral-600'
        size={256}
      />
    </div>
  )
}
