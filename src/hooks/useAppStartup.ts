import useChangeBackground from "./useChangeBackground";
import useKeyboardShortcut from "./useKeyboardShortcut";
import useLockScreen from "./useLockScreen";

const useAppStartup = () => {
  const lockKey = { key: "L", code: 76 };
  const { lock, isPassed } = useLockScreen();

  useChangeBackground();
  useKeyboardShortcut(lock, lockKey.code, "Shift");

  return { isPassed };
};

export default useAppStartup;
