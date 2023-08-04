import { Box } from "@chakra-ui/react";
import { default as ICategory } from "utils/interfaces/common/Category";
import CategoryButton, { CategoryButtonProps } from "./CategoryButton";
import CategoryControls from "./CategoryControls";

interface CategoryProps extends CategoryButtonProps {
  id: number;
}

export default function Category({
  index,
  icon,
  title,
  onSelect,
  to,
  isActive = false,
  id,
}: CategoryProps) {
  const thisCategory: ICategory = {
    id: id,
    icon: icon,
    title: title,
  };

  return (
    <Box className="flex items-center gap-1" maxW="228px">
      <CategoryButton
        id={id}
        to={to}
        isActive={isActive}
        icon={icon}
        title={title}
        onSelect={onSelect}
        index={index}
      />
      <CategoryControls category={thisCategory} />
    </Box>
  );
}
