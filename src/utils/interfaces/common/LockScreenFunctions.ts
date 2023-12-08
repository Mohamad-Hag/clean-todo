interface LockScreenFunctions {
  lock: () => void;
  unlock: () => void;
  setPassCode: (passCode?: string) => void;
  isPassed?: boolean;
  hashedValue?: string;
}

export default LockScreenFunctions;
