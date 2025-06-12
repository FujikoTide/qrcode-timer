export default function TextInput({ onChange }) {
  return (
    <div>
      {/* <label
        htmlFor="textInput"
        className="text-2xl text-orange-400 capitalize text-shadow-md text-shadow-neutral-800"
      >
        Message
      </label> */}
      <input
        className="my-4 w-full rounded-2xl border-4 bg-gray-700 p-5 text-xl font-bold text-orange-400 shadow-md shadow-neutral-800 outline-0 text-shadow-md text-shadow-neutral-800 placeholder:text-orange-400/70"
        type="text"
        name="textInput"
        onChange={onChange}
        placeholder="Enter Message..."
      />
    </div>
  )
}
