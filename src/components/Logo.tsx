import { Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface LogoProps {
  theme?: "dark" | "light";
  className?: string;
}

export default function Logo({ theme = "dark", className }: LogoProps) {
  return (
    <Flex
      gap="2"
      direction="row"
      align="center"
      zIndex="1000"
      position="relative"
      className={className}
    >
      <FaCheckCircle
        className={theme === "dark" ? "text-white" : "text-black"}
        size={25}
      />
      <p
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } ont-mono font-bold select-none whitespace-nowrap`}
      >
        CLEAN <span className="text-blue-400 font-mono">TODO</span>.
      </p>
    </Flex>
  );
}
