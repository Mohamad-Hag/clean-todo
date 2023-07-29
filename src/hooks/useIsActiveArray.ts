import { useState } from "react";
import updateIsActiveArray from "../utils/updateIsActiveArray";

const useIsActiveArray = (
  initialLength: number,
  isActiveInitialIndex: number
): [boolean[], (index: number) => void] => {
  const initialize = () =>
    Array(initialLength)
      .fill(false)
      .map((_, index) => index === isActiveInitialIndex);

  const [isActiveArray, setIsActiveArray] = useState<boolean[]>(initialize());

  const activate = (index: number) => {
    setIsActiveArray(updateIsActiveArray(isActiveArray, index));
  };

  return [isActiveArray, activate];
};

export default useIsActiveArray;
