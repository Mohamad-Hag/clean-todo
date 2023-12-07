import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import labels from "data/json/ui-labels.json";
import { useState } from "react";
import { BiExport, BiImport, BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";
import { resetPreferences } from "redux/features/preferencesSlice";
import downloadExportData from "utils/downloadExportData";
import { useRef } from "react";
import readJSONFile from "utils/readJSONFile";
import useImportData from "hooks/useImportData";

export default function OtherPanel() {
  const importData = useImportData();
  const fileInputRef = useRef<HTMLInputElement>(null!);
  const d = useDispatch();
  const [resetToDefaultConfirmMode, setResetToDefaultConfirmMode] =
    useState<boolean>(false);
  const timeout = 3000;
  let buttonLabel = !resetToDefaultConfirmMode
    ? labels.resetToDefault
    : labels.clickToConfirm;

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

  const importClicked = () => {
    readJSONFile(fileInputRef.current, (data) => {
      importData(data);
    });
  };

  return (
    <Stack spacing="8">
      <FormControl>
        <FormLabel>{labels.importData}</FormLabel>
        <input
          ref={fileInputRef}
          className="file-in"
          type="file"
          accept="application/json"
        />
        <Button rightIcon={<BiImport />} onClick={importClicked}>
          {labels.import}
        </Button>
        <FormHelperText>{labels.importJsonFile}</FormHelperText>
      </FormControl>
      <Flex alignItems="center" gap="2">
        <Button rightIcon={<BiExport />} onClick={downloadExportData}>
          {labels.export}
        </Button>
        <Button
          rightIcon={<BiReset />}
          onClick={resetToDefault}
          colorScheme="blue"
          variant={!resetToDefaultConfirmMode ? "solid" : "outline"}
        >
          {buttonLabel}
        </Button>
      </Flex>
    </Stack>
  );
}
