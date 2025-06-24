import { QRCodeCanvas } from 'qrcode.react'
import { forwardRef } from 'react'

interface QRCodeProps {
  value: string
}

const QRCode = forwardRef<HTMLCanvasElement, QRCodeProps>(({ value }, ref) => {
  return (
    <div className="mx-auto mb-1 w-fit rounded-xl border-4 border-orange-400 p-2 shadow-md shadow-neutral-800">
      <QRCodeCanvas
        ref={ref}
        value={value}
        className="shadow-md shadow-neutral-600"
        size={256}
        level="M"
      />
    </div>
  )
})

export default QRCode
