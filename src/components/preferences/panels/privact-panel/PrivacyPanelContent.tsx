import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import labels from "data/json/ui-labels.json";
import useLockScreen from "hooks/useLockScreen";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";

export default function PrivacyPanelContent() {
  const [passCodeValue, setPassCodeValue] = useState<string>();
  const [confirmMode, setConfirmMode] = useState<boolean>(false);
  const d = useDispatch();
  const { setPassCode, lock, unlock } = useLockScreen();
  const timeout = 3000;
  const [reenteredPassCodeValue, setReenteredPassCodeValue] =
    useState<string>();
  let canSetPassCode = !!(
    passCodeValue &&
    passCodeValue !== "" &&
    reenteredPassCodeValue &&
    reenteredPassCodeValue !== "" &&
    passCodeValue.length === 4 &&
    reenteredPassCodeValue.length === 4 &&
    passCodeValue === reenteredPassCodeValue
  );

  const passCodeValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassCodeValue(e.target.value);
  };

  const reenteredPassCodeValueChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReenteredPassCodeValue(e.target.value);
  };

  const submitted = (e: React.FormEvent) => {
    e.preventDefault();

    if (canSetPassCode) {
      setPassCode(passCodeValue);
      d(close());
      lock();
    }
  };

  const disablePassCode = () => {
    setConfirmMode(!confirmMode);
    setTimeout(() => {
      setConfirmMode(false);
    }, timeout);

    if (confirmMode) {
      setPassCode(undefined);
      d(close());
      unlock();
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={submitted}>
      <FormControl isInvalid={!canSetPassCode}>
        <FormLabel>{labels.enterPassCode}</FormLabel>
        <Input
          maxLength={4}
          type="password"
          value={passCodeValue}
          onChange={passCodeValueChanged}
        />
      </FormControl>
      <FormControl isInvalid={!canSetPassCode}>
        <FormLabel>{labels.reenter}</FormLabel>
        <Input
          type="password"
          maxLength={4}
          value={reenteredPassCodeValue}
          onChange={reenteredPassCodeValueChanged}
        />
        {!canSetPassCode && (
          <FormErrorMessage>{labels.cantEmptyNotMatch}</FormErrorMessage>
        )}
      </FormControl>
      <Button type="submit" variant="solid" colorScheme="blue">
        {labels.setPassCode}
      </Button>
      <Button
        variant={confirmMode ? "outline" : "ghost"}
        colorScheme="blue"
        onClick={disablePassCode}
      >
        {confirmMode ? labels.clickToConfirm : labels.disablePassCode}
      </Button>
    </form>
  );
}
