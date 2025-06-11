export default function Meter({ props }) {
  return (
    <div>
      <p className="text-2xl text-orange-400 capitalize text-shadow-md text-shadow-neutral-800">
        {props.label}
        <meter min={props.min} max={props.max} value={props.value}>
          {props.value}%
        </meter>
      </p>
    </div>
  );
}
