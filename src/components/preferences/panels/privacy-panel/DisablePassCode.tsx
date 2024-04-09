import { Button } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import useLockScreen from "hooks/useLockScreen";
import useTimeoutConfirmation from "hooks/useTimeoutConfirmation";
import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";

export default function DisablePassCode() {
  const { language } = useLanguage();
  const { setPassCode, unlock } = useLockScreen();
  const d = useDispatch();

  const disablePassCode = () => {
    setPassCode(undefined);
    d(close());
    unlock();
  };

  const { confirm, confirmMode } = useTimeoutConfirmation(disablePassCode);
  return (
    <Button
      variant={confirmMode ? "outline" : "ghost"}
      colorScheme="blue"
      onClick={confirm}
    >
      {confirmMode
        ? labels[language.code].clickToConfirm
        : labels[language.code].disablePassCode}
    </Button>
  );
}
