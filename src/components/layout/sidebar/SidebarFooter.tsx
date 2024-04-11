import { Box, IconButton } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import Perferences from "../../preferences/Preferences";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";
import ConditionalRenderer from "components/common/ConditionalRenderer";
import { BiLock } from "react-icons/bi";
import useIsMobile from "hooks/useIsMobile";
import useLockScreen from "hooks/useLockScreen";
import PreferencesButton from "components/preferences/PreferencesButton";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function SidebarFooter() {
  const { language } = useLanguage();
  const lockKey = { key: "L", code: 76 };
  const { status } = useSelector(selectSidebar);
  const { lock, isPassCodeEnabled } = useLockScreen();
  const display = (value: string) => (status === "shown" ? value : "none");

  return (
    <Box
      className="py-2 px-5 flex justify-end border-t-2"
      borderColor="#ffffff20"
      display={display("flex")}
    >
      <ConditionalRenderer condition={isPassCodeEnabled}>
        <PreferencesButton
          onClick={lock}
          shortcut={`${labels[language.code].shift} ${
            labels[language.code].plusSign
          } ${lockKey.key}`}
          label={labels[language.code].lockScreen}
          icon={<BiLock />}
        />
      </ConditionalRenderer>
      <Perferences />
    </Box>
  );
}
