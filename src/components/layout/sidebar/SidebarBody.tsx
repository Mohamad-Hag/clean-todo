import { Box } from "@chakra-ui/react";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";
import useSidebarNavigate from "hooks/useSidebarNavigate";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import { ScrollbarThinStyle } from "utils/styles/ScrollbarStyles";
import SidebarFoldersContainer from "../../folders/FoldersContainer";
import SidebarButtons from "./SidebarButtons";
import numbersKeyCodes from "data/json/numbersKeyCodes.json";

export default function SidebarBody() {
  const arrowUpKey = { key: "↑", code: 38 };
  const arrowDownKey = { key: "↓", code: 40 };
  const { status } = useSelector(selectSidebar);
  const display = (value: string) => (status === "shown" ? value : "none");
  const { navigateByIndex, navigateDown, navigateUp } = useSidebarNavigate();

  const select = (keyCode?: number, index?: number) => {
    navigateByIndex(index!);
  };

  useKeyboardShortcut(select, numbersKeyCodes, "Alt");
  useKeyboardShortcut(navigateUp, arrowUpKey.code, "Alt");
  useKeyboardShortcut(navigateDown, arrowDownKey.code, "Alt");

  return (
    <Box
      className={`flex-1 py-5 pr-3 ${ScrollbarThinStyle}`}
      display={display("initial")}
    >
      <SidebarButtons />
      <SidebarFoldersContainer />
    </Box>
  );
}
