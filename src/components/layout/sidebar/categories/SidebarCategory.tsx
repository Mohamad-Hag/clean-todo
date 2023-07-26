import { Box } from "@chakra-ui/react";
import Category from "../../../../utils/interfaces/common/Category";
import SidebarCategoryButton, {
  SidebarCategoryButtonProps,
} from "./SidebarCategoryButton";
import SidebarCategoryControls from "./SidebarCategoryControls";

interface SidebarCategoryProps extends SidebarCategoryButtonProps {
  id: number;
}

export default function SidebarCategory({
  index,
  icon,
  title,
  onSelect,
  to,
  isActive = false,
  id,
}: SidebarCategoryProps) {
  const thisCategory: Category = {
    id: id,
    icon: icon,
    title: title,
  };

  return (
    <Box className="flex items-center gap-1" maxW="228px">
      <SidebarCategoryButton
        id={id}
        to={to}
        isActive={isActive}
        icon={icon}
        title={title}
        onSelect={onSelect}
        index={index}
      />
      <SidebarCategoryControls category={thisCategory} />
    </Box>
  );
}
