import bcrypt from "bcryptjs";
import labels from "data/typescript/uiLabels";
import useLanguage from "./useLanguage";
import useResetAccount from "./useResetAcount";
import useTimeoutConfirmation from "./useTimeoutConfirmation";
import { useEffect, useState } from "react";
import useLockScreen from "./useLockScreen";

const usePassCodeLogic = () => {
  const { language } = useLanguage();
  const [passCodeValue, setPassCodeValue] = useState<string>("");
  const [errorText, setErrorText] = useState<string>(
    labels[language.code].cantEmpty4
  );
  const { hashedValue, unlock } = useLockScreen();

  let isValid = passCodeValue !== "" && passCodeValue.length === 4;

  const setError = () => {
    if (!isValid) setErrorText(labels[language.code].cantEmpty4);
    else setErrorText("");
  };

  const changePassCodeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassCodeValue(e.target.value);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    let canUnlock = isValid && bcrypt.compareSync(passCodeValue, hashedValue!);

    if (canUnlock) unlock();
    else setErrorText(labels[language.code].invalidPassCode);
  };

  useEffect(() => {
    setError();
  }, [passCodeValue.length]);

  return {
    submit,
    changeValue: changePassCodeValue,
    value: passCodeValue,
    error: errorText,
    isValid: isValid && errorText === "",
  };
};

export default usePassCodeLogic;
