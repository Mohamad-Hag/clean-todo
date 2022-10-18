import { Button } from "@chakra-ui/react";

interface SidebarButtonProps {
  icon: React.ReactElement;
  title: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function SidebarButton({
  icon,
  title,
  onClick,
  isActive = false,
}: SidebarButtonProps) {
  return (
    <Button
      className="w-full text-left pl-5 font-semibold text-white"
      borderRadius="0 2em 2em 0"
      leftIcon={icon}
      h="3rem"
      justifyContent="flex-start"
      bg={isActive ? "blue.400" : "transparent"}
      _hover={{
        bg: "#ffffff20",
      }}
      _active={{}}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
