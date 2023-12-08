import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import labels from "data/json/ui-labels.json";
import bcrypt from "bcryptjs";
import useLockScreen from "hooks/useLockScreen";

interface PrivacyPanelContentPassCodeProps {
  onValidate: (isValid: boolean) => void;
}

export default function PrivacyPanelContentPassCode({
  onValidate,
}: PrivacyPanelContentPassCodeProps) {
  const [passCodeValue, setPassCodeValue] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const { hashedValue } = useLockScreen();

  const passCodeValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorText("");
    setPassCodeValue(e.target.value);
  };

  const submitted = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = passCodeValue !== "" && bcrypt.compareSync(passCodeValue, hashedValue!);

    if (!isValid) setErrorText(labels.invalidPassCode);
    else setErrorText("");

    if (onValidate) onValidate(isValid);
  };

  return (
    <form onSubmit={submitted} className="flex flex-col gap-3">
      <FormControl isInvalid={errorText !== ""}>
        <FormLabel>{labels.enterPassCode}</FormLabel>
        <Input
          type="password"
          value={passCodeValue}
          onChange={passCodeValueChanged}
        />
        <FormErrorMessage>{errorText}</FormErrorMessage>
      </FormControl>
      <Button type="submit" variant="solid" colorScheme="blue">
        {labels.check}
      </Button>
    </form>
  );
}
