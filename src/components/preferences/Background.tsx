import { Image } from "@chakra-ui/react";

type SourceString = string;

interface BackgroundProps {
  source: SourceString;
  isActive?: boolean;
  index: number;
  onSelect: (index: number) => void;
}

export default function Background({
  source,
  isActive = false,
  index,
  onSelect,
}: BackgroundProps) {
  const click = () => {
    if (onSelect) onSelect(index);
    let src = `url(${source})`;
    document.body.style.backgroundImage = src;
    localStorage.setItem("bg", source);
  };

  return (
    <Image
      onClick={click}
      className="h-20 w-32 bg-white shadow-md rounded-md cursor-pointer hover:opacity-70 active:opacity-50"
      border={isActive ? "3px solid #3182CE" : undefined}
      objectFit="cover"
      objectPosition="center"
      alt="Background"
      src={source}
    />
  );
}
