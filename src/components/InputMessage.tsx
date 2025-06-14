import TextInput from './TextInput'

// need context stuff now !
export default function InputMessage() {
  return (
    <>
      <div className="pb-5 text-center text-3xl font-bold text-orange-400 capitalize text-shadow-md text-shadow-neutral-800">
        QR Code Timer - Input Message
      </div>
      <TextInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
      />
    </>
  )
}
