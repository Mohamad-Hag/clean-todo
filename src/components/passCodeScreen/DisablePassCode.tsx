import { Button, FormControl, FormHelperText } from "@chakra-ui/react";
import ConditionalRenderer from "components/common/ConditionalRenderer";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import useResetAccount from "hooks/useResetAcount";
import useTimeoutConfirmation from "hooks/useTimeoutConfirmation";

interface DisablePassCodeProps {}

export default function DisablePassCode({}: DisablePassCodeProps) {
  const { language } = useLanguage();
  const resetAccount = useResetAccount();
  const { confirm, confirmMode } = useTimeoutConfirmation(resetAccount);

  return (
    <FormControl width="100%">
      <Button
        type="submit"
        width="100%"
        variant={confirmMode ? "outline" : "ghost"}
        colorScheme="red"
        onClick={confirm}
      >
        {confirmMode
          ? labels[language.code].clickToConfirm
          : labels[language.code].disablePassCode}
      </Button>
      <ConditionalRenderer condition={confirmMode}>
        <FormHelperText>{labels[language.code].loseAllData}</FormHelperText>
      </ConditionalRenderer>
    </FormControl>
  );
}
