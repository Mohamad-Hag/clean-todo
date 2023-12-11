import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useImportData from "hooks/useImportData";
import useLanguage from "hooks/useLanguage";
import React, { useRef } from "react";
import { BiImport } from "react-icons/bi";
import readJSONFile from "utils/readJSONFile";

export default function ImportSettings() {
  const { language } = useLanguage();
  const importData = useImportData();
  const fileInputRef = useRef<HTMLInputElement>(null!);

  const importClicked = () => {
    readJSONFile(fileInputRef.current, (data) => {
      importData(data);
    });
  };

  return (
    <FormControl>
      <FormLabel>{labels[language.code].importData}</FormLabel>
      <input
        ref={fileInputRef}
        className="file-in"
        type="file"
        accept="application/json"
      />
      <Button rightIcon={<BiImport />} onClick={importClicked}>
        {labels[language.code].import}
      </Button>
      <FormHelperText>{labels[language.code].importJsonFile}</FormHelperText>
    </FormControl>
  );
}
