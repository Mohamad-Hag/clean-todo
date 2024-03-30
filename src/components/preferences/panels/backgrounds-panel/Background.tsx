import { Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeBackground } from "redux/features/preferencesSlice";

type SourceString = string;

interface BackgroundProps {
  source: SourceString;
  minifiedSource: SourceString;
  isActive?: boolean;
  index: number;
  onSelect: (index: number) => void;
}

export default function Background({
  source,
  minifiedSource,
  isActive = false,
  index,
  onSelect,
}: BackgroundProps) {
  const d = useDispatch();
console.log(minifiedSource)
  const click = () => {
    if (onSelect) onSelect(index);
    d(changeBackground(source));
  };

  return (
    <Image
      onClick={click}
      className="h-20 w-32 bg-white shadow-md rounded-md cursor-pointer hover:opacity-70 active:opacity-50"
      border={isActive ? "3px solid #3182CE" : undefined}
      objectFit="cover"
      objectPosition="center"
      alt="Background"
      src={minifiedSource}
    />
  );
}
