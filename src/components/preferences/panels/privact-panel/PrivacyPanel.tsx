import { Heading, Stack } from "@chakra-ui/react";
import ConditionalRenderer from "components/common/ConditionalRenderer";
import labels from "data/json/ui-labels.json";
import useLockScreen from "hooks/useLockScreen";
import { useState } from "react";
import PrivacyPanelContent from "./PrivacyPanelContent";
import PrivacyPanelContentPassCode from "./PrivacyPanelContentPassCode";

export default function PrivacyPanel() {
  const { hashedValue } = useLockScreen();
  const [isValid, setIsValid] = useState<boolean>(!!!hashedValue);

  const validated = (isValid: boolean) => {
    setIsValid(isValid);
  };

  return (
    <div className="flex flex-col gap-8">
      <Stack spacing={4}>
        <Heading as="h2" size="sm">
          {labels.passCode}
        </Heading>
        <ConditionalRenderer
          condition={isValid}
          replaceWith={<PrivacyPanelContentPassCode onValidate={validated} />}
        >
          <PrivacyPanelContent />
        </ConditionalRenderer>
      </Stack>
    </div>
  );
}
