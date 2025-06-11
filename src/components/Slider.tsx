import type { SliderProps } from "../App";

interface SliderTypes {
  value: number;
  props: SliderProps;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Slider({ value, props, onChange }: SliderTypes) {
  return (
    <div className="relative mt-2 mb-10">
      <label
        htmlFor="labels-range-input"
        className="text-2xl text-orange-400 capitalize text-shadow-md text-shadow-neutral-800"
      >
        {props.label}: {value}
      </label>
      <input
        id="labels-range-input"
        type="range"
        value={value}
        min={props.min}
        max={props.max}
        step={1}
        className="slider h-2 w-full cursor-pointer appearance-none rounded-lg bg-orange-400 shadow-md shadow-neutral-800"
        onChange={onChange}
      />
      <span className="absolute start-0 -bottom-7 text-xl text-orange-400 text-shadow-md text-shadow-neutral-800">
        Min ({props.min})
      </span>
      <span className="absolute end-0 -bottom-7 text-xl text-orange-400 text-shadow-md text-shadow-neutral-800">
        Max ({props.max})
      </span>
    </div>
  );
}
