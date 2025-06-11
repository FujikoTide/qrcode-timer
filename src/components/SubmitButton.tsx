interface SubmitButtonType {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SubmitButton({ onClick }: SubmitButtonType) {
  return (
    <div>
      <button
        className="my-4 w-full rounded-2xl bg-green-600 p-5 text-3xl font-bold text-white shadow-md shadow-neutral-800 text-shadow-md text-shadow-neutral-800"
        onClick={onClick}
      >
        Generate QR Code
      </button>
    </div>
  );
}
