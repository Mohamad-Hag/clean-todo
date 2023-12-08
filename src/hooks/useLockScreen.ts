import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  lock as lockScreen,
  selectPassCode,
  setValue,
} from "redux/features/passCodeSlice";
import { unlock as unlockScreen } from "redux/features/passCodeSlice";
import LockScreenFunctions from "utils/interfaces/common/LockScreenFunctions";

const useLockScreen = (): LockScreenFunctions => {
  let d = useDispatch();
  const passCode = useSelector(selectPassCode);

  const lock = () => {
    d(lockScreen());
  };

  const unlock = () => {    
    d(unlockScreen());
  };

  const setPassCode = (passCodeValue?: string) => {
    d(setValue(passCodeValue));
  };

  return {
    lock,
    unlock,
    setPassCode,
    isPassed: passCode.isPassed,
    hashedValue: passCode.value,
  };
};

export default useLockScreen;
