import { FC } from "react";
import { CopyIcon } from "@radix-ui/react-icons";

interface Props {
  name: string;
  hex: string;
}

const ColorCard: FC<Props> = ({ name, hex }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
  };

  return (
    <div className="shadow rounded overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <div style={{ backgroundColor: hex }} className="h-24"></div>
      <div className="p-3 text-sm flex justify-between items-center">
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">{hex}</p>
        </div>
        <button onClick={copyToClipboard} className="text-blue-500 text-xs">Copy</button>
      </div>
    </div>
  );
};

export default ColorCard;