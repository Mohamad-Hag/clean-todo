import { PassCodeTimeouts } from "redux/features/passCodeSlice";
import useLockScreen from "./useLockScreen";

const usePassCodeTimeout = (timeoutValue: PassCodeTimeouts) => {
  let { hashedValue, isPassed, lock } = useLockScreen();

  let timeout: NodeJS.Timeout;
  const time =
    timeoutValue === "15 minute"
      ? 5000 //900000
      : timeoutValue === "30 minutes"
      ? 1800000
      : timeoutValue === "1 hour"
      ? 3600000
      : 0;

  const readyTimeout = () => {
    console.log("ready ispassed", isPassed);
    if (isPassed) return;
    timeout = setTimeout(() => {
      console.log("lock");
      lock();
    }, time);
  };

  const reRunTimeout = () => {
    console.log("rerun ispassed", isPassed);
    if (!isPassed) return;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log("lock re");
      lock();
    }, time);
  };

  const runTimeout = () => {
    if (!!!hashedValue || time === 0) return;

    readyTimeout();

    window.onmousemove = () => {
      reRunTimeout();
    };

    window.onkeyup = () => {
      reRunTimeout();
    };
  };

  return runTimeout;
};

export default usePassCodeTimeout;
