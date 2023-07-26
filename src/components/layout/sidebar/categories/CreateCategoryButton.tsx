import { Button } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { open, setMode } from "../../../../redux/features/categoryFormSlice";

export default function CreateCategoryButton() {
  const d = useDispatch();

  const create = () => {
    d(setMode("create"));
    d(open());
  };

  return (
    <Button
      size="sm"
      className="mb-2"
      alignSelf="end"
      rightIcon={<BiPlus />}
      onClick={create}
    >
      Create Category
    </Button>
  );
}
