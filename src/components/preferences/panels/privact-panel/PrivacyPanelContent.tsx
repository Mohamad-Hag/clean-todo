import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import useLockScreen from "hooks/useLockScreen";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";

export default function PrivacyPanelContent() {
  const { language } = useLanguage();
  const passCodeRef = useRef<HTMLInputElement>(null!);
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

  useEffect(() => {
    passCodeRef.current.focus();
  }, []);

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
        <FormLabel>{labels[language.code].enterPassCode}</FormLabel>
        <Input
          ref={passCodeRef}
          maxLength={4}
          type="password"
          inputMode="numeric"
          pattern="[0-9]*"
          onInvalid={(e) => {
            e.preventDefault();
          }}
          value={passCodeValue}
          onChange={passCodeValueChanged}
        />
      </FormControl>
      <FormControl isInvalid={!canSetPassCode}>
        <FormLabel>{labels[language.code].reenter}</FormLabel>
        <Input
          type="password"
          inputMode="numeric"
          pattern="[0-9]*"
          onInvalid={(e) => {
            e.preventDefault();
          }}
          maxLength={4}
          value={reenteredPassCodeValue}
          onChange={reenteredPassCodeValueChanged}
        />
        {!canSetPassCode && (
          <FormErrorMessage>
            {labels[language.code].cantEmptyNotMatch}
          </FormErrorMessage>
        )}
      </FormControl>
      <Button type="submit" variant="solid" colorScheme="blue">
        {labels[language.code].setPassCode}
      </Button>
      <Button
        variant={confirmMode ? "outline" : "ghost"}
        colorScheme="blue"
        onClick={disablePassCode}
      >
        {confirmMode
          ? labels[language.code].clickToConfirm
          : labels[language.code].disablePassCode}
      </Button>
    </form>
  );
}
