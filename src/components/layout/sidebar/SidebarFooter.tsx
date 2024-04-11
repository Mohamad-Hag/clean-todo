import { Box } from "@chakra-ui/react";
import ConditionalRenderer from "components/common/ConditionalRenderer";
import PreferencesButton from "components/preferences/PreferencesButton";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import useLockScreen from "hooks/useLockScreen";
import { BiLock } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import Perferences from "../../preferences/Preferences";

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
