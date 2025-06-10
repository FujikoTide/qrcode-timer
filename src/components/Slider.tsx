export default function Slider({ value, props, onChange }) {
  return (
    <div className='relative mb-10 mt-2'>
      <label
        htmlFor='labels-range-input'
        className='text-2xl text-orange-400 text-shadow-md text-shadow-neutral-800 capitalize'
      >
        {props.label}: {value}
      </label>
      <input
        id='labels-range-input'
        type='range'
        value={value}
        min={props.min}
        max={props.max}
        step={1}
        className='w-full h-2 bg-orange-400 rounded-lg appearance-none cursor-pointer  shadow-md shadow-neutral-800 slider'
        onChange={onChange}
      />
      <span className='text-xl text-orange-400 absolute start-0 -bottom-7 text-shadow-md text-shadow-neutral-800'>
        Min ({props.min})
      </span>
      <span className='text-xl text-orange-400  absolute end-0 -bottom-7 text-shadow-md text-shadow-neutral-800'>
        Max ({props.max})
      </span>
    </div>
  )
}
