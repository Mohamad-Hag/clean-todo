import { Flex } from "@chakra-ui/react";
import EditCategoryContainer from "./EditCategoryContainer";
import RemoveCategoryContainer from "./RemoveCategoryContainer";
import Category from "../../../../utils/interfaces/common/Category";

interface SidebarCategoryControlsProps {
  category: Category;
}

export default function SidebarCategoryControls({
  category,
}: SidebarCategoryControlsProps) {
  return (
    <Flex align="center" gap="1">
      <EditCategoryContainer category={category} />
      <RemoveCategoryContainer category={category} />
    </Flex>
  );
}
