interface QRCodeLinkType {
  URI: string
}

export default function QRCodeLink({ URI }: QRCodeLinkType) {
  return (
    <div>
      <a
        className='text-2xl text-orange-400 text-shadow-md text-shadow-neutral-800'
        href={URI}
      >
        {URI}
      </a>
    </div>
  )
}
