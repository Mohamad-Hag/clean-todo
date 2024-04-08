import { useState } from "react";

const useTimeoutConfirmation = (
  confirmCallback: () => void,
  timeout = 5000
) => {
  const [confirmMode, setConfirmMode] = useState<boolean>(false);

  const confirm = () => {
    setConfirmMode(!confirmMode);
    setTimeout(() => {
      setConfirmMode(false);
    }, timeout);

    if (confirmMode) confirmCallback();
  };

  return { confirm, confirmMode };
};

export default useTimeoutConfirmation;
