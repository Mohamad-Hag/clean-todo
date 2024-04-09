import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPassCode } from "redux/features/passCodeSlice";
import getMillisecondsByPassCodeTimeout from "utils/getMillisecondsByPassCodeTimeout";
import useLockScreen from "./useLockScreen";

const usePassCodeTimeout = (): void => {
  let { lock, unlock, isPassed } = useLockScreen();

  let timer: NodeJS.Timeout;
  const { passCodeTimeout } = useSelector(selectPassCode);
  const timeout = getMillisecondsByPassCodeTimeout(passCodeTimeout);

  const lockScreenAfterTimeout = () => {
    timer = setTimeout(lock, timeout);
  };

  const resetTimer = () => {
    clearTimeout(timer);
    unlock();
    timer = setTimeout(lock, timeout);
  };

  const addUserInteractionEvents = () => {
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("mousedown", resetTimer);
  };

  const clearInteractionEvents = () => {
    window.removeEventListener("mousemove", resetTimer);
    window.removeEventListener("keydown", resetTimer);
    window.removeEventListener("scroll", resetTimer);
    window.removeEventListener("mousedown", resetTimer);
  };

  const cleanUp = () => {
    clearTimeout(timer);
    clearInteractionEvents();
  };

  const start = () => {
    if (!passCodeTimeout || passCodeTimeout === "0" || !isPassed)
      return cleanUp;

    lockScreenAfterTimeout();
    addUserInteractionEvents();
    return cleanUp;
  };

  useEffect(start, [passCodeTimeout, isPassed]);
};

export default usePassCodeTimeout;
