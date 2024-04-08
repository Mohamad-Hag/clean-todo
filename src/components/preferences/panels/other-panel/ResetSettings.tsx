import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import useTimeoutConfirmation from "hooks/useTimeoutConfirmation";
import { BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";
import { resetPreferences } from "redux/features/preferencesSlice";

export default function ResetSettings() {
  const { language } = useLanguage();
  const d = useDispatch();

  const resetToDefault = () => {
    d(resetPreferences());
    d(close());
  };

  const { confirm, confirmMode } = useTimeoutConfirmation(resetToDefault);

  let buttonLabel = !confirmMode
    ? labels[language.code].resetToDefault
    : labels[language.code].clickToConfirm;

  return (
    <FormControl>
      <FormLabel>{labels[language.code].resetPreferences}</FormLabel>
      <Button
        rightIcon={<BiReset />}
        onClick={confirm}
        colorScheme="blue"
        variant={!confirmMode ? "solid" : "outline"}
      >
        {buttonLabel}
      </Button>
    </FormControl>
  );
}
