interface LockScreenFunctions {
  lock: () => void;
  unlock: () => void;
  setPassCode: (passCode?: string) => void;
  isPassCodeEnabled?: boolean;
  isPassed?: boolean;
  hashedValue?: string;
}

export default LockScreenFunctions;
