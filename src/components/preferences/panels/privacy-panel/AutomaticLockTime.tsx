import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PassCodeTimeouts,
  passCodeTimeouts,
  selectPassCode,
  setPassCodeTimeout,
} from "redux/features/passCodeSlice";

export default function AutomaticLockTime() {
  const { language } = useLanguage();
  const { passCodeTimeout } = useSelector(selectPassCode);
  const d = useDispatch();

  const passCodeTimeoutChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    d(setPassCodeTimeout(e.target.value as PassCodeTimeouts));
  };
  return (
    <FormControl>
      <FormLabel>{labels[language.code].automaticLockTime}</FormLabel>
      <Select onChange={passCodeTimeoutChanged} defaultValue={passCodeTimeout}>
        {passCodeTimeouts.map((passCodeTimeout) => (
          <option key={passCodeTimeout} value={passCodeTimeout}>
            {passCodeTimeout === "0"
              ? labels[language.code].none
              : `${passCodeTimeout} ${labels[language.code].minute}`}
          </option>
        ))}
      </Select>
      <FormHelperText>
        {labels[language.code].automaticallyLockScreenAfter}
      </FormHelperText>
    </FormControl>
  );
}
