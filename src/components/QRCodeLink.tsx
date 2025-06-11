import { Link } from "react-router-dom";

interface QRCodeLinkType {
  URI: string;
}

export default function QRCodeLink({ URI }: QRCodeLinkType) {
  return (
    <div>
      <Link
        className="text-2xl text-orange-400 text-shadow-md text-shadow-neutral-800"
        to={URI}
      >
        {URI}
      </Link>
    </div>
  );
}
