export default function TextInput({ onChange }) {
  return (
    <div>
      <label htmlFor="textInput">Message:</label>
      <input
        type="text"
        name="textInput"
        onChange={onChange}
        placeholder="Enter Message..."
      />
    </div>
  )
}
