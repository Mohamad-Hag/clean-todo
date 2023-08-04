import { AccordionButton, AccordionIcon, Box, Button } from "@chakra-ui/react";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";
import { BiCategory } from "react-icons/bi";

interface CategoriesButtonProps {
  title: string;
}

export default function CategoriesButton({ title }: CategoriesButtonProps) {
  return (
    <AccordionButton
      className="w-full text-left pl-5 text-white"
      borderRadius="0 2em 2em 0"
      fontWeight="normal"
      h="3rem"
      justifyContent="flex-start"
      _hover={hoverStyle}
      _active={activeStyle}
    >
      <BiCategory style={{ marginRight: "0.5rem" }} />
      <Box className="flex-1 flex justify-between items-center">
        <Box as="span" flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </Box>
    </AccordionButton>
  );
}
