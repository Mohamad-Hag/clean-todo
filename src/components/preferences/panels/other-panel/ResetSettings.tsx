import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { useState } from "react";
import { BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";
import { resetPreferences } from "redux/features/preferencesSlice";

export default function ResetSettings() {
  const { language } = useLanguage();
  const [resetToDefaultConfirmMode, setResetToDefaultConfirmMode] =
    useState<boolean>(false);
  const d = useDispatch();
  let buttonLabel = !resetToDefaultConfirmMode
    ? labels[language.code].resetToDefault
    : labels[language.code].clickToConfirm;
  const timeout = 3000;

  const resetToDefault = () => {
    setResetToDefaultConfirmMode(!resetToDefaultConfirmMode);
    setTimeout(() => {
      setResetToDefaultConfirmMode(false);
    }, timeout);

    if (resetToDefaultConfirmMode) {
      d(resetPreferences());
      d(close());
    }
  };

  return (
    <FormControl>
      <FormLabel>{labels[language.code].resetPreferences}</FormLabel>
      <Button
        rightIcon={<BiReset />}
        onClick={resetToDefault}
        colorScheme="blue"
        variant={!resetToDefaultConfirmMode ? "solid" : "outline"}
      >
        {buttonLabel}
      </Button>
    </FormControl>
  );
}
