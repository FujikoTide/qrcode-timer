export default function Message({ message }) {
  return (
    message && (
      <div className="pt-5 text-2xl text-orange-400 text-shadow-md text-shadow-neutral-800">
        {message}
      </div>
    )
  )
}
