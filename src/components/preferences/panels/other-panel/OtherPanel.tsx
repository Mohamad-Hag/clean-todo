import { Stack } from "@chakra-ui/react";
import ImportSettings from "./ImportSettings";
import LanguageSettings from "./LanguageSettings";
import ResetSettings from "./ResetSettings";
import ExportSettings from "./ExportSettings";

export default function OtherPanel() {
  return (
    <Stack spacing="8">
      <LanguageSettings />
      <ImportSettings />
      <ExportSettings />
      <ResetSettings />
    </Stack>
  );
}
