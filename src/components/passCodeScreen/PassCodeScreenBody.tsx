import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  ModalBody,
} from "@chakra-ui/react";
import bcrypt from "bcryptjs";
import ConditionalRenderer from "components/common/ConditionalRenderer";
import labels from "data/json/ui-labels.json";
import useLockScreen from "hooks/useLockScreen";
import usePassCodeTimeout from "hooks/usePassCodeTimeout";
import useResetAccount from "hooks/useResetAcount";
import { useEffect, useState } from "react";

export default function PassCodeScreenBody() {
  let runTimeout = usePassCodeTimeout("15 minute");
  const resetAccount = useResetAccount();
  const [passCodeValue, setPassCodeValue] = useState<string>("");
  const timeout = 5000;
  const [confirmMode, setConfirmMode] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>(labels.cantEmpty4);
  const { hashedValue, unlock } = useLockScreen();

  let isValid = passCodeValue !== "" && passCodeValue.length === 4;

  useEffect(() => {
    if (!isValid) setErrorText(labels.cantEmpty4);
    else setErrorText("");
  }, [passCodeValue.length]);

  const passCodeValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassCodeValue(e.target.value);
  };

  const submitted = (e: React.FormEvent) => {
    e.preventDefault();

    let canUnlock = isValid && bcrypt.compareSync(passCodeValue, hashedValue!);

    if (canUnlock) unlock();
    else setErrorText(labels.invalidPassCode);
  };

  const disablePassCode = () => {
    setConfirmMode(!confirmMode);
    setTimeout(() => {
      setConfirmMode(false);
    }, timeout);

    if (confirmMode) resetAccount();
  };

  return (
    <ModalBody>
      <form className="flex flex-col gap-6" onSubmit={submitted}>
        <FormControl isInvalid={!isValid || errorText !== ""}>
          <FormLabel>{labels.passCode}</FormLabel>
          <Input
            letterSpacing={2}
            textAlign="center"
            fontFamily="monospace"
            maxLength={4}
            type="password"
            value={passCodeValue}
            onInput={passCodeValueChanged}
          />
          <FormErrorMessage>{errorText}</FormErrorMessage>
        </FormControl>
        <Flex flexDirection="column" gap={1}>
          <Button type="submit" variant="solid" colorScheme="blue">
            {labels.check}
          </Button>
          <FormControl width="100%">
            <Button
              type="submit"
              width="100%"
              variant={confirmMode ? "outline" : "ghost"}
              colorScheme="red"
              onClick={disablePassCode}
            >
              {confirmMode ? labels.clickToConfirm : labels.disablePassCode}
            </Button>
            <ConditionalRenderer condition={confirmMode}>
              <FormHelperText>{labels.loseAllData}</FormHelperText>
            </ConditionalRenderer>
          </FormControl>
        </Flex>
      </form>
    </ModalBody>
  );
}
