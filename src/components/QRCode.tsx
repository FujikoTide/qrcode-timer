import { QRCodeSVG } from 'qrcode.react'

interface QRCodeValue {
  value: string
}

export default function QRCode({ value }: QRCodeValue) {
  return (
    <div className="mx-auto mb-1 w-fit rounded-xl border-4 border-orange-400 p-2 shadow-md shadow-neutral-800">
      <QRCodeSVG
        value={value}
        className="shadow-md shadow-neutral-600"
        size={256}
      />
    </div>
  )
}
