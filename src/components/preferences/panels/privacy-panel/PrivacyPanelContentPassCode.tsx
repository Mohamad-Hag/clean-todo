import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import labels from "data/typescript/uiLabels";
import bcrypt from "bcryptjs";
import useLockScreen from "hooks/useLockScreen";
import useLanguage from "hooks/useLanguage";

interface PrivacyPanelContentPassCodeProps {
  onValidate: (isValid: boolean) => void;
}

export default function PrivacyPanelContentPassCode({
  onValidate,
}: PrivacyPanelContentPassCodeProps) {
  const { language } = useLanguage();
  const passCodeRef = useRef<HTMLInputElement>(null!);
  const [passCodeValue, setPassCodeValue] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const { hashedValue } = useLockScreen();

  useEffect(() => {
    passCodeRef.current.focus();
  }, []);

  const passCodeValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorText("");
    setPassCodeValue(e.target.value);
  };

  const submitted = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid =
      passCodeValue !== "" && bcrypt.compareSync(passCodeValue, hashedValue!);

    if (!isValid) setErrorText(labels[language.code].invalidPassCode);
    else setErrorText("");

    if (onValidate) onValidate(isValid);
  };

  return (
    <form onSubmit={submitted} className="flex flex-col gap-3">
      <FormControl isInvalid={errorText !== ""}>
        <FormLabel>{labels[language.code].enterPassCode}</FormLabel>
        <Input
          ref={passCodeRef}
          type="password"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={4}
          value={passCodeValue}
          onInvalid={(e) => {
            e.preventDefault();
          }}
          onChange={passCodeValueChanged}
        />
        <FormErrorMessage>{errorText}</FormErrorMessage>
      </FormControl>
      <Button type="submit" variant="solid" colorScheme="blue">
        {labels[language.code].check}
      </Button>
    </form>
  );
}
