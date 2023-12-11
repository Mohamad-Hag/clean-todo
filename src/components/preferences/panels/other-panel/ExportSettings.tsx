import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { BiExport } from "react-icons/bi";
import downloadExportData from "utils/downloadExportData";

export default function ExportSettings() {
  const { language } = useLanguage();

  return (
    <FormControl>
      <FormLabel>{labels[language.code].export}</FormLabel>
      <Button rightIcon={<BiExport />} onClick={downloadExportData}>
        {labels[language.code].export}
      </Button>
    </FormControl>
  );  
}
